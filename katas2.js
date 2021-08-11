// comece a criar a sua função add na linha abaixo

function add(a, b) {
    return a + b;
};
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
 function multiply(a, b) {
    let result = 0;
    for ( let i = 1; i <= b ; i++) {
       result = add(result,a)
   }
   
 return result;
 }


// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

// comece a criar a sua função power na linha abaixo
function power(a, b) {
    let result3 = 1;
    for (let i = 1; i <= b; i++) {
        result3 =  multiply(result3, a)
    }    
  return result3;
}


// descomente a linha seguinte para testar sua função
//console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(a) {
    let result4 = 1
    for (let i = 0 ; i < a; i++) {
        let aux = a-i;
        result4 =  multiply(result4, aux)
    }
    return result4;
}    
 

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
