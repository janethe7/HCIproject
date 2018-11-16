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
    {'name': 'Steve M.', 'Question': ['How to make egg whites fluffy without a hand-mixer?'], 'link':'forumAnswers1.html', 'keyword': ['egg', 'eggs', 'whites', 'hand-mixer', 'hand', 'mixer'], 'email': 'steve@gmail.com'},
    {'name': 'Jack Q.', 'Question': ['What kind of pan should I use to sear steak?'], 'link':'forumAnswers1.html', 'keyword': ['pan', 'sear', 'steak'], 'email': 'jack@gmail.com'},
    {'name': 'Amy P.', 'Question': ['How do I use a crock pot?'], 'link':'forumAnswers1.html', 'keyword': ['crock', 'pot', 'crock pot'], 'email': 'amy@gmail.com'},
    {'name': 'Johnny G.', 'Question': ['Is it safe to cook chicken in a slow cooker?'], 'link':'forumAnswers1.html', 'keyword': ['safe', 'chicken', 'slow cooker'], 'email': 'johnny@gmail.com'},
    {'name': 'Gabby H.', 'Question': ['What are the must have knives?'], 'link':'forumAnswers1.html', 'keyword': ['knives', 'knife', 'must'], 'email': 'gabby@gmail.com'},
    {'name': 'Joe C.', 'Question': ['What are some good egg free recipes?'], 'link':'forumAnswers1.html', 'keyword': ['egg', 'free','recipes', 'recipe'], 'email': 'joe@gmail.com'},
    {'name': 'Jenny R.', 'Question': ['How to cook pasta.'], 'link':'forumAnswers1.html', 'keyword': ['pasta'], 'email': 'jenny@gmail.com'},
    {'name': 'Tammy B.', 'Question': ['What are some good gluten free banana bread recipes?'], 'link':'forumAnswers1.html', 'keyword': ['gluten', 'free', 'banana', 'bread', 'recipe'], 'email': 'tammy@gmail.com'},
    {'name': 'Darren T.', 'Question': ['Does anyone have a vegetarian jambalaya recipe?'], 'link':'forumAnswers1.html', 'keyword': ['vegetarian', 'jambalaya', 'recipe'], 'email': 'darren@gmail.com'},
    {'name': 'Tom W.', 'Question': ['Tips for doubling a recipe?'], 'link':'forumAnswers1.html', 'keyword': ['tips', 'doubling', 'double', 'recipe'], 'email': 'tom@gmail.com'},
    {'name': 'Bob P.', 'Question': ['What are some good substitutes for vanilla extract?'], 'link':'forumAnswers1.html', 'keyword': ['vanilla', 'extract', 'substitute','substitutes'], 'email': 'bob@gmail.com'},
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
var count = 0;


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
                console.log(forumHtml);
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

})
