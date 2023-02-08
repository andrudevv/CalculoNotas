const calcular = document.getElementById('btn-calcular');

calcular.addEventListener('click',function calcularPromedio() {
    const noNecNotas=0;
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;
    let promdnum1 = parseFloat(num1)* .30;
    let promdnum2 = parseFloat(num2)* .30;
    let promdnum3 = parseFloat(num3)* .40;
    const recuperar = document.querySelector('.ned1');
    const minimoParaGanar = document.querySelector('.ned2');
    const ganarconHonores = document.querySelector('.ned3');
    const total = document.querySelector('.total');
    const perdioAsignatura = document.querySelector('.perdioAsinatura')
    const sumPromedio = parseFloat(promdnum1+promdnum2+promdnum3);
    total.innerHTML = `Nota Final. ${sumPromedio}`;

    if(sumPromedio <= 2.0) {
        perdioAsignatura.innerHTML =  `Perdiste la asignatura`;
        recuperar.innerHTML = `Si deseas recuperar, Necesitas ${ (2.1) - sumPromedio} `;
        minimoParaGanar.innerHTML = `Para ganar satisfactoriamente necesitarias minimo ${(3.5) - sumPromedio  }`;
        ganarconHonores.innerHTML = `Para ganar con Honores, Necesitas minimo ${(4.6) - sumPromedio}`;

    }else if(sumPromedio >= 2.1 && sumPromedio <= 3.4 ) {
        perdioAsignatura.innerHTML =  `Perdiste la asignatura, Pero puedes recuperar`;
        recuperar.innerHTML = ``;
        minimoParaGanar.innerHTML = `Para ganar satisfactoriamente necesitarias minimo ${(3.5) - sumPromedio  }`;
        ganarconHonores.innerHTML = `Para ganar con Honores, Necesitas minimo ${(4.6) - sumPromedio}`;
    }else if(sumPromedio >= 3.5 && sumPromedio <= 4.5) {
        perdioAsignatura.innerHTML =  `Ganaste la asignatura`;
        recuperar.innerHTML = `No necesitas notas para recuperar ${noNecNotas} `;
        minimoParaGanar.innerHTML = `Ganaste satisfactoriamente la asignatura ${noNecNotas}`;
        ganarconHonores.innerHTML = `Para ganar con Honores, Necesitas minimo ${(4.6) - sumPromedio}`;
    }else if (sumPromedio >= 4.6 && sumPromedio <= 5.0) {
        perdioAsignatura.innerHTML =  `Ganaste la asignatura`;
        recuperar.innerHTML = ``;
        minimoParaGanar.innerHTML = `Ganaste satisfactoriamente la asignatura ${noNecNotas}`;
        ganarconHonores.innerHTML = `Ganaste con Honores la asignatura ${noNecNotas}`;
    }
    

});


// document.getElementById("myBtn").addEventListener("click", displayDate);
// element.addEventListener("click", function(){ alert("Hello World!"); });
// const sumTotal = promdnum1 + promdnum2 + promdnum3;

// const valorTotal = parseFloat(num1 + num2 + num3)