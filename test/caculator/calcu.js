function cls() {
  document.getElementById("show").value = '';
}

function deleteStep() {
  var showVal = document.getElementById("show").value;
  document.getElementById("show").value = showVal.substring(0, showVal.length - 1);
}

function calculate() {
  var showVal = document.getElementById("show").value;
  document.getElementById('show').value = eval(showVal);
}

function clickMethod(obj) {
  var btnVal = obj.value;
  var showVal = document.getElementById("show").value;
  showVal += btnVal;
  document.getElementById("show").value = showVal;
}
