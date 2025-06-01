// Membuat variabel global 
    let lastResult = false; // dibuat false supaya bisa langsung direset 

function appendValue(val) {
    let displayValue = document.getElementById("display").value // string

    let operators = ["+", "-", "*", "/"];
    
    // Jika di AC atau reset sebelumnya error
    if (displayValue === "Error!") {
        document.getElementById("display").value =""
        displayValue = document.getElementById("display").value; // Update ulang setelah reset
    }

    // Jika operasi ditekan ganda maka hapus paling depan
    let lastCharacter = displayValue.charAt(displayValue.length - 1); // deklarasikan dulu variabelnya

    if (operators.includes(val) && operators.includes(lastCharacter)) {
        document.getElementById("display").value = displayValue.slice(0, -1) + val;
        return;
    }

    // Saat hasil baru ditampilkan dan user menekan angka berarti ganti display baru dengan kosong
    if (lastResult) {
        if (operators.includes(val)) {
            document.getElementById("display").value = displayValue + val;
        } else {
            document.getElementById("display").value = val;
        }
        lastResult = false;
        return;
    }

    // Jika bukan angka terlebih dahulu, operasi tidak boleh muncul
    if ((displayValue === "" || displayValue === "0") && operators.includes(val)) {
        return;
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
    let displayValue = document.getElementById("display").value;
    
    // Mengganti simbol % menjadi / 100 
    let modifiedValue = displayValue.replace(/%/g, "/100");

    try {
        let result = eval(modifiedValue)
        document.getElementById("display").value = result;
        lastResult = true;
    } catch (error) {
        document.getElementById("display").value = "Error!";
    }
}

function del() {
    let display = document.getElementById("display");
    let displayValue = display.value;

    // Jika angka habis atau kosong, maka ganti ke 0
    if (displayValue === "Error!" || displayValue.length === 1) {
        display.value = "0";
    } else {
        // Hapus satu karakter paling akhir
        display.value = displayValue.slice(0, -1);
    }
}

// Sama saja dengan onclick="appendValue"
const addButton = document.getElementById("add-button")
addButton.addEventListener("click", function () {
    appendValue("+")
})