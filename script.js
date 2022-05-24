Vue.component('slot-reel', {
  props: ['value', 'canlock'],
  data: function () {
    return {
      momentum: null,
      audio: {
        spin: new Audio('https://freesound.org/data/previews/120/120373_824230-lq.mp3'),
        spinEnd: new Audio('https://freesound.org/data/previews/145/145441_2615119-lq.mp3'),
        lock: new Audio('https://freesound.org/data/previews/56/56246_91374-lq.mp3') },

      reelTileCount: 15,
      reelTileData: null,
      reelSourceData: [
      {
        name: 'Lemon',
        value: 2,
        image: '1.png' },

      {
        name: 'Melon',
        value: 4,
        image: '2.png' },

      {
        name: 'Grapes',
        value: 10,
        image: '3.png' },

      {
        name: 'Cherry',
        value: 16,
        image: '4.png' },

      {
        name: 'Bar',
        value: 32,
        image: '5.png' }],


      reelIndex: 2,
      tile1Index: 0,
      tile2Index: 1,
      tile3Index: 2,
      tile4Index: 3,
      tile5Index: 4,
      locked: false };

  },
  beforeMount: function () {
    // Build up the reelTileData array with random tiles  
    let frs = [];
    let count = this.reelTileCount;
    this.audio.spin.volume = 0.3;
    this.audio.spinEnd.volume = 0.8;
    this.audio.lock.volume = 0.2;
    this.audio.spin.currentTime = 0.3;
    // Method 1, random until count is reached
    // while (count > 0) {
    //   const fruitIndex = Math.floor(Math.random() * this.reelSourceData.length)
    //   const fruitObject = this.reelSourceData[fruitIndex]
    //   frs.push(fruitObject)
    //   count--
    // }

    // Method 2, sort on value, use index to determine entry count, shuffle
    let reelSourceData = this.reelSourceData.slice(0);
    reelSourceData.sort((a, b) => b.value - a.value);
    reelSourceData.forEach((sd, i) => {
      let times = i + 1 + i; // 0+1+0=1, 3+2+3=8
      while (times > 0) {
        frs.push(sd);
        times--;
      }
    });

    function shuffle(array) {
      var currentIndex = array.length,temporaryValue,randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    this.reelTileData = shuffle(frs);
  },
  mounted: function () {
    this.$el.addEventListener("transitionend", this.animateEnd);
  },
  computed: {},

  methods: {
    run: function () {
      console.log('run');
      if (!this.locked) {
        const min = 8;
        const max = 28;
        const momentum = Math.floor(Math.random() * (max - min + 1) + min);
        this.momentum = momentum;
        this.audio.spin.play();
        this.animate();
      } else {
        this.locked = false;
        this.$emit('stopped', this.reelTileData[this.reelIndex], true);
      }
    },
    animate: function () {
      this.$el.classList.add('move');
    },
    animateEnd: function () {
      this.$el.classList.remove('move');
      this.reIndex();
      this.momentum = this.momentum - 1;
      if (this.momentum > 0) {
        setTimeout(this.animate, 10);
      } else {
        this.$emit('stopped', this.reelTileData[this.reelIndex]);
        this.audio.spinEnd.play();
        this.audio.spin.pause();
        this.audio.spin.currentTime = 0.3;
      }
    },
    reIndex: function () {
      const end = this.reelTileData.length - 1; //this.reelTileCount - 1
      const index = this.reelIndex === 0 ? end : this.reelIndex - 1;
      // const index = this.index === end ? 0 : this.index + 1
      this.reelIndex = index;
      this.tile1Index = index === 1 ? end : index === 0 ? end - 1 : index - 2;
      this.tile2Index = index === 0 ? end : index - 1;
      this.tile3Index = index;
      this.tile4Index = index === end ? 0 : index + 1;
      this.tile5Index = index === end - 1 ? 0 : index === end ? 1 : index + 2;
    },
    lock: function () {
      if (this.canlock) {
        this.locked = !this.locked;
        this.audio.lock.play();
      }
    } },


  template: `<div class="Reel" v-bind:class="{'is-locked':locked}" v-on:mousedown="lock()">
    <div class="Reel-inner">
      <img class="Reel-image" :src="reelTileData[tile1Index].image" />
      <img class="Reel-image" :src="reelTileData[tile2Index].image" />
      <img class="Reel-image" :src="reelTileData[tile3Index].image" />
      <img class="Reel-image" :src="reelTileData[tile4Index].image" />
      <img class="Reel-image" :src="reelTileData[tile5Index].image" />
    </div>
  </div>` });




Vue.component('slot-machine', {
  data: function () {
    return {
      spend: 6,
      credits: 6,
      win: 0,
      resultData: false,
      canlock: true,
      waslocked: false,
      audio: {
        win: new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3'),
        insertCoin: new Audio('coin.mp3'),
        bigwin: new Audio('https://freesound.org/data/previews/270/270319_5123851-lq.mp3') } };


  },
  beforeMount: function () {},
  mounted: function () {
    window.addEventListener('keydown', this.keydown);
  },
  computed: {},

  methods: {
    keydown: function (e) {
      console.log(e.which);
      const key = {
        one: 49,
        two: 50,
        three: 51,
        space: 32 };

      if (e.which === key.one) {
        this.$refs.reel1.lock();
        e.preventDefault();
      } else if (e.which === key.two) {
        this.$refs.reel2.lock();
        e.preventDefault();
      } else if (e.which === key.three) {
        this.$refs.reel3.lock();
        e.preventDefault();
      } else if (e.which === key.space) {
        this.spin();
        e.preventDefault();
      }
    },
    spin: function () {
      if (this.credits > 0 && !this.resultData) {
        this.resultData = [];
        this.credits = this.credits - 0.5;
        this.$refs.reel1.run();
        this.$refs.reel2.run();
        this.$refs.reel3.run();
      }
    },
    insertCoin: function () {
      this.audio.insertCoin.currentTime = 0;
      this.audio.insertCoin.play();
      this.credits += .5;
      this.spend += .5;
    },
    takeWin: function () {
      if (this.win > 0) {
        this.credits += this.win;
        this.win = 0;
      }
    },
    reelStopped(resultData, wasLocked) {
      if (wasLocked) this.waslocked = wasLocked;

      this.resultData.push(resultData);
      if (this.resultData.length === 3) {
        this.checkWin(this.resultData);
        if (this.waslocked) {
          this.waslocked = false;
          this.canlock = false;
        } else {
          this.canlock = true;
        }
      }
    },
    checkWin: function () {
      if (this.resultData.length === 3) {// ;-)
        const v1 = this.resultData[0];
        const v2 = this.resultData[1];
        const v3 = this.resultData[2];
        if (v1.name === v2.name && v2.name === v3.name) {
          if (v1.value >= 10) {
            this.audio.bigwin.play();
          } else {
            this.audio.win.play();
          }
          this.win += v1.value;
          this.waslocked = true; // prevent lock after an unlocked win
        } else {
          const bar1 = v1.name === 'Bar';
          const bar2 = v2.name === 'Bar';
          const bar3 = v3.name === 'Bar';
          if (bar1 && bar2 || bar1 && bar3 || bar2 && bar3) {
            // this.audio.bigwin.play()
            // this.win += 16
            // this.waslocked = true // prevent lock after an unlocked win
          } else if (bar1 || bar2 || bar3) {
            // this.audio.win.play()
            // this.win += 4
            // this.waslocked = true // prevent lock after an unlocked win
          } else {
              // Lose : (
            }
        }
      }
      this.resultData = false;
    } },


  template: `<div class="SlotMachine">
    <div class="SlotMachine-reels">
      <div class="SlotMachine-shadow"></div>
      <div class="SlotMachine-payline"></div>
      <slot-reel ref="reel1" :canlock="canlock" v-on:stopped="reelStopped"></slot-reel>
      <slot-reel ref="reel2" :canlock="canlock" v-on:stopped="reelStopped"></slot-reel>
      <slot-reel ref="reel3" :canlock="canlock" v-on:stopped="reelStopped"></slot-reel>
    </div>
    <div class="SlotMachine-stats">
      <div class="SlotMachine-coin" v-on:mousedown="insertCoin()"></div>
      <div class="SlotMachine-stat is-credit">
        <div class="SlotMachine-statTitle">Credits</div>
        <div class="SlotMachine-statValue">{{credits.toFixed(2)}}</div>
        <div class="SlotMachine-statSub">{{spend.toFixed(2)}}</div>
      </div>
      <div class="SlotMachine-stat is-win">
        <div class="SlotMachine-statTitle">Won</div>
        <div class="SlotMachine-statValue">{{win.toFixed(2)}}</div>
      </div>
    </div>
    <div class="SlotMachine-actions">
      <button class="SlotMachine-button is-spin" v-on:mousedown="spin()">Play</button>
      <div class="SlotMachine-button is-win" v-bind:class="{'has-win':win}" v-on:mousedown="takeWin()">Take Win</div>
    </div>
  </div>` });




var app = new Vue({
  el: '#app' });