let isPlus = true;
let prevNumber = 0;
let number = "";

WebAssembly.instantiateStreaming(fetch('main.wasm'))
    .then(obj => {
        ready(obj);
    });

function onClickNumber(i) {
    number += i;
}

function calculate(exports) {
    if (isPlus) {
        prevNumber = exports.plus(prevNumber, number);
    } else {
        prevNumber = exports.minus(prevNumber, number);
    }
    console.log(prevNumber);
    number = "";
}

function ready(obj) {
    const exports = obj.instance.exports;
    for (let i = 0; i < 10; i++) {
        document.getElementById(i).addEventListener("click", function() { onClickNumber(i); });
    }
    document.getElementById("minus").addEventListener("click", function() {
        calculate(exports);
        isPlus = false;
    });
    document.getElementById("plus").addEventListener("click", function() {
        calculate(exports);
        isPlus = true;
    });
}
