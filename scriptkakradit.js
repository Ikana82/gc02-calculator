function appendValue(val) {
    let displayValue = document.getElementById("display").value // string

    if (displayValue === "Error!") {
        document.getElementById("display").value =""
    }
    if (displayValue === "0") {
        document.getElementById("display").value = val // reassignment
    } else {
        document.getElementById("display").value += val; // concatination
    }
    
}

function clearDisplay() {
    document.getElementById("display").value = "0"
}

function calculate() {
    let displayValue = document.getElementById("display").value
    try {
        let result = eval(displayValue)
        document.getElementById("display").value = result
    } catch (error) {
        document.getElementById("display").value = "Error!"
    }
}

// Sama saja dengan onclick="appendValue"
const addButton = document.getElementById("add-button")
addButton.addEventListener("click", function () {
    appendValue("+")
})