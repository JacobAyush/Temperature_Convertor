// Scripts
const celsiusField = document.querySelector("#celsius");   
const degree = document.querySelector("#degree");   
const convertBtn = document.querySelector("#convert-btn");   
const tempType = document.querySelector("#temp-type");   

// Window Loading Reset
window.addEventListener("load",()=>{
    degree.value = "";
    celsiusField.innerHTML = "";
})


convertBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    convertToCelsius();

    // Adding Loading Feature
    convertBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i>Converting...</span>"
    setTimeout(()=>{
        convertBtn.innerHTML = "<span>Convert</span>";
    },500)
})

function convertToCelsius(){
    let inputValue = degree.value;

    // Logic to convert Celsius to farhaneit/kelvin 
    setTimeout(()=>{
        if(tempType.value == "farhaneit"){
            const farhaneitToCelsius = (inputValue - 32)*(5/9);
            celsiusField.innerHTML = `${farhaneitToCelsius.toFixed(3)} &deg;c`;
        }
        else if(tempType.value == "kelvin"){
            const kelvinitToCelsius = inputValue-273.15;
            celsiusField.innerHTML = `${kelvinitToCelsius.toFixed(3)} &deg;c`;
        }
    
    },550)
}