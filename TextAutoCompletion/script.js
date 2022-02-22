//declaring the variables
var targetInput = document.getElementById("country"),
results = document.getElementById("autocomplete-results"),
countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],
matches=[],
resultsCursor = 0;

//focus the input
targetInput.focus();

//add event listener for the input keyup
targetInput.addEventListener("keyup",function(event){
/*keycodes
Enter: 13
Arrow up: 38
Arrow down: 40
*/
results.innerHTML = "";
toggleResults("hide");

if(this.value.length > 0){
    matches = getMatches(this.value);
    if(matches.length > 0){
        displayMatches(matches);
    }
}
});

//define a function for checking if the input value matches any of the country names
function getMatches(inputText){
    var matchList=[];
    for (var i = 0; i < countryList.length; i++) {
        if(countryList[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1){
            matchList.push(countryList[i]);
        }        
    }
}


//define a function for toggling results
function toggleResults(action){
    if(action=="show"){
        results.classList.add("visible");
    }
    else if(action == "hide"){
        results.classList.remove("visible");
    }
}

//Define a function for displaying autocomplete results
function displayMatches(matchList) {
    var j=0;
    while(j<matchList.length){
        results.innerHTML += '<li class="result">' + matchList[j] + '</li>';
        j++;
    }
    //the first child gets a class for highlighted
    moveCursor(resultsCursor);

    //Show the results
    toggleResults("show");
  }