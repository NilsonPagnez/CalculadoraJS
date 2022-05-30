function calculadora() {
    const operaçao = Number(prompt('Escolha uma operação:\n 1 - soma  (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));

    if (operaçao >= 7 ) {
        alert('Erro - operação inválida!');
        calculadora();
    }else {}

    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('insira o segundo valor:'));
    let resultado;

    if (!n1 || !n2) {
        alert('Erro - parametros invalidos')
        calculadora();
    }else {function soma() {
        resultado = n1 + n2
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperação();
    }
    function subtracao() {
        resultado = n1 - n2
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperação();
    }
    function multiplicacao() {
        resultado = n1 * n2
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperação();
    }
    function divisaoReal() {
        resultado = n1 / n2
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperação();
    }
    function divisaoInteiro() {
        resultado = n1 % n2
        alert(`O resto da divisão entre ${n1} e ${n2} é igual ao ${resultado}`)
        novaOperação();
    }
    function potenciacao() {
        resultado = n1 ** n2
        alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`)
        novaOperação();
    }
    function novaOperação() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 -Não');
        if (opcao == 1) {
            calculadora();
        }else if (opcao == 2) {
            alert('Até mais!')
        }else{
            alert('Digite uma opção válida!')
            novaOperação();
        }
    }}

    

/*if (operaçao == 1) {
    soma();
}else if (operaçao == 2) {
    subtracao();
}else if (operaçao == 3) {
    multiplicacao();
}else if (operaçao == 4) {
    divisaoReal();
}else if (operaçao == 5) {
    divisaoInteiro();
}else if (operaçao == 6) {
    potenciacao();
}*/

switch (operaçao) {
    case 1:
        soma();
        break
        case 2:
            subtracao();
            break
            case 3:
                multiplicacao();
                break
                case 4:
                    divisaoReal();
                    break
                    case 5:
                        divisaoInteiro();
                        break
                        case 6:
                            potenciacao();
                            break                    

                     
}

}
calculadora();