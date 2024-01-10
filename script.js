document.getElementById('imageInput').addEventListener('change', handleImage);

function handleImage(event) {
    const preview = document.getElementById('imagePreview');
    const signatureOverlay = document.getElementById('signatureOverlay');
    const signatureOutput = document.getElementById('signatureOutput');
    const signatureInput = document.getElementById('signatureInput');
    const fontSelect = document.getElementById('fontSelect');
    const fontSizeInput = document.getElementById('fontSizeInput');
    const fontColorInput = document.getElementById('fontColorInput');
    const dateSpan = document.getElementById('dateSpan');

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        preview.src = e.target.result;
        updateSignatureStyles();
        dateSpan.textContent = getCurrentDate();
    };

    reader.readAsDataURL(file);

    signatureInput.addEventListener('input', function () {
        updateSignatureStyles();
        dateSpan.textContent = getCurrentDate();
    });
}

function updateSignatureStyles() {
    const signatureInput = document.getElementById('signatureInput');
    const fontSelect = document.getElementById('fontSelect');
    const fontSizeInput = document.getElementById('fontSizeInput');
    const fontColorInput = document.getElementById('fontColorInput');
    const signatureOutput = document.getElementById('signatureOutput');

    signatureOutput.style.fontFamily = fontSelect.value;
    signatureOutput.style.fontSize = fontSizeInput.value + 'px';
    signatureOutput.style.color = fontColorInput.value;

    signatureOutput.textContent = signatureInput.value;
}

function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toLocaleDateString();
}
