document.addEventListener("DOMContentLoaded", function () {
    // Mostrar y ocultar botón "Volver arriba"
    let  btnVolverArriba = document.querySelector("#btnVolverArriba");

    window.addEventListener("scroll", function () {
      
      let skillsOffsetTop = document.querySelector("#skills").offsetTop;
      if (window.pageYOffset > skillsOffsetTop) {
        btnVolverArriba.style.marginRight = "0";
      } else if (window.pageYOffset <= skillsOffsetTop) {
        btnVolverArriba.style.marginRight = "-60px";
      }
    });
  
    // Movimiento suave de scroll  "Volver arriba"
    let volverArriba = document.querySelectorAll("a.volver-arriba");
    for (var i = 0; i < volverArriba.length; i++) {
      volverArriba[i].addEventListener("click", function (e) {

        e.preventDefault();
        if (window.pageYOffset != 0) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          
        }
      });
    }
  });
  