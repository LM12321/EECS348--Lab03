function change_elements(){
    const color_to_change = document.getElementById("Color").value; // get color
    const border_width = document.getElementById("border-width").value;
    const text_size = document.getElementById("text-size").value;
    const element_to_change = document.getElementById("text-to-change");

    change_color(element_to_change, color_to_change)
    if (border_width){
        change_border(element_to_change, border_width)
    }
        
    if (text_size){
        change_text_size(element_to_change, text_size)
    }
}


function change_color(text_and_border, color){
    
    
    text_and_border.style.color = color;
    text_and_border.style.borderStyle = "solid";
    text_and_border.style.borderColor = color;

}

function change_border(border_to_change, border_size){
    border_to_change.style.borderWidth = border_size + "px";
}

function change_text_size(text_to_change, text_size){
    text_to_change.style.fontSize = text_size + "px";
}