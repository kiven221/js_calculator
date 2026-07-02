function calcSum() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;

    const n1 = parseFloat(num1) || 0;
    const n2 = parseFloat(num2) || 0;
    const n3 = parseFloat(num3) || 0;

    const sum = n1 + n2 + n3;

    document.getElementById('answer').textContent = sum;
}

function clearFields() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('num3').value = "";
    document.getElementById('answer').textContent = "Answer Here";
}s