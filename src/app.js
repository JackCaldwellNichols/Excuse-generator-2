window.onload = function() {
  document.getElementById("excuse").innerHTML = message;
};

let pronouns = ["My", "Your", "The", "His"];
let nouns = [" dog", " cat", " elephant", " cyclist"];
let verb = [" peed on", " ate", " stomped on", " scratched"];
let object = [" my homework", " my leg", " my back", " my eyes"];

var message =
  pronouns[Math.floor(Math.random() * pronouns.length)] +
  nouns[Math.floor(Math.random() * nouns.length)] +
  verb[Math.floor(Math.random() * verb.length)] +
  object[Math.floor(Math.random() * object.length)];
