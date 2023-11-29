
function plotGraph() {
    const inputValue = parseInt(document.getElementById('inputValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    const inputBar = document.querySelector('.input-value-bar');
    const maxBar = document.querySelector('.max-value-bar');
    const circle = document.querySelector('.circle');
    const maxHeight = 180; // Set your desired constant height here;

    if (inputValue > maxValue) {
        alert('Input value cannot be greater than Max value!');
        return;
    }

    const inputPercentage = (inputValue / maxValue) * 100;
    const remainingPercentage = 100 - inputPercentage;

    inputBar.style.height = `${(inputPercentage / 100) * maxHeight}px`;
    maxBar.style.height = `${(remainingPercentage / 100) * maxHeight}px`;

    // Set gradient colors for the filled and remaining portions in the bars
    inputBar.style.background = `linear-gradient(to bottom, #008CFF ${inputPercentage}%, #c2e3ff ${inputPercentage}%)`;

    // Set gradient colors for the last bar
    const lastBarColor = `linear-gradient(to bottom, #E0F2FF ${remainingPercentage}%, #82B6FF ${remainingPercentage}%)`;
    maxBar.style.background = lastBarColor;

    // Apply the same gradient colors to the first bar
    inputBar.style.background = lastBarColor;

    // Set gradient colors for the circle based on the last bar
    const circleColor = remainingPercentage >= 0 ?
        `radial-gradient(circle at center, #E0F2FF ${remainingPercentage}%, #82B6FF ${remainingPercentage}%)` :
        `radial-gradient(circle at center, #E0F2FF 0%, #82B6FF 0%)`;
    circle.style.background = circleColor;

    // Display percentage text inside the bars and circle
    inputBar.textContent = inputPercentage.toFixed(2) + '%';
    maxBar.textContent = remainingPercentage.toFixed(2) + '%';
    circle.textContent = inputPercentage.toFixed(2) + '%';
}
