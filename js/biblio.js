'use strit' 

var Index = 0;
const ken = ["<a href='https://www.casadellibro.com/libro-los-pilares-de-la-tierra/9788401328510/746613' class='neon1'>LOS PILARES DE LA TIERRA</a><br><a href='https://www.casadellibro.com/libro-un-mundo-sin-fin/9788401336560/1158356' class='neon1'>UN MUNDO SIN FIN</a><br>"]

const colleen = ["<a href='https://www.casadellibro.com/libro-el-primer-hombre-de-roma/9788408024002/598865' class='neon1'>EL PRIMER HOMBRE DE ROMA</a><br><a href='https://www.casadellibro.com/libro-la-corona-de-hierba/9788408023999/598867' class='neon1'>LA CORONA DE HIERBA</a><br><a href='https://www.casadellibro.com/libro-favoritos-de-la-fortuna-senores-de-roma-3/9788408080701/1224609' class='neon1'>FAVORITOS DE LA FORTUNA</a><br><a href='https://www.casadellibro.com/libro-las-mujeres-de-cesar/9788408023975/607387' class='neon1'>LAS MUJERES DE CESAR</a><br><a href='https://www.casadellibro.com/libro-cesar/9788408080725/1224611' class='neon1'>CESAR</a><br>   <a href='https://www.casadellibro.com/libro-el-caballo-de-cesar/9788466617949/979839' class='neon1'>EL CABALLO DE CESAR</a><br><a href='https://www.casadellibro.com/libro-antonio-y-cleopatra/9788408079354/1215933' class='neon1'>ANTONIO Y CLEOPATRA</a><br><a href='https://www.casadellibro.com/libro-la-cancion-de-troya/9788408072614/1137547' class='neon1'>LA CANCIÓN DE TROYA</a><br>"]

const press = ["<a href='https://www.casadellibro.com/libro-las-puertas-de-fuego/9788497938327/1065693' class='neon1'>LAS PUERTAS DE FUEGO</a><br><a href='https://www.casadellibro.com/libro-vientos-de-guerra/9788497594745/885813' class='neon1'>VIENTOS DE GUERRA</a><br><a href='https://www.casadellibro.com/libro-la-conquista-de-alejandro-magno/9788497939034/1052823' class='neon1'>LA CONQUISTA DE ALEJANDRO MAGNO</a><br><a href='https://www.casadellibro.com/libro-la-campana-afgana/9788408074274/1172870' class='neon1'>LA CAMPAÑA AFGANA</a><br>"]

const negr = ["<a href='https://www.casadellibro.com/libro-la-hija-del-nilo/9788467007657/1994538' class='neon1'>LA HIJA DEL NILO</a><br><a href='https://www.casadellibro.com/libro-salamina/9788467026672/1184608' class='neon1'>SALAMINA</a><br><a href='https://www.casadellibro.com/libro-el-espartano/9788467047752/3055772' class='neon1'>EL ESPARTANO</a><br><a href='https://www.casadellibro.com/libro-los-idus-de-enero/9788491399728/14220916' class='neon1'>LOS IDUS DE ENERO</a><br>"]

const sant = ["<a href='https://www.casadellibro.com/libro-rebeldes-las-campanas-de-sertorio-en-hispania/9788416331161/2599206' class='neon1'>REBELDES</a><br><a href='https://www.casadellibro.com/libro-pena-amaya/9788415433439/2323074' class='neon1'>PEÑA AMAYA</a><br><a href='https://www.casadellibro.com/libro-salamina/9788467026672/1184608' class='neon1'>SALAMINA</a><br><a href='https://www.casadellibro.com/libro-el-ateniense/9788417683122/9628238' class='neon1'>EL ATENIENSE</a><br><a href='https://www.casadellibro.com/libro-godos-el-principio-del-fin-del-imperio-romano/9788416970278/5420054' class='neon1'>GODOS: EL PRINCIPIO DEL FIN DEL IMPERIO ROMANO</a><br>"]

const vill = ["<a href='https://www.casadellibro.com/libro-hellenikon/9788493690847/1245119' class='neon1'>HELLENIKON</a><br>"]

const esla = ["<a href='https://www.casadellibro.com/libro-ultimas-pasiones-del-caballero-almafiera/9788408045731/2063967' class='neon1'>ULTIMAS PASIONES DEL CABALLERO ALMAFIERA</a><br>"]

const guil = ["<a href='https://www.casadellibro.com/libro-el-herrero-de-galilea/9788416331680/4692747' class='neon1'>EL HERRERO DE GALILEA</a><br><a href='https://www.casadellibro.com/libro-el-macedonio/9788415433408/2256964' class='neon1'>EL MACEDONIO</a><br><a href='https://www.casadellibro.com/libro-el-asirio/9788415433279/2196320' class='neon1'>EL ASIRIO</a><br><a href='https://www.casadellibro.com/libro-la-estrella-de-sangre/9788415433903/2369474' class='neon1'>LA ESTRELLA DE SANGRE</a><br>"]

const haef = ["<a href='https://www.casadellibro.com/libro-anibal-la-novela-de-cartago/9788435005500/22137' class='neon1'>ANIBAL LA NOVELA DE CARTAGO</a><br><a href='https://www.casadellibro.com/libro-alejandro-magno-i-el-unificador-de-grecia-la-helade/9788495971241/844750' class='neon1'>ALEJANDRO MAGNO I</a><br><a href='https://www.casadellibro.com/libro-alejandro-el-conquistador-de-un-imperio/9788435005913/448721' class='neon1'>ALEJANDRO MAGNO II. EL CONQUISTADOR DE UN IMPERIO</a><br>"]

const corr = ["<a href='https://www.casadellibro.com/libro-numancia/9788408160724/3098280' class='neon1'>NUMANCIA</a><br><a href='https://www.casadellibro.com/libro-el-trono-maldito/9788408132530/2358956' class='neon1'>EL TRONO MALDITO</a><br><a href=' https://www.casadellibro.com/libro-el-conquistador/9788466667562/11603815' class='neon1'>EL CONQUISTADOR</a><br>"]

const aizp = ["<a href='https://www.casadellibro.com/libro-el-heredero-de-tartesos/9788415415060/1983714' class='neon1'>EL HEREDERO DE TARTESOS</a><br><a href='https://www.casadellibro.com/libro-el-caliz-de-melqart/9788415415695/2301689' class='neon1'>EL CÁLIZ DE MELQART</a><br>"]

const chic = ["<a href='https://www.casadellibro.com/libro-el-asesinato-de-socrates/9788408186755/6366358' class='neon1'>EL ASESINATO DE SOCRATES</a><br><a href='https://www.casadellibro.com/libro-el-asesinato-de-pitagoras-edicion-10-aniversario-duomo/9788417761059/9612996' class='neon1'>EL ASESINATO DE PITÁGORAS</a><br><a href='https://www.casadellibro.com/libro-la-hermandad/9788416634545/4722727' class='neon1'>LA HERMANDAD</a><br><a href='https://www.casadellibro.com/libro-el-asesinato-de-platon/9788408232421/11667645' class='neon1'>EL ASESINATO DE PLATÓN</a><br>"]

const pell = ["<a href='https://www.casadellibro.com/libro-el-espiritu-del-lince/9788496952980/1971427' class='neon1'>EL ESPIRITU DEL LINCE</a>"]

const caba = [" <a href='https://www.casadellibro.com/libro-el-hijo-del-desierto/9788466642910/1694941' class='neon1'>EL HIJO DEL DESIERTO</a><br><a href='https://www.casadellibro.com/libro-el-secreto-del-nilo/9788466651202/2029279' class='neon1'>EL SECRETO DEL NILO</a><br><a href='https://www.casadellibro.com/libro-las-lagrimas-de-isis/9788466665988/9476813' class='neon1'>LAS LÁGRIMAS DE ISIS</a><br>"]

const poste = ["<a href='https://www.casadellibro.com/libro-africanus-el-hijo-del-consul-africanus---libro-i/9788466639323/1220246' class='neon1'>AFRICANUS: EL HIJO DEL CÓNSUL</a><br><a href='https://www.casadellibro.com/libro-las-legiones-malditas-trilogia-africanus-2/9788413141459/10090746' class='neon1'> LAS LEGIONES MALDITAS</a><br><a href='https://www.casadellibro.com/libro-la-traicion-de-roma-trilogia-africanus-3/9788466664011/6769803' class='neon1'>LA TRAICIÓN DE ROMA</a><br><a href='https://www.casadellibro.com/libro-yo-julia-premio-planeta-2018/9788408197409/7363692' class='neon1'>YO, JULIA</a><br><a href='https://www.casadellibro.com/libro-los-asesinos-del-emperador-trilogia-de-trajano-1/9788408118329/2114430' class='neon1'>LOS ASESINOS DEL EMPERADOR</a><br><a href='https://www.casadellibro.com/libro-circo-maximo-trilogia-de-trajano-libro-2/9788408117117/2125380' class='neon1'>CIRCO MÁXIMO</a><br><a href='https://www.casadellibro.com/https://www.casadellibro.com/libro-la-legion-perdida-trilogia-de-trajano-3/9788408176374/5804829' class='neon1'>LA LEGION PERDIDA</a><br><a href='https://www.casadellibro.com/libro-y-julia-reto-a-los-dioses/9788408224693/11240314' class='neon1'>Y JULIA RETÓ A LOS DIOSES</a><br><a href='https://www.casadellibro.com/libro-roma-soy-yo/9788466671781/12782477' class='neon1'>ROMA SOY YO</a><br><a href='https://www.casadellibro.com/libro-maldita-roma-serie-julio-cesar-2/9788466676564/14009940' class='neon1'>MALDITA ROMA</a><br>"]

const massi = ["<a href='https://www.casadellibro.com/ebook-akropolis-ebook/9788466348683/7571661' class='neon1'>AKROPOLIS</a><br><a href='https://www.casadellibro.com/libro-alexandros-i-el-hijo-del-sueno/9788497594400/88413' class='neon1'>ALEXANDROS: EL HIJO DEL SUEÑO</a><br><a href='https://www.casadellibro.com/libro-alexandros-ii-las-arenas-de-amon/9788497594417/884141' class='neon1'>ALEXANDROS:LAS ARENAS DE AMON</a><br><a href='https://www.casadellibro.com/libro-alexandros-iii-el-confin-del-mundo/9788497594394/884142' class='neon1'>ALEXANDROS:EL CONFIN DEL MUNDO</a><br>"]

const rever = ["<a href='https://www.casadellibro.com/libro-sidi/9788420435473/9780817' class='neon1'>SIDI</a><br>"]

const perid = ["<a href='https://www.casadellibro.com/ebook-la-maldicion-de-la-reina-leonor-ebook/9788467048193/3008547' class='neon1'>LA MALDICIÓN DE LA REINA LEONOR</a><br><a href='https://www.casadellibro.com/libro-esperando-al-rey/9788467045918/2595059' class='neon1'>ESPERANDO AL REY</a><br>"]

const sebas = ["<a href='https://www.casadellibro.com/libro-nemesis/9788491395829/11778202' class='neon1'>NÉMESIS</a><br><a href='https://www.casadellibro.com/libro-la-loba-del-al-andalus/9788466651745/2016452' class='neon1'>LA LOBA DE AL-ANDALUS</a><br><a href='https://www.casadellibro.com/libro-el-ejercito-de-dios/9788490702581/3019257' class='neon1'>EL EJERCITO DE DIOS </a><br><a href='https://www.casadellibro.com/libro-las-cadenas-del-destino-trilogia-almohade-3/9788490705001/6768922' class='neon1'>LAS CADENAS DEL DESTINO </a><br><a href='https://www.casadellibro.com/libro-venganza-de-sangre/9788498726565/1986767' class='neon1'>VENGANZA DE SANGRE </a><br><a href='https://www.casadellibro.com/libro-el-caballero-del-alba/9788493579067/1181905' class='neon1'>EL CABALLERO DEL ALBA </a><br><a href='https://www.casadellibro.com/libro-sin-alma-la-gesta-de-simon-de-montfort/9788491398165/13258890' class='neon1'>SIN ALMA </a><br>"]

const lucen = ["<a href='https://www.casadellibro.com/libro-nazari/9788435063456/11589841' class='neon1'>NAZARÍ</a><br>"]

const adal = ["<a href='https://www.casadellibro.com/libro-las-armas-de-la-luz/9788491394662/12068968' class='neon1'>LAS ARMAS DE LA LUZ </a><br><a href='https://www.casadellibro.com/libro-el-mozarabe/9788466645249/1774632' class='neon1'>EL MOZÁRABE</a><br><a href='https://www.casadellibro.com/libro-los-banos-del-pozo-azul/9788491392323/6859735' class='neon1'>LOS BAÑOS DEL POZO AZUL</a><br><a href='https://www.casadellibro.com/libro-alcazaba/9788427039636/2063966' class='neon1'>ALCAZABA</a><br><a href='https://www.casadellibro.com/libro-el-camino-mozarabe/9788427039452/2050168' class='neon1'>EL CAMINO MOZÁRABE</a><br>"]

const zoil = ["<a href='https://www.casadellibro.com/libro-lordemano/9788466670319/12471155' class='neon1'>LORDEMANO</a><br>"]

const mille = ["<a href='https://www.casadellibro.com/ebook-la-cancion-de-aquiles-adn-ebook/9788413622149/12231606' class='neon1'>LA CANCIÓN DE AQUILES</a><br>"]

const ares = ["<a href='https://imagessl1.casadellibro.com/a/l/s7/61/9788410640061.webp' class='neon1'>LA SOMBRA DE ATÓN</a><br><a href='https://imagessl1.casadellibro.com/a/l/s7/61/9788410640061.webp' class='neon1'>LA PIRAMIDE BLANCA</a><br>"]

const palom = ["<a href='https://imagessl2.casadellibro.com/a/l/s7/12/9798215000212.webp' class='neon1'>NOCHES TRISTES</a><br>"]

const goiz = ["<a href='https://imagessl7.casadellibro.com/a/l/s7/87/9788408280187.webp' class='neon1'>LA SANCGRE DEL PADRE</a><br>"]

const calia = ["<a href='https://www.casadellibro.com/ebook-siempre-vienen-de-noche-ebook/9788466678216/16057098' class='neon1'>SIEMPRE VIENEN DE NOCHE</a><br><a href='https://www.casadellibro.com/ebook-el-puno-del-emperador-ebook/9788466669382/12327986' class='neon1'>EL PUÑO DEL EMPERADOR</a>"]

const href = ["<a href='https://amimaneracocinando.com/recetas/ensaladas/'>RECETAS ENSALADAS</a><br><a href='https://www.google.es/search?q=documentales+egipto&tbs=qdr:y,dur:l&prmd=vni&sxsrf=ALeKk013MRgnutUJtcZqVPtaFqFzs11l3Q:1588266454914&source=lnt&tbm=vid&sa=X&ved=2ahUKEwjk8OnO0ZDpAhWYBWMBHYK4AVMQpwV6BAgMEAc&biw=412&bih=766#ip=1'>EGIPTO</a><br><a href='http://www.rtve.es/documentales/historia/'>RTVE HISTORIA</a><br><a href='https://ofertassupermercados.es/alimentos/'>ALIMENTOS BENEFICIOS</a><br><a href='https://www.google.com/search?client=firefox-b-d&q=best+epic+music'>EPIC MUSIC</a><br><a href='https://learn.freecodecamp.org/'>FREE CODE</a><br><a href='https://handbox.es/como-hacer-marcos-para-cuadros-y-fotos'>COMO HACER UN MARCO</a><br><a href='https://deideaaapp.org/uso-del-localstorage-utilizando-html5-css3-jquery-e-ionic/'>LOCALSTORAGE</a><br><a href='https://medium.com/@EADCourses/merece-la-pena-la-certificaci%C3%B3n-de-microsoft-azure-af4cf70ac73d'>AZURE</a><br><a href='https://es.aliexpress.com/item/4000187528510.html?spm=a2g0o.productlist.0.0.28851883YPXcO5&algo_pvid=d3f1e096-a73a-44bd-9910-2fc84cd290c0&algo_expid=d3f1e096-a73a-44bd-9910-2fc84cd290c0-1&btsid=0bb0624316093318749996744eb889&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'>SILLIN,plato litepro 56t,tija litepro ultra-light, pedales wellgo,cubiertas kenda 20',ruedas rt 20 y 16 radios,bielas litepro BCD:130MM AL6061</a><br><a href='http://fina.dyndns.tv/Series/'>SERIES</a><br><a href='https://www.merca2.es/10-productos-gama-gourmet-exclusivos-auchan'>COMPRA ALCAMPO</a><br><a href='https://www.testdevelocidad.es/'>TEST VELOCIDAD</a><br><a href='https://docs.google.com/forms/d/e/1FAIpQLScUzMu6fwNfipzzSNqoEXBoooydECn8Yy8GPY9pLkMyT19QYA/viewform'>TAREAS</a><br><a href='https://docs.google.com/spreadsheets/d/1rGw2obziCiGuXmG1ZdBiptMp5Iq9OhMjdEt0razK3ug/edit#gid=1836679048'>RESULTADOS TAREAS</a><br><a href='https://www.google.com/maps/d/viewer?ie=UTF8&hl=es&msa=0&ll=40.424669109304844%2C-3.7280425869403766&spn=0.180313%2C0.307617&t=h&z=17&mid=1NC1WUwnHlWkwmoFDK3flnYG9ffI'>ANILLO VERDE</a><br><a href='https://blogs.desnivel.com/lamontanyanosune/2017/10/30/cargar-track-gps-en-google-maps/'>CARGAR MAPA</a><br>"]









var index = e[i];

function bib(e){
document.getElementById("libro").innerHTML = e[Index];

}

