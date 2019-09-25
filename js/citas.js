const buttonCite = document.querySelector('#buttonCite');
const citeOutput = document.querySelector('#cite');
const authorOutput = document.querySelector('#author');

let cites = [
  'La mayor declaración de amor es la que no se hace; el hombre que siente mucho, habla poco.',
  'La felicidad consiste en saber unir el final con el principio.',
  'Todo lo que escuchamos es una opinión, no un hecho. Todo lo que vemos es una perspectiva, no es la verdad.',
  'De todos los animales de la creación el hombre es el único que bebe sin tener sed, come sin tener hambre y habla sin tener nada que decir.',
  'Educación es lo que queda después de olvidar lo que se ha aprendido en la escuela.',
  'El sabio no dice nunca todo lo que piensa, pero siempre piensa todo lo que dice.',
  'Solo hay una felicidad en la vida – amar y ser amado.',
  'El placer y la acción hacen que las horas parezcan cortas.',
  'El éxito depende del esfuerzo.',
  'No busques los errores, busca un remedio.',
  'Todos somos muy ignorantes. Lo que ocurre es que no todos ignoramos las mismas cosas.',
  'Quien tiene paciencia, obtendrá lo que desea.',
  'No malgastes tu tiempo, pues de esa materia está formada la vida.',
  'La confianza en sí mismo es el primer secreto del éxito.',
  'La ocasión hay que crearla, no esperar a que llegue.',
  'Cuando el hombre no se encuentra a sí mismo, no encuentra nada.',
  'El fracaso es simplemente una nueva oportunidad de empezar de nuevo, esta vez de forma más inteligente.',
  'Una buena cabeza y un buen corazón son siempre combinaciones formidables.',
  'La envidia es una declaración de inferioridad.',
  'La inteligencia es la habilidad de adaptarse al cambio.',
  'Solo existe un bien, el conocimiento. Solo hay un mal, la ignorancia.',
  'Los hombres tienden a creer aquello que les conviene.',
  'De humanos es errar y de necios permanecer en el error',
  'Hace falta toda una vida para aprender a vivir.',
  'La política es el arte de buscar problemas, encontrarlos, realizar un diagnóstico falso y aplicar después remedios equivocados.'

];

let authors = [
  'Platón',
  'Pitágoras',
  'Marco Aurelio',
  'John Steinbeck',
  'Albert Einstein',
  'Aristóteles',
  'George Sand',
  'William Shakespeare',
  'Sófocles',
  'Henry Ford',
  'Albert Einstein',
  'Benjamin Franklin',
  'Benjamin Franklin',
  'Emerson',
  'Francis Bacon',
  'Goethe',
  'Henry Ford',
  'Nelson Mandela',
  'Napoleón',
  'Stephen Hawking',
  'Sócrates',
  'Cayo Julio César',
  'Marco Tulio Cicerón',
  'Séneca',
  'Groucho Marx'


];

let lastNumber = 0;

function rand () {
  let rnd = Math.floor(Math.random() * cites.length);
  if (rnd != lastNumber) {
    citeOutput.innerText = `"${cites[rnd]}"`;
    authorOutput.innerText = authors[rnd];
    lastNumber = rnd;
  } else {
    rand(); // Recursion
  }
} // End rand function

buttonCite.addEventListener('click', rand); // Call the function, in events you can't do this -> rand() , parenthesis no!