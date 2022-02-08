// Output
let outputCode = document.getElementById("code");

function generateCode() {
  // Color One
  let colorOne = document.getElementById("color-a");
  let colOne = colorOne.value;
  var oneHex = colOne.slice(1).match(/.{1,2}/g);
  var onergb = [
    parseInt(oneHex[0], 16),
    parseInt(oneHex[1], 16),
    parseInt(oneHex[2], 16),
  ];
  colorAfinal = `rgb(${onergb[0]},${onergb[1]},${onergb[2]},1)`;

  // Color Two
  let colorTwo = document.getElementById("color-b");
  let colTwo = colorTwo.value;
  var twoHex = colTwo.slice(1).match(/.{1,2}/g);
  var tworgb = [
    parseInt(twoHex[0], 16),
    parseInt(twoHex[1], 16),
    parseInt(twoHex[2], 16),
  ];
  colorBfinal = `rgb(${tworgb[0]},${tworgb[1]},${tworgb[2]},1)`;

  // Value Pick
  var elem = document.querySelector('input[type="range"]');
  var newValue = elem.value;
  var rangeValue = function () {
    var newValue = elem.value;
    var target = document.querySelector(".value");
    target.innerHTML = newValue + "°";
  };
  elem.addEventListener("input", rangeValue);

  //Angel Pick
  let angelone = document.getElementById("angel-a").value + "%";
  let angeltwo = document.getElementById("angel-b").value + "%";

  //
  let angelDeg = newValue + "deg";

  outputCode.value = `background-image: linear-gradient(${angelDeg}, ${colorAfinal} ${angelone}, ${colorBfinal} ${angeltwo});`;

  document.getElementById(
    "resultcolor"
  ).style.backgroundImage = `linear-gradient(${angelDeg}, ${colorAfinal} ${angelone}, ${colorBfinal} ${angeltwo})`;
}

function copyText() {
  outputCode.select();
  document.execCommand("copy");
  alert("Gradient Copied!");
}

generateCode();

// Color Picker
// color A
$("#color-a").on("input", function () {
  $("#hexcolor-a").val(this.value);
});
$("#hexcolor-a").on("input", function () {
  $("#color-a").val(this.value);
});
// Color B
$("#color-b").on("input", function () {
  $("#hexcolor-b").val(this.value);
});
$("#hexcolor-b").on("input", function () {
  $("#color-b").val(this.value);
});
