function makeForum(){
    var input = $("#myPost").val();

    localStorage.setItem("input", input);
}

function clearSearch(){
    $('#myform').get(0).reset();
}

function retrieveSearchInfo(){
    var input = localStorage.getItem("input");
    $("#query").html("Input: " + input);

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
