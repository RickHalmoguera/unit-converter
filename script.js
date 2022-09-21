
const valueInput = document.getElementById("valueToConvert")
const selectedUnit = document.getElementById("unitSelector")
const showResult = document.getElementById("result")
const keepResult = document.getElementById("saveResult")
const savedHtml = document.getElementById("showSaved")
const originalUnit = document.getElementById("unitToConvert")
const invertConvertionBtn =  document.getElementById("invertBtn")

const kmToMiles = 0.621371
const milesToKm = 1.609334
const meterToFeet= 3.28084
const feetToMeter = 0.3048
const cmToInch = 0.393701
const inchToCm = 2.54

let result = 0
let number = 0
const UnitSelected = document.getElementById("unitSelector")


function convertUnit(){
    
    if (UnitSelected.value == "km-miles"){
        let number = valueInput.value
        result = (number * kmToMiles).toFixed(2)
        originalUnit.innerText = valueInput.value ==1? "km" : "kms"
        showResult.innerText = result == 1? result + " mile" : result + " miles"

    }else if(UnitSelected.value == "miles-km"){
        let number = valueInput.value
        result = (number * milesToKm).toFixed(2)
        originalUnit.innerText = valueInput.value ==1? "mile" : "miles"
        showResult.innerText = result == 1? result + " km" : result + " kms"

    }else if(UnitSelected.value == "meters-feets"){
        
        let number = valueInput.value
        result = (number * meterToFeet).toFixed(2)
        originalUnit.innerText = valueInput.value ==1? "meter" : "meters"
        showResult.innerText = result == 1? result + " feet" : result + " feets"

    }else if(UnitSelected.value == "feets-meters"){
        let number = valueInput.value
        result = (number * feetToMeter).toFixed(2)
        originalUnit.innerText = valueInput.value ==1? "feet" : "feets"
        showResult.innerText = result == 1? result + " meter" : result + " meters"

    }else if(UnitSelected.value == "cm-inches"){
        let number = valueInput.value
        result = (number * cmToInch).toFixed(2)
        originalUnit.innerText = valueInput.value ==1? "cm" : "cms"
        showResult.innerText = result == 1? result + " inch" : result + " inches"

    }else if(UnitSelected.value == "inches-cm"){
        let number = valueInput.value
        result = (number * inchToCm).toFixed(2)
        originalUnit.innerText = valueInput.value ==1? "inch" : "inches"
        showResult.innerText = result == 1? result + " cm" : result + " cms"
    }
}


function makeResultList(){
    
    if(valueInput.value){
        savedHtml.innerHTML +=`<div ><p class="list-element"> ${valueInput.value} ${originalUnit.innerText} →  ${showResult.innerText} <i class="fa-solid fa-x"></i> </p> </div> `
    
        UnitSelected.value ="km-miles"
        valueInput.value =""
    }

    
}

function invertCalculation(){
    if (UnitSelected.value == "km-miles"){
        UnitSelected.value ="miles-km"
    
    }else if(UnitSelected.value == "miles-km"){
        UnitSelected.value ="km-miles"
        
    }else if(UnitSelected.value == "meters-feets"){
        UnitSelected.value ="feets-meters"
        
    }else if(UnitSelected.value == "feets-meters"){
        UnitSelected.value ="meters-feets"
        
    }else if(UnitSelected.value == "cm-inches"){
        UnitSelected.value ="inches-cm"
        
    }else if(UnitSelected.value == "inches-cm"){
        UnitSelected.value ="cm-inches"
        
    }
    convertUnit()
}

function deleteSaved(e){
    const child = e.target
    if(child.className == "fa-solid fa-x"){
        
        child.parentElement.remove()
    }
    
}


valueInput.addEventListener('input',convertUnit)
selectedUnit.addEventListener('change',convertUnit)
keepResult.addEventListener('click',makeResultList)
invertConvertionBtn.addEventListener('click', invertCalculation)
document.body.addEventListener('click',deleteSaved)