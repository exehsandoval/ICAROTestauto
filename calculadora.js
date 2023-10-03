class [Main] {
  static [main]() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const [calculadora] = new [Calculadora]();

    let count = 0;

    rl.setPrompt('Primer valor: ');
    rl.prompt();

    rl.on('line', (primerValor) => {
      rl.setPrompt('Segundo valor: ');
      rl.prompt();

      rl.on('line', (segundoValor) => {
        rl.setPrompt('Operación (+, -, *, /): ');
        rl.prompt();

        rl.on('line', (operacion) => {
          let resultado = 0;

          switch (operacion) {
            case '+':
              resultado = [calculadora](parseInt(primerValor), parseInt(segundoValor));
              break;
            case '-':
              resultado = [calculadora].[resta](parseInt(primerValor), parseInt(segundoValor));
              break;
            case '*':
              resultado = [calculadora].[multiplicacion](parseInt(primerValor), parseInt(segundoValor));
              break;
            case '/':
              resultado = [calculadora].[division](parseInt(primerValor), parseInt(segundoValor));
              break;
            default:
              console.log('Operación no válida');
              rl.close();
              return;
          }

          console.log('Resultado: ' + resultado);

          if (resultado < 0) {
            console.log('Tené cuidado, el resultado es negativo!');
          } else if (resultado >= 0 && resultado < 10000) {
            console.log('Resultado dentro de los límites');
          } else {
            console.log('Error, resultado muy grande');
          }

          count++;
          if (count >= 5) {
            rl.close();
            return;
          }

          rl.setPrompt('Primer valor: ');
          rl.prompt();
        });
      });
    });
  }
}

class [Calculadora]{
  [suma](a, b) {
    return a + b;
  }

  [resta](a, b) {
    return a - b;
  }

  [multiplicacion](a, b) {
    return a * b;
  }

  [division](a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      console.log('No se puede dividir por cero');
      return 0;
    }
  }
}

[Main].[main]();