let result = document.getElementById("result");

// '='と'AC'以外のボタンを押したとき
function edit(elem) {
  result.value = result.value + elem.value;
}

// '='ボタンを押したとき
function calc() {
  result.value = new Function("return " + result.value)();
}

// 'AC'ボタンを押したとき
function clean() {
  result.value = "";
}