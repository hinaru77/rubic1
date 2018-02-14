// JavaScript Document
var myDemo = document.getElementById("demoparent");

console.log(myDemo.childNodes.length);

var myDemoTags = document.getElementsByTagName("li");

console.log ("Number of li links:"+ myDemoTags.length);

var whoID = document.createElement("li");

var newText = document.createTextNode ("What? or Who? Are you?");

myDemo.appendChild(whoID);
whoID.appendChild(newText);