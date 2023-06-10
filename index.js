document.addEventListener('DOMContentLoaded', function () {
  var text = 'Mateo Palacios Corazzina, más conocido por su nombre artístico Trueno, es un rapero, cantante y freestyler argentino. Comenzó su carrera en las batallas de freestyle a los catorce años, cuando intentó participar en los torneos porteños A Cara de Perro Zoo Juniors y Red Bull Regional.Al año siguiente, se consagró campeón de la competencia A Cara de Perro Zoo Juniors.Más tarde participó en varios torneos de freestyle, tanto nacionales como internacionales.En 2017, apoyado por el sello discográfico Neuen, comenzó con su carrera musical al lanzar su sencillo debut «K.I.N.G.», y ese mismo año se consagró campeón de la competencia “Cruce de Campeones”.Tras su éxito, anunció su retiro de las batallas de freestyle y se centró principalmente en su carrera musical.En 2020 lanzaría su álbum debut de estudio, Atrevido, bajo el sello discográfico Neuen y distribuido por Sony Music Latin.';
  var delay = 35; // Retraso entre cada carácter (en milisegundos)
  var el = document.getElementById('text');
  var index = 0;

  function showText() {
    el.innerHTML += text[index];
    index++;

    if (index < text.length) {
      setTimeout(showText, delay);
    }
  }

  setTimeout(showText, delay);
  el.style.opacity = 1;
});
// Desplazamiento suave al hacer clic en un enlace de la barra de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
   window.onload = function () {
     var opciones = document.querySelectorAll('.opcion');

     for (var i = 0; i < opciones.length; i++) {
       opciones[i].addEventListener('click', function (event) {
         var enlaces = document.querySelectorAll('.opcion');
         for (var j = 0; j < enlaces.length; j++) {
           enlaces[j].classList.remove('active-link');
         }
         this.classList.add('active-link');
       });
     }
   };
//efecttos imagenes que aparezcan al pasar el mouse
   document.addEventListener('DOMContentLoaded', function () {
     const section = document.getElementById('seccion2');
     const images = section.querySelectorAll('.imagenes li');

     function aplicarAnimacion() {
       images.forEach(function (image, index) {
         setTimeout(function () {
           image.classList.add('aparecer');
         }, index * 200); // Ajusta el tiempo de retraso entre cada imagen (200ms en este caso)
       });
     }

    //  function resetearAnimacion() {
    //    images.forEach(function (image) {
    //      image.classList.remove('aparecer');
    //    });
    //  }

     section.addEventListener('mouseenter', aplicarAnimacion);
     section.addEventListener('mouseleave', resetearAnimacion);
   });



