console.log(document.body);
console.log(document.images);
var firstitem = document.getElementById('item-1'),
    myList = document.getElementsByClassName("mylist"),
    paragraphs = document.getElementsByTagName("p"),
    images = document.querySelectorAll("img");
console.log(firstitem);
console.log(myList);
console.log(paragraphs);
console.log(images);
firstitem.style.backgroundColor = "white";
firstitem.style.color = "red";
myList[1].style.display = "none";

var submitBtn = document.getElementById("submit"),
container = document.querySelector(".container");

submitBtn.addEventListener("click", function(event){
    console.log("Hey! I\'ve been clicked!");
});

container.addEventListener("mouseenter", mouseEnterContainer);
function mouseEnterContainer(){
    console.log("Hey! There was a mouse enter event triggered!");
    container.removeEventListener("mouseenter",mouseEnterContainer);
}

document.addEventListener("keyup", function(event){
    console.log(event.key);
    //console.log(event.keyCode);
});

document.addEventListener("copy",function(event){
    console.log("I've been copied");
});

var btt = document.getElementById("back-to-top"),
body = document.body,
docElem = document.documentElement,
offset = 100,
scrollPos, docHeight;
isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
//calculate document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if(docHeight != 'undefined'){
    offset = docHeight / 4;
}
//add scroll event listener
window.addEventListener("scroll", function(event){
    scrollPos = body.scrollTop || docElem.scrollTop;
    btt.className = (scrollPos > offset) ? "visible" : "";
});
btt.addEventListener("click",function(event){
    event.preventDefault();
    if(isFirefox){
        docElem.scrollTop = 0;
    }
    else{
        body.scrollTop = 0;
    }
});

for (let i = 0; i < paragraphs.length; i += 2) {
    paragraphs[i].style.color = "green";
    paragraphs[i + 1].style.color = "blue";
}