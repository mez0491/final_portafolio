
document.addEventListener("DOMContentLoaded",assign_buttons); 

main("languages/index.json","en");

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
        console.log(error);
    }
}

async function find_elements_by_id(id_data){
    //Obtener los nombres de las llaves
    
    const key_names = Object.keys(id_data);
    console.log(key_names);
    
    /*Buscar dentro de todas las llaves del arreglo */
    for (index = 0; index < key_names.length; index++) {
        
        /*Encontrar el elemento usando ids */
        const found_item = document.getElementById(key_names[index]);
        console.log(found_item);
        /*Cambiar texto dentro de los elementos*/
        found_item.textContent = id_data[key_names[index]];
        
    }

}
/*Botones de lenguaje*/
function assign_buttons(){
    /*Boton ingles */
    const boton_en = document.getElementById("lang_button_en");
    boton_en.addEventListener('click', function(event) {
        main('languages/index.json', 'en');
    });
    boton_en.addEventListener('touchend', function(event) {
        main('languages/index.json', 'en');
    });

    /*Boton español */
    const boton_es = document.getElementById("lang_button_es");
    boton_es.addEventListener('click', function(event) {
        main('languages/index.json', 'es');
    });

    boton_es.addEventListener('touchend', function(event) {
        main('languages/index.json', 'es');
    });
    /*Boton frances */
    const boton_fr = document.getElementById("lang_button_fr");
    boton_fr.addEventListener('click', function(event) {
        main('languages/index.json', 'fr');
    });
    boton_fr.addEventListener('touchend', function(event) {
        main('languages/index.json', 'fr');
    });
}

