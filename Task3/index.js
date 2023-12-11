function convertTemperature(){
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const resultElement = document.getElementById("result");
    let result;

    if(isNaN(temperatureInput)){
        result = "Please Enter a valid Number for temperature";
    }else{
        const temperature = parseFloat(temperatureInput);
        switch(unit){
            case "celsius":
                result = `${temperature}°C is ${(temperature *9)/5 +32}°F and ${(temperature+273.15).toFixed(2)}K`;
                break;
             case "fahrenheit":
                  result = `${temperature}°F is ${(((temperature-32)*5)/9).toFixed(2)}°C and
                  ${(((temperature-32)*5)/9 + 273.15).toFixed(2)}K`;
                  break;
              case "kelvin":
                   result = `${temperature}K is ${(temperature - 273.15).toFixed(2)}°C
                    and ${(((temperature-273.15) *9)/5 +32).toFixed(2)}°F`;
                  break;    
        }
    }
    resultElement.innerHTML = `<span style = "font-weight: bold; font-size:,5rem;">${result}</span>`;
}