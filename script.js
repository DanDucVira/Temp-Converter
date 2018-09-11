//the start of the page
document.getElementById('output').style.visibility = "hidden";


document.getElementById('tempInput').addEventListener('input', function (e) {
    let temp = e.target.value;
    document.getElementById('output').style.visibility = "";
    document.getElementById('fOutput').innerHTML = (temp - 32) * 5 / 9;
    document.getElementById('cOutput').innerHTML = (temp * 9 / 5) + 32;
    document.getElementById('kOutput').innerHTML = (temp - 273.15) * 9 / 5 + 32;
});