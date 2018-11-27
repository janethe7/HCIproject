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

/*function codeAddress() {
    var address = localStorage.getItem("address");
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        var map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 8,
            center: setCenter(results[0].geometry.location)
	        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }*/


/*function geocodeAddress(geocoder, resultsMap) {
		//var address = localStorage.getItem('customAddress');
		//var address = document.getElementById('address').value;
		var address = localStorage.getItem('address');
		//localStorage.setItem('customAddress', address);
		geocoder.geocode({'address': address}, function(results, status) {
			if (status === 'OK') {
				resultsMap.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
					map: resultsMap,
					position: results[0].geometry.location
				});
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	}*/

var userData = [
    {'name': 'Steve M.', 'location': 'SAN DIEGO, CA', 'Ingredients': ['rice', 'sugar', 'cinnamon', 'baking soda'], 'Tools': ['spatula', 'strainer', 'pan'], 'html': 'ProfileSteveM.html'},
    {'name': 'Amy P.', 'location': 'SAN JOSE, CA', 'Ingredients': ['white rice', 'cumin', 'pancake mix','ginger','white wine','quinoa'], 'Tools': ['grater', 'tongs', 'cast iron', 'spatula'], 'html': 'ProfileAmyP.html'},
    {'name': 'Joe C.', 'location': 'SAN DIEGO, CA', 'Ingredients': ['white rice', 'pancake mix', 'garlic', 'cinnamon','thyme','eggs'], 'Tools': ['meat thermometer', 'food processor', 'cast iron', '13-inch frying pan','toaster','salad spinner'], 'html': 'ProfileJoeC.html'},
    {'name': 'Jenny R.', 'location': 'SAN JOSE, CA', 'Ingredients': ['white rice', 'garlic', 'soy sauce', 'eggs'], 'Tools': ['cast iron', '13-inch frying pan', 'whisk', 'rice cooker'], 'html': 'ProfileJennyR.html'},
//location updated starting now
    {'name': 'Bob P.', 'location': 'SAN DIEGO, CA', 'Ingredients': ['baking soda', 'corn starch', 'cinnamon', 'flour'], 'Tools': ['PAM', 'pie pan', 'cookie sheets'], 'html': 'ProfileBobP.html'},
    {'name': 'Gabby H.', 'location': 'SAN FRANCISCO, CA', 'Ingredients': ['vegetable oil', 'agave', 'brown sugar'], 'Tools': ['can opener', 'cheese cloth', 'measuring spoons','knife sharpener'], 'html': 'ProfileGabbyH.html'},
    {'name': 'Darren T.', 'location': 'SAN FRANCISCO, CA', 'Ingredients': ['white rice', 'curry', 'paprika', 'cumin'], 'Tools': ['Nutribullet', 'food processor', 'can opener', 'mixing bowl'], 'html': 'ProfileDarrenT.html'},
    {'name': 'Jack Q.', 'location': 'SAN DIEGO, CA', 'Ingredients': ['rice', 'brown rice', 'eggs', 'white vinegar','flour','cinnamon'], 'Tools': ['rice cooker', 'can opener', 'knife sharpener', 'toaster oven'], 'html': 'ProfileJackQ.html'},
    {'name': 'Johnny G.', 'location': 'SAN JOSE, CA', 'Ingredients': ['rice', 'eggs', 'corn starch', 'paprika','flour'], 'Tools': ['whisk', 'Nutribullet', 'steamer rack', 'sushi roller mat'], 'html': 'ProfileJohnnyG.html'},
    {'name': 'Tammy B.', 'location': 'SAN JOSE, CA', 'Ingredients': ['half & half', 'thyme', 'pesto', 'frozen corn'], 'Tools': ['steamer rack', 'measuring cup', 'steamer', 'peeler'], 'html': 'ProfileTammyB.html'},
    {'name': 'Tom W.', 'location': 'SAN DIEGO, CA', 'Ingredients': ['white rice', 'corn starch', 'baking soda', 'flour'], 'Tools': ['toaster oven', 'knife sharpener'], 'html': 'ProfileTomW.html'},
    {'name': 'Chloe M.', 'location': 'SAN JOSE, CA', 'Ingredients': ['half & half', 'thyme', 'curry', 'garlic'], 'Tools': ['food processor', 'whisk', 'baking sheets', 'peeler'], 'html': 'ProfileChloeM.html'},
    {'name': 'Chris J.', 'location': 'SAN DIEGO, CA', 'Ingredients': ['rice', 'rosemary', 'garlic'], 'Tools': ['whisk', 'measuring cup', 'rice bowl', 'ladle'], 'html': 'ProfileChrisJ.html'},
    {'name': 'Kylie K.', 'location': 'LOS ANGELES, CA', 'Ingredients': ['avocados', 'lasagna pasta', 'sugar', 'flour','chocolate chips'], 'Tools': ['whisk', 'Nutribullet', 'ice cream scoop', 'crockpot'], 'html': 'ProfileKylieK.html'},
    {'name': 'Kim L.', 'location': 'LOS ANGELES, CA', 'Ingredients': ['wheat bread', 'eggs', 'brown sugar', 'flour'], 'Tools': ['measuring cup', 'dough roller', 'tongs', 'wine opener','clay pot'], 'html': 'ProfileKimL.html'},
  ]

  // Call this function when the page loads (the "ready" event)
  $(document).ready(function() {
    console.log('hello world');

    // compile the template
    /*var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var parentDiv = $("#templatedProjects");
   // now iterate through the complexData list and keep appending:
    for (var i = 0; i < userData.length; i++) {
      var curData = userData[i];
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }*/

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

  /*function searchResults() {
      // Declare variables
      var input = $("#query").val();
      var address = $("#address").val();
      var template = Handlebars.compile(source);
      var parentDiv = $("#templatedProjects");
      for (var i = 0; i < userData.length; i++) {
        var curData = userData[i];
        if(curData[1] == address ){
          for(var x = 0; x<curData[2].length; x++){
            if(curData[2][x] == input){
              var curHtml = template(curData);
            }
          }
        }
        parentDiv.append(curHtml);
      }
  }
*/




/*function onSuccessPopDatabase(position){
    localStorage.setItem("carLoc", new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
     if (markersArray) {
        for (i in markersArray) {
            markersArray[i].setMap(null);
        }
        markersArray.length = 0;
    }
    alert("The location has been saved.");
}
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}
function retrieveLocation(){
    var retrievedStringwParens = localStorage.getItem("carLoc");
    if(retrievedStringwParens == null){
        alert("no location saved");
        return null;
    }
    var retrievedString = retrievedStringwParens.replace(/[()]/g,'')
    var splitArray = retrievedString.split(",");
    var lat = parseFloat(splitArray[0]);
    var lng = parseFloat(splitArray[1]);
    var retrievedLatLng = new google.maps.LatLng(lat,lng);
    return retrievedLatLng;
}
function processForm(){
    var level = document.myform.level.value;
    var spot = document.myform.spot.value;
    var addInfo = document.myform.notes.value;
    localStorage.setItem("level", level);
    localStorage.setItem("spot", spot);
    localStorage.setItem("addInfo", addInfo);
    alert("Saved: " + localStorage.getItem("level") + ", " + localStorage.getItem("spot") + ", and " + localStorage.getItem("addInfo"));
}
function clearForm(){
    $('#myform').get(0).reset();
}
function retrieveFormInfo(){
    var level = localStorage.getItem("level");
    $("#level2").html("Level: " + level);
    var spot = localStorage.getItem("spot");
    $("#spot").html("Spot: " + spot);
    var notes = localStorage.getItem("addInfo");
    $("#notes").html("Notes: " + notes);
}*/
