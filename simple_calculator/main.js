let isAdd = true;
let result = 0;
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
        result = exports.add(result, number);
    } else {
        result = exports.sub(result, number);
    }
    number = "";
}

function ready(obj) {
    const exports = obj.instance.exports;
    for (let i = 0; i < 10; i++) {
        document.getElementById(i).addEventListener("click", function() { onClickNumber(i); });
    }
    document.getElementById("sub").addEventListener("click", function() {
        calculate(exports);
        document.getElementById("result").innerHTML = result;
        isAdd = false;
    });
    document.getElementById("add").addEventListener("click", function() {
        calculate(exports);
        document.getElementById("result").innerHTML = result;
        isAdd = true;
    });
}
