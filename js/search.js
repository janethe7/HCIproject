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
    {'name': 'Steve', 'location': 'SAN DIEGO, CA', 'Ingredients': ['rice', 'sugar', 'cinnamon', 'baking soda'], 'Tools': ['spatula', 'strainer', 'pan'], 'html': 'ProfileSteveM.html'},
    {'name': 'Amy', 'location': 'SAN JOSE, CA', 'Ingredients': ['black pepper', 'sugar', 'saffron', 'baking soda'], 'Tools': ['pot', 'strainer', 'blender', 'hand-mixer'], 'html': 'ProfileAmyP.html'},
    {'name': 'Joe', 'location': 'SAN DIEGO, CA', 'Ingredients': ['rice', 'flour', 'cinnamon', 'vanilla extract'], 'Tools': ['spatula', 'pot', 'whisk', 'can-opener'], 'html': 'ProfileJoeC.html'},
    {'name': 'Jenny', 'location': 'SAN JOSE, CA', 'Ingredients': ['honey', 'clove', 'maple syrup', 'agave'], 'Tools': ['food processor', 'crock pot', 'whisk', 'juicer'], 'html': 'ProfileJennyR.html'},
    {'name': 'Bob', 'location': 'SAN DIEGO, CA', 'Ingredients': ['clove', 'salt', 'black pepper', 'vinegar'], 'Tools': ['measuring spoon', 'tongs', 'grater'], 'html': 'ProfileBobP.html'},
    {'name': 'Gabby', 'location': 'SAN FRANCISCO, CA', 'Ingredients': ['vegetable oil', 'agave', 'brown sugar', 'nutmeg'], 'Tools': ['measuring cup', 'rolling pin', 'peeler'], 'html': 'ProfileGabbyH.html'},
    {'name': 'Darren', 'location': 'SAN FRANCISCO, CA', 'Ingredients': ['cumin', 'paprika', 'hot sauce', 'vanilla extract'], 'Tools': ['crock pot', 'masher', 'pan', 'whisk'], 'html': 'ProfileDarrenT.html'},
    {'name': 'Jack', 'location': 'SAN DIEGO, CA', 'Ingredients': ['honey', 'nutmeg', 'curry', 'garlic'], 'Tools': ['food processor', 'measuring spoon', 'wok', 'peeler'], 'html': 'ProfileJackQ.html'},

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
    var input = localStorage.getItem("input");
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
