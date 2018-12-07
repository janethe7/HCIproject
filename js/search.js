function processSearch(){
    var input = $("#query").val();
    var address = $("#address").val();

    localStorage.setItem("input", input);
    localStorage.setItem("address", address);
}

function clearSearch(){
    $('#myform').get(0).reset();
}

function retrieveSearchInfo(){
    var input = localStorage.getItem("input");
    $("#query").html("Input: " + input);

    var address = localStorage.getItem("address");
    $("#address").html("Address: " + address);
    return address;
}

var userData = [
    {'name': 'Steve M.', 'location': 'SAN DIEGO, CA', 'Ingredients': ['rice', 'sugar', 'cinnamon', 'baking soda'], 'Tools': ['spatula', 'strainer', 'pan'], 'html': 'ProfileSteveM.html', 'emailto': 'mailto:steve@gmail.com', 'email': 'steve@gmail.com'},
    {'name': 'Amy P.', 'location': 'SAN JOSE, CA', 'Ingredients': ['white rice', 'cumin', 'pancake mix','ginger','white wine','quinoa'], 'Tools': ['grater', 'tongs', 'cast iron', 'spatula'], 'html': 'ProfileAmyP.html', 'emailto': 'mailto:amy@gmail.com', 'email': 'amy@gmail.com'},
    {'name': 'Joe C.', 'location': 'SAN DIEGO, CA', 'Ingredients': ['white rice', 'pancake mix', 'garlic', 'cinnamon','thyme','eggs'], 'Tools': ['meat thermometer', 'food processor', 'cast iron', '13-inch frying pan','toaster','salad spinner'], 'html': 'ProfileJoeC.html', 'emailto': 'mailto:joe@gmail.com', 'email': 'joe@gmail.com'},
    {'name': 'Jenny R.', 'location': 'SAN JOSE, CA', 'Ingredients': ['white rice', 'garlic', 'soy sauce', 'eggs'], 'Tools': ['cast iron', '13-inch frying pan', 'whisk', 'rice cooker'], 'html': 'ProfileJennyR.html', 'emailto': 'mailto:jenny@gmail.com', 'email': 'jenny@gmail.com'},
    {'name': 'Bob P.', 'location': 'SAN DIEGO, CA', 'Ingredients': ['baking soda', 'corn starch', 'cinnamon', 'flour'], 'Tools': ['PAM', 'pie pan', 'cookie sheets'], 'html': 'ProfileBobP.html', 'emailto': 'mailto:bob@gmail.com', 'email': 'bob@gmail.com'},
    {'name': 'Gabby H.', 'location': 'SAN FRANCISCO, CA', 'Ingredients': ['vegetable oil', 'agave', 'brown sugar'], 'Tools': ['can opener', 'cheese cloth', 'measuring spoons','knife sharpener'], 'html': 'ProfileGabbyH.html', 'emailto': 'mailto:gabby@gmail.com', 'email': 'gabby@gmail.com'},
    {'name': 'Darren T.', 'location': 'SAN FRANCISCO, CA', 'Ingredients': ['white rice', 'curry', 'paprika', 'cumin'], 'Tools': ['Nutribullet', 'food processor', 'can opener', 'mixing bowl'], 'html': 'ProfileDarrenT.html', 'emailto': 'mailto:darren@gmail.com', 'email': 'darren@gmail.com'},
    {'name': 'Jack Q.', 'location': 'SAN DIEGO, CA', 'Ingredients': ['rice', 'brown rice', 'eggs', 'white vinegar','flour','cinnamon'], 'Tools': ['rice cooker', 'can opener', 'knife sharpener', 'toaster oven'], 'html': 'ProfileJackQ.html', 'emailto': 'mailto:jack@gmail.com', 'email': 'jack@gmail.com'},
    {'name': 'Johnny G.', 'location': 'SAN JOSE, CA', 'Ingredients': ['rice', 'eggs', 'corn starch', 'paprika','flour'], 'Tools': ['whisk', 'Nutribullet', 'steamer rack', 'sushi roller mat'], 'html': 'ProfileJohnnyG.html', 'emailto': 'mailto:johnny@gmail.com', 'email': 'johnny@gmail.com'},
    {'name': 'Tammy B.', 'location': 'SAN JOSE, CA', 'Ingredients': ['half & half', 'thyme', 'pesto', 'frozen corn'], 'Tools': ['steamer rack', 'measuring cup', 'steamer', 'peeler'], 'html': 'ProfileTammyB.html', 'emailto': 'mailto:tammy@gmail.com', 'email': 'tammy@gmail.com'},
    {'name': 'Tom W.', 'location': 'SAN DIEGO, CA', 'Ingredients': ['white rice', 'corn starch', 'baking soda', 'flour'], 'Tools': ['toaster oven', 'knife sharpener'], 'html': 'ProfileTomW.html', 'emailto': 'mailto:tom@gmail.com', 'email': 'tom@gmail.com'},
    {'name': 'Chloe M.', 'location': 'SAN JOSE, CA', 'Ingredients': ['half & half', 'thyme', 'curry', 'garlic'], 'Tools': ['food processor', 'whisk', 'baking sheets', 'peeler'], 'html': 'ProfileChloeM.html', 'emailto': 'mailto:chloe@gmail.com', 'email': 'chloe@gmail.com'},
    {'name': 'Chris J.', 'location': 'SAN DIEGO, CA', 'Ingredients': ['rice', 'rosemary', 'garlic'], 'Tools': ['whisk', 'measuring cup', 'rice bowl', 'ladle'], 'html': 'ProfileChrisJ.html', 'emailto': 'mailto:chris@gmail.com', 'email': 'chris@gmail.com'},
    {'name': 'Kylie K.', 'location': 'LOS ANGELES, CA', 'Ingredients': ['avocados', 'lasagna pasta', 'sugar', 'flour','chocolate chips'], 'Tools': ['whisk', 'Nutribullet', 'ice cream scoop', 'crockpot'], 'html': 'ProfileKylieK.html', 'emailto': 'mailto:kylie@gmail.com', 'email': 'kylie@gmail.com'},
    {'name': 'Kim L.', 'location': 'LOS ANGELES, CA', 'Ingredients': ['wheat bread', 'eggs', 'brown sugar', 'flour'], 'Tools': ['measuring cup', 'dough roller', 'tongs', 'wine opener','clay pot'], 'html': 'ProfileKimL.html', 'emailto': 'mailto:kim@gmail.com', 'email': 'kim@gmail.com'},
  ]

  // Call this function when the page loads (the "ready" event)
  $(document).ready(function() {
    console.log('hello world');

    // Declare variables
    var input = localStorage.getItem("input").toLowerCase();
    var address = localStorage.getItem("address").toUpperCase();
    console.log(address);
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var parentDiv = $("#templatedProjects");

    var count = 0;
    for (var i = 0; i < userData.length; i++) {
      var curData = userData[i];
      if(curData["location"] == address ){
        console.log(curData["name"]);
        //check for ingredient
        for(var x = 0; x<curData["Ingredients"].length; x++){
          console.log(curData["Ingredients"][x]);
          if(curData["Ingredients"][x] == input){
            var curHtml = template(curData);
            parentDiv.append(curHtml);
            count = count +1;
          }
        }
        //check for tool
        for(var y = 0; y<curData["Tools"].length; y++){
          console.log(input);
          console.log(curData["Tools"][0]);
          if(curData["Tools"][y] == input){
            var curHtml = template(curData);
            console.log("append");
            parentDiv.append(curHtml);
            count = count + 1;
          }
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
