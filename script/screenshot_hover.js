document.addEventListener("DOMContentLoaded",setup); 

/*Obtener el elemento de captura principal */
var main_screenshot;

function setup(){
    /*Obtener los elementos de captura secundaria */
    const small_screenshots = document.getElementsByClassName("scs scs_small shorter_delay");

    /*Asignar la captura principal */
    main_screenshot = document.getElementById("main_scs");
    /*Captura default */
    main_screenshot.src = small_screenshots[0].src;


    /*Asignar un event listener a todas las capturas pequeñas */
    for (index = 0; index < small_screenshots.length; index++) {
        const element = small_screenshots[index];

        /*Enviar el src del elemento a la funcion de hover*/
        element.addEventListener("mouseenter",function(event) {
        switch_main_screenshot(element.src);
        });
        
        
    }
}

function switch_main_screenshot(image_src){
    main_screenshot.src = image_src;
}
