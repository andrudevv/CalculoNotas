const calculate = document.getElementById('btn-calcular');

const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const number3 = document.getElementById('num3');


calculate.addEventListener('click',function conditional() {
    let total = document.querySelector('.total');
    let subject = document.querySelector('.subject');
    let retrieve = document.querySelector('.ned1');
    let minWin = document.querySelector('.ned2');
    let winWithHonors = document.querySelector('.ned3');
    let repeatText = (subject.innerHTML =  ``) + (retrieve.innerHTML = ``) + (minWin.innerHTML = ``) + (winWithHonors.innerHTML = ``);
    let number1Average = number1.value *(.30);
    let number2Average = number2.value *(.30);
    let number3Average = number3.value *(.40);
    const sumAverage = parseFloat(number1Average+number2Average+number3Average);
    
    total.innerHTML = `Nota Final. ${(sumAverage).toFixed(2)}`;

    if(sumAverage <= 2.09){
        subject.innerHTML =  `Lo sentimos, Perdiste la asignatura.`;
        repeatText;
    }else if(sumAverage >= 2.10 && sumAverage <= 3.49) {
        subject.innerHTML =  `Perdiste la asignatura, Pero tienes oportunidad de Recuperar.`;
        repeatText;
    }else if(sumAverage >= 3.5 && sumAverage <= 4.59) {
        subject.innerHTML =  `Ganaste satisfactoriamente la asignatura.`;
        repeatText;
    }else if(sumAverage >=4.6) {
        subject.innerHTML =  `Ganaste la asignatura con Honores.`;
        repeatText;
    }
});

function calculateAverage() {
    let number1Average = number1.value *(.30);
    let number2Average = number2.value *(.30);
    let retrieve = document.querySelector('.ned1');
    let minWin = document.querySelector('.ned2');
    let winWithHonors = document.querySelector('.ned3');
    let total = document.querySelector('.total');
    let subject = document.querySelector('.subject');

    const sumAverage = parseFloat(number1Average+number2Average);
    total.innerHTML = `Nota. ${(sumAverage).toFixed(2)}`;

    if( sumAverage <= 0.1) {
        subject.innerHTML =  `Lo sentimos, Perdiste la asignatura.`;
    }else if (sumAverage >= 0.2 && sumAverage<= 2) {
        subject.innerHTML =  `Vas perdiendo la asignatura, Pero puedes recuperar`;
        retrieve.innerHTML = `Si deseas recuperar, Necesitas ${((2.1 - sumAverage) / 0.4).toFixed(2) }`;
        minWin.innerHTML = `Para ganar satisfactoriamente, necesitarias minimo ${((3.5 - sumAverage) / 0.4).toFixed(2) }`;
        winWithHonors.innerHTML = `Para ganar con Honores, Necesitas minimo ${((4.6 - sumAverage) / 0.4).toFixed(2) }`;
    }else if( sumAverage >= 2.01  && sumAverage <= 3.49) {
        subject.innerHTML =  `Puedes recuperar`;
        retrieve.innerHTML = `No necesitas notas para recuperar`;
        minWin.innerHTML = `Para ganar satisfactoriamente, necesitarias minimo ${((3.5 - sumAverage) / 0.4).toFixed(2) }`;
        winWithHonors.innerHTML = `Para ganar con Honores, Necesitas minimo ${((4.6 - sumAverage) / 0.4).toFixed(2) }`;
        
    }else if(sumAverage >= 3.5 && sumAverage <= 4.59) {
        subject.innerHTML =  `Ganaste la asignatura`;
        retrieve.innerHTML = `No necesitas notas para recuperar`;
        minWin.innerHTML = `Ganaste satisfactoriamente la asignatura`;
        winWithHonors.innerHTML = `Para ganar con Honores, Necesitas minimo ${((4.6 - sumAverage)  / 0.4).toFixed(2)}`;
    }else if (sumAverage >= 4.6) {
        subject.innerHTML =  `Ganaste la asignatura`;
        minWin.innerHTML = `Ganaste satisfactoriamente la asignatura`;
        winWithHonors.innerHTML = `Ganaste con Honores la asignatura`;
    }
    

}
