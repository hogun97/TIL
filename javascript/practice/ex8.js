function toCelcius() {
    temp = document.getElementById('temperature').value;
    document.getElementById('result').innerHTML = (5/9)*(temp-32) + "C";
}

function toFarenheit() {
    temp = document.getElementById('temperature').value;
    document.getElementById('result').innerHTML = ((9/5)*temp)+32 + "F";
}
