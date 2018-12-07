/*function addComment(){
    var comment = $("#forumComment").val();
    localStorage.setItem("comment", comment);
}

function addComment2(){
    var comment2 = $("#forumComment2").val();
    localStorage.setItem("comment2", comment2);
}

function addComment3(){
    var comment3 = $("#forumComment3").val();
    localStorage.setItem("comment3", comment3);
}

function addComment4(){
    var comment4 = $("#forumComment4").val();
    localStorage.setItem("comment4", comment4);
}

function addComment5(){
    var comment5 = $("#forumComment5").val();
    localStorage.setItem("comment5", comment5);
}

function addComment6(){
    var comment6 = $("#forumComment6").val();
    localStorage.setItem("comment6", comment6);
}

function addComment7(){
    var comment7 = $("#forumComment7").val();
    localStorage.setItem("comment7", comment7);
}

function addComment8(){
    var comment8 = $("#forumComment8").val();
    localStorage.setItem("comment8", comment8);
}

function addComment9(){
    var comment9 = $("#forumComment9").val();
    localStorage.setItem("comment9", comment9);
}

function addComment10(){
    var comment10 = $("#forumComment10").val();
    localStorage.setItem("comment10", comment10);
}

function addComment11(){
    var comment11 = $("#forumComment11").val();
    localStorage.setItem("comment11", comment11);
}

function addComment12(){
    var comment12 = $("#forumComment12").val();
    localStorage.setItem("comment12", comment12);
}

function addComment13(){
    var comment13 = $("#forumComment13").val();
    localStorage.setItem("comment13", comment13);
}

function addComment14(){
    var comment14 = $("#forumComment14").val();
    localStorage.setItem("comment14", comment14);
}

function addComment15(){
    var comment15 = $("#forumComment15").val();
    localStorage.setItem("comment15", comment15);
}

function addComment16(){
    var comment16 = $("#forumComment16").val();
    localStorage.setItem("comment16", comment16);
}

function addComment17(){
    var comment17 = $("#forumComment17").val();
    localStorage.setItem("comment17", comment17);
}

function addComment18(){
    var comment18 = $("#forumComment18").val();
    localStorage.setItem("comment18", comment18);
}

function addComment19(){
    var comment19 = $("#forumComment19").val();
    localStorage.setItem("comment19", comment19);
}

function addComment20(){
    var comment20 = $("#forumComment20").val();
    localStorage.setItem("comment20", comment20);
}

function addComment21(){
    var comment21 = $("#forumComment21").val();
    localStorage.setItem("comment21", comment21);
}*/

function processSearch2(){
    var input = $("#myQuestion").val();

    localStorage.setItem("input", input);
}

function clearSearch(){
    $('#myform').get(0).reset();
}

function retrieveSearchInfo(){
    var input = localStorage.getItem("input");
    $("#myQuestion").html("Input: " + input);
}

var forumData = [

    {'name': 'Steve M.', 'Question': ['How to make egg whites fluffy without a hand-mixer?'], 'link':'forumAnswers3.html', 'keyword': ['egg', 'eggs', 'whites', 'hand-mixer', 'hand', 'mixer'], 'email': 'steve@gmail.com', 'profile': 'ProfileSteveM.html'},
    {'name': 'Jack Q.', 'Question': ['What kind of pan should I use to sear steak?'], 'link':'forumAnswers1.html', 'keyword': ['pan', 'sear', 'steak'], 'email': 'jack@gmail.com', 'profile': 'ProfileJackQ.html'},
    {'name': 'Amy P.', 'Question': ['How do I use a crock pot?'], 'link':'forumAnswers2.html', 'keyword': ['crock', 'pot', 'crock pot'], 'email': 'amy@gmail.com', 'profile': 'ProfileAmyP.html'},
    {'name': 'Johnny G.', 'Question': ['Is it safe to cook chicken in a slow cooker?'], 'link':'forumAnswers4.html', 'keyword': ['safe', 'chicken', 'slow cooker'], 'email': 'johnny@gmail.com', 'profile': 'ProfileJohnnyG.html'},
    {'name': 'Gabby H.', 'Question': ['What are the must have knives?'], 'link':'forumAnswers5.html', 'keyword': ['knives', 'knife', 'must'], 'email': 'gabby@gmail.com', 'profile': 'ProfileGabbyH.html'},
    {'name': 'Joe C.', 'Question': ['What are some good egg free recipes?'], 'link':'forumAnswers6.html', 'keyword': ['egg', 'free','recipes', 'recipe'], 'email': 'joe@gmail.com', 'profile': 'ProfileJoeC.html'},
    {'name': 'Jenny R.', 'Question': ['How to cook pasta.'], 'link':'forumAnswers7.html', 'keyword': ['pasta'], 'email': 'jenny@gmail.com', 'profile': 'ProfileJennyR.html'},
    {'name': 'Tammy B.', 'Question': ['What are some good gluten free banana bread recipes?'], 'link':'forumAnswers8.html', 'keyword': ['gluten', 'free', 'banana', 'bread', 'recipe'], 'email': 'tammy@gmail.com', 'profile': 'ProfileTammyB.html'},
    {'name': 'Darren T.', 'Question': ['Does anyone have a vegetarian jambalaya recipe?'], 'link':'forumAnswers9.html', 'keyword': ['vegetarian', 'jambalaya', 'recipe'], 'email': 'darren@gmail.com', 'profile': 'ProfileDarrenT.html'},
    {'name': 'Tom W.', 'Question': ['Tips for doubling a recipe?'], 'link':'forumAnswers10.html', 'keyword': ['tips', 'doubling', 'double', 'recipe'], 'email': 'tom@gmail.com', 'profile': 'ProfileTomW.html'},
    {'name': 'Bob P.', 'Question': ['What are some good substitutes for vanilla extract?'], 'link':'forumAnswers11.html', 'keyword': ['vanilla', 'extract', 'substitute','substitutes'], 'email': 'bob@gmail.com', 'profile': 'ProfileBobP.html'},
    // {'name': 'Chloe M.', 'Question': ['How do you know if cheese has gone bad?'], 'link':'forumAnswers1.html', 'keyword': ['cheese', 'bad', 'cheeses'], 'email': 'chloe@gmail.com'},
    // {'name': 'Chris J.', 'Question': ['Can you substitute baking soda for baking powder?'], 'link':'forumAnswers1.html', 'keyword': ['substitute', 'baking', 'baking soda', 'powder', 'baking powder'], 'email': 'chris@gmail.com'},
    // {'name': 'Kylie K.', 'Question': ['How much water do I need to cook rice?'], 'link':'forumAnswers1.html', 'keyword': ['rice', 'water', 'cook', 'much'], 'email': 'kylie@gmail.com'},
    // {'name': 'Kim L.', 'Question': ['How do I know if an egg has gone bad?'], 'link':'forumAnswers1.html', 'keyword': ['egg', 'bad', 'eggs'], 'email': 'kim@gmail.com'},

]

var forumDataTEMP = forumData;

$(document).ready(function() {
    console.log('hello world');

input = localStorage.getItem("input").toLowerCase();
// localStorage.setItem("input", input.split(' '));
input = localStorage.getItem("input").split(' ');
// var wordArray=input.split(' ');

var source   = $("#forumResultsTemplate").html();
var template = Handlebars.compile(source);
var parentDiv = $("#forumResults");

// when you first load the page, set a custom name if you have one:

// use localStorage to store your name
$("#forumComment").click(function() {
  console.log("commenting");
  var inputComment = prompt("Type your comment here..");
  if (inputComment) {
    $("#myComment").html(inputComment);
    localStorage.setItem('customComment', inputComment);
  }
});

var comment = localStorage.getItem('customComment');
if (comment) {
  $("#myComment").html(comment);
}


/* new CODE */
    var count = 0;
    var foundResult = false;
for (var i = 0; i < forumDataTEMP.length; i++) { //goes through all data
    var curData = forumDataTEMP[i];
    //console.log(forumDataTEMP[i]);
    //console.log(curData);
    for (var j = 0; j < curData["keyword"].length; j++){
        //console.log("secondforloop");
        for (var k = 0; k < input.length; k++) {
            //console.log("thirdforloop")
            if (curData["keyword"][j] == input[k] ) {
                // console.log(forumData["name"]);
                //console.log("ITS WORKING");
                var forumHtml = template(forumDataTEMP[i]);
                parentDiv.append(forumHtml);
                //forumDataTEMP.splice(i,1); //to remove element array
                delete forumDataTEMP[ i ];
                //delete curData;
                //forumDataTEMP[i].push("'name': 'blank', 'question': 'blank', 'keyword': ['blank']");
                count = count + 1;
                //console.log(forumHtml);
                //console.log(forumDataTEMP);
                foundResult = true;
                break;
            }
        }
        if(foundResult == true){
          foundResult = false;
          break;
        }
    }
}

var results = [
    {'result': ["0 Results. Sorry, we couldn't find what you were looking for. Please try again!"]}
]

var source1   = $("#noResultsTemplate").html();
var template = Handlebars.compile(source1);
var parentDiv = $("#noResults");

if (count == 0) {
    var noResults = template(results[0]);
    parentDiv.append(noResults);
}





});
