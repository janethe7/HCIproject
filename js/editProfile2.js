var newtask2 = document.getElementById( 'newTask2' );
var btn = document.getElementById( 'add2' );
var nTaskPlace2 = document.getElementById( 'nTaskPlace2' );

function addIngredient(){
var ingredient = $("#newTask2").val();
console.log(ingredient);
localStorage.setItem("ingredient", ingredient);
}


var AddTask2 = function() {
		var containerDiv = document.createElement( 'div' );
    var paragraph = document.createElement( 'p' );
    paragraph.innerHTML = newtask2.value;
    paragraph.style.display = "inline-block";
    var editInput = document.createElement( 'input' );
    editInput.style.width = "200px";
    editInput.style.height = "25px";
    editInput.style.fontSize = "20px";
    editInput.style.display= 'none';
    editInput.style.marginTop = "2px";
    editInput.style.fontFamily = "Futura";
    editInput.style.fontSize = "15px";
    editInput.value = newtask2.value;
    var btnEdit = document.createElement( 'button' );
    btnEdit.innerHTML = 'Edit';
    btnEdit.style.width = "80px";
    btnEdit.style.height = "35px";
    btnEdit.style.background =  "#6ca2a0";
    btnEdit.style.fontFamily = "Futura";
    btnEdit.style.fontSize = "15px";
    var btnSave = document.createElement( 'button' );
    btnSave.innerHTML = 'Save';
    btnSave.style.display= 'none';
    paragraph.style.marginTop = "10px";
    paragraph.style.marginBottom = "10px";
    paragraph.style.marginLeft = "2px";
    paragraph.style.marginRight = "4px";
    paragraph.style.paddingTop = "0px";
    paragraph.style.paddingBottom = "0px";
    paragraph.style.paddingLeft = "0px";
    paragraph.style.paddingRight = "0px";
    btnEdit.addEventListener( 'click', function(){
        editInput.style.display = 'inline-block';
        editInput.style.marginTop = "2px";
        paragraph.style.display = 'none';
        btnSave.style.display = 'inline-block';
        btnEdit.innerHTML = 'Edit';
        btnSave.style.width = "80px";
        btnSave.style.height = "35px";
        btnSave.style.background =  "#6ca2a0";
        btnSave.style.fontFamily = "Futura";
        btnSave.style.fontSize = "15px";
        btnEdit.style.display = 'none';
        paragraph.innerHTML = editInput.value;
    });
    btnSave.addEventListener( 'click',function(){
        editInput.style.display = 'none';
        paragraph.style.display = 'inline-block';
        btnSave.style.display = 'none';
        btnEdit.style.display = 'inline-block';
        paragraph.innerHTML = editInput.value;
    });
    containerDiv.appendChild( paragraph );
    containerDiv.appendChild( editInput );
    containerDiv.appendChild( btnEdit );
    containerDiv.appendChild( btnSave );
    newtask2.value = '';
    nTaskPlace2.insertBefore( containerDiv, nTaskPlace2.firstChild );
}
 btn.addEventListener( 'click', AddTask2 );
