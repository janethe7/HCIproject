function processLogin(){
    var username = $("#username").val();
    var password = $("#password").val();

    /*if (username != localStorage.getItem("email")){
      alert("account does not exist");
    }*/

    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var parentDiv = $("#templatedProjects");

    for (var i = 0; i < userSignUp.length; i++) {
      var curData = userSignUp[i];
      if(username != curData["name"]){
        alert("account does not exist");
      }
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
}

function processSignup(){
    var name = $("#name").val();
    var location = $("#location").val();
    var email = $("#email").val();
    var password2 = $("#password2").val();

    localStorage.setItem("name", name);
    localStorage.setItem("location", location);
    localStorage.setItem("email", email);
    localStorage.setItem("password2", password2);

    const sqlite3 = require('sqlite3').verbose();

    let db = new sqlite3.Database('../js/userDB.db');

    db.run(`INSERT INTO user(name, email, location, password) VALUES(?,?,?,?)`, [name, location, email, password2], function(err) {
       if (err) {
         return console.log(err.message);
       }
       // get the last insert id
       console.log(`A row has been inserted with rowid ${this.lastID}`);
     });
}

function addTool(){
    var tool = $("#newTool").val();
    localStorage.setItem("tool", tool);
    userTools.push(tool);
}



function clearSearch(){
    $('#loginform').get(0).reset();
}

function retrieveSearchInfo(){
    var input = localStorage.getItem("username");
    $("#username").html("Input: " + username);

    /*var address = localStorage.getItem("address");
    $("#address").html("Address: " + address);
    return address;*/
}

var userSignUp = []

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

  $(document).ready(function() {
    console.log('hello world');

    // Declare variables
    var name = localStorage.getItem("name");
    var email = localStorage.getItem("email");
    var location = localStorage.getItem("location");
    var password2 = localStorage.getItem("password2");

    var newArray = {'name': name, 'email': email, 'location': location, 'password': password2};

    userSignUp.push(newArray);
    console.log(userSignUp);


    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var parentDiv = $("#templatedProjects");


  var source1   = $("#noResultsTemplate").html();
  var template = Handlebars.compile(source1);
  var parentDiv = $("#noResults");

  if (count == 0) {
      var noResults = template(results[0]);
      parentDiv.append(noResults);
  }

  });
