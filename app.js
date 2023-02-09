const calculate = document.getElementById('btn-calcular');
calculate.addEventListener('click',function conditional() {
    let number1 = document.getElementById('num1');
    let number2 = document.getElementById('num2');
    let number3 = document.getElementById('num3');
    let number1Average = number1.value *(.30);
    let number2Average = number2.value *(.30);
    let number3Average = number3.value *(.40);
    let total = document.querySelector('.total');
    let subject = document.querySelector('.subject');
    const sumAverage = parseFloat(number1Average+number2Average+number3Average);
    let retrieve = document.querySelector('.ned1');
    let minWin = document.querySelector('.ned2');
    let winWithHonors = document.querySelector('.ned3');
    total.innerHTML = `Nota Final. ${sumAverage}`;

    if (sumAverage < 2.0) {
        subject.innerHTML =  `Perdiste la asignatura`;
        retrieve.innerHTML = ``;
        minWin.innerHTML = ``;
        winWithHonors.innerHTML = ``;
    }else if (sumAverage > 2.0) {
        subject.innerHTML =  `Ganaste la asignatura`;
        retrieve.innerHTML = ``;
        minWin.innerHTML = ``;
        winWithHonors.innerHTML = ``;
    }
});



function calculateAverage() {
    let noNotes=0;
    let number1 = document.getElementById('num1');
    let number2 = document.getElementById('num2');
    let number3 = document.getElementById('num3');
    let number1Average = number1.value *(.30);
    let number2Average = number2.value *(.30);
    let number3Average = number3.value *(.40);
    let retrieve = document.querySelector('.ned1');
    let minWin = document.querySelector('.ned2');
    let winWithHonors = document.querySelector('.ned3');
    let total = document.querySelector('.total');
    let subject = document.querySelector('.subject');

    if (isNaN(num3)) {
        num3 = 0;
    }
    
    const sumAverage = parseFloat(number1Average+number2Average+number3Average);
    total.innerHTML = `Nota Final. ${sumAverage}`;

    if(sumAverage <= 2.0) {
        subject.innerHTML =  `Perdiste la asignatura`;
        retrieve.innerHTML = `Si deseas recuperar, Necesitas ${ (2.1) - sumAverage} `;
        minWin.innerHTML = `Para ganar satisfactoriamente necesitarias minimo ${(3.5) - sumAverage  }`;
        winWithHonors.innerHTML = `Para ganar con Honores, Necesitas minimo ${(4.6) - sumAverage}`;

    }else if(sumAverage >= 2.1 && sumAverage <= 3.4 ) {
        subject.innerHTML =  `Perdiste la asignatura, Pero puedes recuperar`;
        retrieve.innerHTML = ``;
        minWin.innerHTML = `Para ganar satisfactoriamente necesitarias minimo ${(3.5) - sumAverage  }`;
        winWithHonors.innerHTML = `Para ganar con Honores, Necesitas minimo ${(4.6) - sumAverage}`;
    }else if(sumAverage >= 3.5 && sumAverage <= 4.5) {
        subject.innerHTML =  `Ganaste la asignatura`;
        retrieve.innerHTML = `No necesitas notas para recuperar ${noNotes} `;
        minWin.innerHTML = `Ganaste satisfactoriamente la asignatura ${noNotes}`;
        winWithHonors.innerHTML = `Para ganar con Honores, Necesitas minimo ${(4.6) - sumAverage}`;
    }else if (sumAverage >= 4.6 && sumAverage <= 5.0) {
        subject.innerHTML =  `Ganaste la asignatura`;
        retrieve.innerHTML = ``;
        minWin.innerHTML = `Ganaste satisfactoriamente la asignatura ${noNotes}`;
        winWithHonors.innerHTML = `Ganaste con Honores la asignatura ${noNotes}`;
    }
    

}
