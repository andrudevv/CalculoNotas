const calcular = document.getElementById('btn-calcular');

const minimoParaGanar = document.querySelector('ned2');
const conHonores = document.querySelector('ned3');
calcular.addEventListener('click',function calcularPromedio() {

    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;
    let promdnum1 = parseFloat(num1)* .30;
    let promdnum2 = parseFloat(num2)* .30;
    let promdnum3 = parseFloat(num3)* .40;
    const recuperar = document.querySelector('.ned1');
    const sumPromedio = parseFloat(promdnum1+promdnum2+promdnum3);
    if(sumPromedio <= 2.0) {
        recuperar.innerHTML = `Si necesitas recuperar, Necesitas ${2.0 - sumPromedio} `;
    }
});


// document.getElementById("myBtn").addEventListener("click", displayDate);
// element.addEventListener("click", function(){ alert("Hello World!"); });
// const sumTotal = promdnum1 + promdnum2 + promdnum3;

// const valorTotal = parseFloat(num1 + num2 + num3)