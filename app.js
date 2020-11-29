var input = document.querySelector("#txt-input");
var button = document.querySelector("#btn-translate");
var output = document.querySelector("#txt-output");

function catchHandler(error) {
    // console.log("error occured: ", error);
    alert("sever down");
}

function translate() {
    var text = input.value;
    var url = "https://api.funtranslations.com/translate/minion.json?text=" + text;
    var encoded = encodeURI(url);
    console.log(encoded);
    fetch(encoded)
    .then(response => response.json())
    .then(json => output.innerText = json.contents.translated)
    .catch(catchHandler);
}

button.addEventListener("click", translate);



// ex02
// var name = prompt("What's your name?");
// alert("Hi, " + name)



// ex03
// var button = document.querySelector("#btn-translate");

// function output() {
//     console.log("clicked");
// }

// button.addEventListener("click", output);



// ex04
// var input = document.querySelector("#txt-input");
// var button = document.querySelector("#btn-translate");

// function output() {
//     console.log(input.value);
// }

// button.addEventListener("click", output);



// live exercise
// document.querySelector("textarea");
// document.querySelector(".btn-primary");
// document.querySelector("#input-btn");
// document.querySelector("input[name='translator']");



// ex05
// var input = document.querySelector("#txt-input");
// var button = document.querySelector("#btn-translate");
// var result = document.querySelector("#txt-output");

// function output() {
//     var text = input.value;
//     result.innerText = text;
// }

// button.addEventListener("click", output);



// ex06 (In Postman)



// // ex07
// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=testing";
// fetch(url).then(response => response.json()).then(json => console.log(json));
// fetch(url).then(response => response.json()).then(json => console.log(json.contents.translated));



// ex09
// var button = document.querySelector("#btn-translate");
// var result = document.querySelector("#txt-output");
// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=testing";

// function translate() {
//     fetch(url)
//     .then(response => response.json())
//     .then(json => result.innerText = json.contents.translated);
// }

// button.addEventListener("click", translate);



// ex10
// var button = document.querySelector("#btn-translate");
// var result = document.querySelector("#txt-output");
// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=testing"; //correct url
// var url = "https://lessonfourapi.tanaypratap.repl.com/translate/yoda.json?text=testing";

// function catchHandler(error) {
//     console.log("error occured: " + error);
//     alert("It looks like server is down :(");
// }

// function translate() {
//     fetch(url)
//     .then(shubham => shubham.json())
//     .then(singh => result.innerText = singh.contents.translated)
//     .catch(catchHandler);
// }

// button.addEventListener("click", translate);
