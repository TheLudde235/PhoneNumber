function updateNumber() {
    let range = document.getElementById("range");
    let out = document.getElementById("range-output");
    out.innerText = formatNumber(range.value);
}

function randomNumber() {
    let out = document.getElementById("random-output");
    let random = Math.floor(999_999_99_99 * Math.random());
    
    out.innerText = formatNumber(random);
}

function formatNumber(num) {
    let output;
    output = num.toString();
    if (num.toString().length <= 9) output = "0" + num;
    if (num.toString().length <= 8) output = "00" + num;
    if (num.toString().length <= 7) output = "000" + num;
    if (num.toString().length <= 6) output = "0000" + num;
    if (num.toString().length <= 5) output = "00000" + num;
    if (num.toString().length <= 4) output = "000000" + num;
    if (num.toString().length <= 3) output = "0000000" + num;
    if (num.toString().length <= 2) output = "00000000" + num;
    if (num.toString().length <= 1) output = "000000000" + num;
    let arr = [...output];
    arr.splice(3, 0, '-');
    arr.splice(7, 0, ' ');
    arr.splice(10, 0, ' ');
    return arr.join('');
}