function appendValue(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = ""
}

function calculate() {
    let displayValue = document.getElementById("display").value
    let result = eval(displayValue)
    document.getElementById("display").value = result
}