function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    if (height && weight) {
        const bmi = (weight / (height * height)).toFixed(1);
        const category = getBMICategory(bmi);

        document.getElementById('bmiValue').textContent = bmi;
        document.getElementById('bmiCategory').textContent = category;
        document.getElementById('meterValue').textContent = bmi;
        adjustNeedle(bmi);

        document.getElementById('result').classList.add('show');
    } else {
        alert('Please enter valid values for height and weight.');
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    return "Obesity";
}

function adjustNeedle(bmi) {
    const needle = document.getElementById('needle');
    let angle;

    if (bmi < 18.5) angle = -45;
    else if (bmi >= 18.5 && bmi < 24.9) angle = 0;
    else if (bmi >= 25 && bmi < 29.9) angle = 45;
    else angle = 90;

    needle.style.transform = 'rotate(${angle}deg)';
}