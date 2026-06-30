function calcSum() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const n1 = parseFloat(num1) || 0;
    const n2 = parseFloat(num2) || 0;

    const sum = n1 + n2;

    document.getElementById('answer').textContent = "Answer: " + sum;
}

function clearFields() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('answer').textContent = "Answer Here";
}