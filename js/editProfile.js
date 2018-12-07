var newtask = document.getElementById( 'newTask' );
var btn = document.getElementById( 'add' );
var nTaskPlace = document.getElementById( 'nTaskPlace' );
var userTools = [];

//localStorage.setItem("tool", newtask);
userTools[0] = newtask;
userTools.push(newtask);
//console.log(userTools);

    var tool = $("#newTask").val();

    localStorage.setItem("tool", tool);
    userTools.push(tool);

var AddTask = function() {
		var containerDiv = document.createElement( 'div' );
    var paragraph = document.createElement( 'p' );
    paragraph.innerHTML = newtask.value;
    paragraph.style.display = "inline-block";
    var editInput = document.createElement( 'input' );
    editInput.style.width = "200px";
    editInput.style.height = "25px";
    editInput.style.fontSize = "20px";
    editInput.style.display= 'none';
    editInput.style.marginTop = "2px";
    editInput.style.fontFamily = "Futura";
    editInput.style.fontSize = "15px";
    editInput.value = newtask.value;
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
        document.getElementById("newTask").innerHTML = localStorage.getItem("newTask");
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
    newtask.value = '';
    nTaskPlace.insertBefore( containerDiv, nTaskPlace.firstChild );
}
 btn.addEventListener( 'click', AddTask );

