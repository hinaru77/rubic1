
var about = document.getElementById("about");
var contact = document.getElementById("contact");
var home = document.getElementById("home");
var words = document.getElementById("words");

words.addEventListener("click", picLink);
about.addEventListener("click", picLink);
home.addEventListener("click", picLink);
contact.addEventListener("click", picLink);

function picLink() {
  var allImages = document.querySelectorAll("img");

  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}

var myDemo = document.getElementById("demoparent");

console.log(myDemo.childNodes.length);

var myDemoTags = document.getElementsByTagName("li");

console.log ("Number of li links:"+ myDemoTags.length);
