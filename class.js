var myForm = document.getElementById("myForm");
var myInput =document.getElementById("myInput");
var myItem =document.getElementById("myInput")

myForm.addEventListener("submit" , function ( event ) {
    event.preventDefault ();
        createItem(myInput.value);
    
})

function createItem(inputItems) {

    var items = `<li>&{inputItems}
    <Button oneclick="deleteElement(this)">Delete</Button>
    </li>`


    myItem.insertAdjacentElement("beforeend", items);
    myInput.value ="";
    myInput.focus();
    
}

function deleteElement(button){
    button.parentElement.remove();
}
