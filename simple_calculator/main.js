let isAdd = true;
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
    if (isAdd) {
        prevNumber = exports.add(prevNumber, number);
    } else {
        prevNumber = exports.sub(prevNumber, number);
    }
    console.log(prevNumber);
    number = "";
}

function ready(obj) {
    const exports = obj.instance.exports;
    for (let i = 0; i < 10; i++) {
        document.getElementById(i).addEventListener("click", function() { onClickNumber(i); });
    }
    document.getElementById("sub").addEventListener("click", function() {
        calculate(exports);
        isAdd = false;
    });
    document.getElementById("add").addEventListener("click", function() {
        calculate(exports);
        isAdd = true;
    });
}
