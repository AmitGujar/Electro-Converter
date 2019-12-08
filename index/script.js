function weightConverter(valNum) {
    document.getElementById("outputKilograms").innerHTML = Math.floor(valNum / 2.2046);
    document.getElementById("outputGrams").innerHTML = Math.floor(valNum / 0.0022046);
}

function tempConverter(valNum) {
    document.getElementById("outputCelcius").innerHTML = Math.floor((valNum - 32) / 1.8);
    document.getElementById("outputKelvin").innerHTML = Math.floor(((valNum - 32) / 1.8) + 273.15);
}

function speedConverter(valNum) {
    document.getElementById("outputMiles").innerHTML = Math.floor(valNum / 1.609344);
    document.getElementById("outputMach").innerHTML = Math.floor(valNum / 1225.044);
}

function energyConverter(valNum) {
    document.getElementById("outputJoule").innerHTML = Math.floor(valNum * 1000);
    document.getElementById("outputCalorie").innerHTML = Math.floor(valNum * 239.006);
}

function powerConverter(valNum) {
    document.getElementById("outputWatt").innerHTML = Math.floor(valNum * 1000);
    document.getElementById("outputMegawatt").innerHTML = valNum * 0.001;
}

function areaConverter(valNum) {
    document.getElementById("outputSqmtr").innerHTML = Math.floor(valNum * 4046.856);
    document.getElementById("outputHectare").innerHTML = Math.floor(valNum / 2.471);
}