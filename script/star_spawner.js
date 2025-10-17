
/*Esto hace que estemos seguros de que todos los elementos del documento fueron cargados*/
document.addEventListener("DOMContentLoaded", set_star_param);

function set_star_param() {
    /*Obtener elementos que tengan la clase de estrellas para determinar sus atributos*/
    const STARS = document.getElementsByClassName("star_bg");
    /*Obtener documento para obtener su anchura*/
    const document_width = document.documentElement.clientWidth;

    for (let index = 0; index < STARS.length; index++) {
        var element = STARS[index];

        /*Calcular valores usando random*/
        var start_value = ((((index + 1) / 10) * document_width) / document_width) * 100;
        var end_value = start_value - 80;

        var delay_value = (Math.random() * 2) * -1;
        var dur_value = ((index + 1) * 0.1) * 30;

        /*Convertir valores a %*/
        var final_value_start = String(start_value + "%");
        var final_value_end = String(end_value + "%");
        var final_delay = String(delay_value + "s");
        var final_dur = String(dur_value + "s");

        /*Determinar atributos*/
        element.style.setProperty("--x_start", final_value_start);
        element.style.setProperty("--x_end", final_value_end);
        element.style.setProperty("--delay", final_delay);
        element.style.setProperty("--dur", final_dur);
        element.style.setProperty("--id", index);
        
        

        /*Crear efecto de fantasma*/ 
        create_afterimage(element,8);
    }
    
}
function create_afterimage(reference_element,amount){
    /*Obtener el contendor de fondo dentro del documento*/
    const bg_container = document.getElementById("bg"); 
    
    /*Crear la cantidad de imagenes especificada*/
    for (let i = 0; i < amount; i++) {
        /*Asignar valor de delay */
        var delay_value = (i+1) * 0.05;
        /*Nueva imagen*/
        const new_afterimage = document.createElement("div");

        /*Añadir clases a elemento fantasma */
        new_afterimage.classList.add("star_afterimage");
        
        /*Determinar atributos de el fantasma usando el elemento original*/
        var estilo_computado = window.getComputedStyle(reference_element);
        
        /*Obtener valores de el elemento de referencia*/ 
        /*Convertir a flotante para calcular un nuevo valor */
        var fixed_delay = parseFloat(estilo_computado.getPropertyValue("--delay"));
        var new_delay = fixed_delay + delay_value;
        
        /*Calcular otros valores */
        var new_z_index =  i*-1;
        var opacity_percent =  (i / amount) * 100;
        console.log(opacity_percent);
        var new_opacity = (1 - (opacity_percent * 0.01));
        console.log(new_opacity);

        /*Convertir valores a %*/
        var final_delay = String(new_delay + "s");
        var final_opacity = String(new_opacity);
        var final_zindex = String(new_z_index);

        /*Asignar nuevos valores*/
        new_afterimage.style.setProperty("--x_start",estilo_computado.getPropertyValue("--x_start"));
        new_afterimage.style.setProperty("--x_end",estilo_computado.getPropertyValue("--x_end"));
        new_afterimage.style.setProperty("--dur",estilo_computado.getPropertyValue("--dur"));
        new_afterimage.style.setProperty("--delay",final_delay);
        new_afterimage.style.setProperty("--opac",final_opacity);
        new_afterimage.style.setProperty("z-index",final_zindex);


        /*debug */
        console.log(final_delay);


        /*Añadir al fondo*/ 
        bg_container.appendChild(new_afterimage);

        console.log("creando imagen"); 
            
    }
}