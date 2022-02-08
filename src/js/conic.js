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

  // Color Three
  let colorthree = document.getElementById("color-c");
  let colthree = colorthree.value;
  var threeHex = colthree.slice(1).match(/.{1,2}/g);
  var threergb = [
    parseInt(threeHex[0], 16),
    parseInt(threeHex[1], 16),
    parseInt(threeHex[2], 16),
  ];
  colorCfinal = `rgb(${threergb[0]},${threergb[1]},${threergb[2]},1)`;

  //Angel Pick
  let angelone = document.getElementById("angel-a").value + "%";
  let angeltwo = document.getElementById("angel-b").value + "%";
  let angelthree = document.getElementById("angel-c").value + "%";

  outputCode.value = `background-image: conic-gradient( ${colorAfinal} ${angelone}, ${colorBfinal} ${angeltwo}, ${colorCfinal} ${angelthree});`;

  document.getElementById(
    "resultcolor"
  ).style.backgroundImage = `conic-gradient( ${colorAfinal} ${angelone}, ${colorBfinal} ${angeltwo}, ${colorCfinal} ${angelthree})`;
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
// Color C
$("#color-c").on("input", function () {
  $("#hexcolor-c").val(this.value);
});
$("#hexcolor-c").on("input", function () {
  $("#color-c").val(this.value);
});
