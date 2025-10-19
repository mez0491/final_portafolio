document.addEventListener("DOMContentLoaded",setup); 
document.addEventListener("DOMContentLoaded",assign_buttons); 

var target_path;

function setup(){
    /*Encontrar el camino hacia el archivo de lenguajes*/
    const element = document.getElementById("lang_file");
    target_path = element.href;
    
    /*Obtener el lenguaje preferido del usuario dentro del buscador */
    const prefered_language = "es";

    main(target_path,prefered_language);
}

async function main(file_path,lang){
    await get_json(file_path,lang);
}

async function get_json(file_path,lang){
    var lang_data = await fetch_json(file_path,lang);
    /*Cambiar contenido de los elementos */
    await find_elements_by_id(lang_data);
}

async function fetch_json(target_string,target_lang){
    try {
        const res = await fetch(target_string);
        const json = await res.json();
        
        return json[target_lang];
    } catch (error) {

    }
}

async function find_elements_by_id(id_data){
    //Obtener los nombres de las llaves
    
    const key_names = Object.keys(id_data);
    
    /*Buscar dentro de todas las llaves del arreglo */
    for (index = 0; index < key_names.length; index++) {
        
        /*Encontrar el elemento usando ids */
        const found_item = document.getElementById(key_names[index]);

        /*Cambiar texto dentro de los elementos*/
        found_item.textContent = id_data[key_names[index]];
        
    }

}
/*Botones de lenguaje*/
function assign_buttons(){
    /*Boton ingles */
    const boton_en = document.getElementById("lang_button_en");
    boton_en.addEventListener('click', function(event) {
        main(target_path, 'en');
    });
    boton_en.addEventListener('touchend', function(event) {
        main(target_path, 'en');
    });

    /*Boton español */
    const boton_es = document.getElementById("lang_button_es");
    boton_es.addEventListener('click', function(event) {
        main(target_path, 'es');
    });

    boton_es.addEventListener('touchend', function(event) {
        main(target_path, 'es');
    });
    /*Boton frances */
    const boton_fr = document.getElementById("lang_button_fr");
    boton_fr.addEventListener('click', function(event) {
        main(target_path, 'fr');
    });
    boton_fr.addEventListener('touchend', function(event) {
        main(target_path, 'fr');
    });
}

