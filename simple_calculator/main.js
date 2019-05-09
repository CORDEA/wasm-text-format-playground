let number = "";

WebAssembly.instantiateStreaming(fetch('main.wasm'))
    .then(obj => {
        ready(obj);
    });

function onClickNumber(i) {
    number += i;
}

function ready(obj) {
    const exports = obj.instance.exports;
    for (let i = 0; i < 10; i++) {
        document.getElementById(i).addEventListener("click", function() { onClickNumber(i); });
    }
    document.getElementById("sub").addEventListener("click", function() {
        document.getElementById("result").innerHTML = exports.sub(parseInt(number));
        number = "";
    });
    document.getElementById("add").addEventListener("click", function() {
        document.getElementById("result").innerHTML = exports.add(parseInt(number));
        number = "";
    });
}
