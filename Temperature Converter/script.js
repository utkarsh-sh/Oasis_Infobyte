const temperatureInput = document.getElementById('temperature');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const convertButton = document.getElementById('convert');
const resultParagraph = document.getElementById('result');

convertButton.addEventListener('click', (e) => {
    e.preventDefault(); // Add this line to prevent the form from submitting
    convertTemperature();
});

function convertTemperature() {
	const temperature = parseFloat(temperatureInput.value);
	const fromUnit = fromSelect.value;
	const toUnit = toSelect.value;
	let convertedTemperature;

	switch (fromUnit) {
		case 'Celsius':
			if (toUnit === 'Fahrenheit') {
				convertedTemperature = (temperature * 9/5) + 32;
			} else if (toUnit === 'Kelvin') {
				convertedTemperature = temperature + 273.15;
			}
			break;
		case 'Fahrenheit':
			if (toUnit === 'Celsius') {
				convertedTemperature = (temperature - 32) * 5/9;
			} else if (toUnit === 'Kelvin') {
				convertedTemperature = (temperature - 32) * 5/9 + 273.15;
			}
			break;
		case 'Kelvin':
			if (toUnit === 'Celsius') {
				convertedTemperature = temperature - 273.15;
			} else if (toUnit === 'Fahrenheit') {
				convertedTemperature = (temperature - 273.15) * 9/5 + 32;
			}
			break;
	}

	resultParagraph.textContent = `The converted temperature is: ${convertedTemperature.toFixed(2)} ${toUnit}`;
}