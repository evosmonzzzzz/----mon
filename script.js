function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    
    const resultContainer = document.getElementById('result-container');
    const bmiValueText = document.getElementById('bmi-value');
    const bmiDisplayText = document.getElementById('bmi-text');

    if (!weight || !heightCm || heightCm <= 0) {
        alert("กรุณากรอกข้อมูลให้ถูกต้องครับ");
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const result = bmi.toFixed(2);

    resultContainer.classList.remove('hidden');

    let label = "";
    let color = "";

    if (bmi < 18.5) {
        label = "ผอม";
        color = "#17a2b8";
    } else if (bmi <= 22.9) {
        label = "ปกติ (สุขภาพดี)";
        color = "#28a745";
    } else if (bmi <= 24.9) {
        label = "น้ำหนักเกิน";
        color = "#ffc107";
    } else {
        label = "อ้วน";
        color = "#dc3545";
    }

    bmiValueText.innerText = result;
    bmiValueText.style.color = color;
    bmiDisplayText.innerText = `อยู่ในเกณฑ์: ${label}`;
}