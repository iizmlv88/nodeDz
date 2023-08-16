const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('введіть перше число ', (num1) => {
    r1.question('оберіть (+, -, *, /) ', (operator) => {
        r1.question('введіть друге число ', (num2) => {
            const number1 = parseFloat(num1);
            const number2 = parseFloat(num2);

            let result;

            switch (operator) {
                case '+':
                    result = number1 + number2;
                    break;
                case '-':
                    result = number1 - number2;
                    break;
                case '*':
                    result = number1 * number2;
                    break;
                case '/':
                    if (number2 !== 0) {
                        result = number1 / number2;
                    } else {
                        console.log('err ділення на 0');
                        r1.close();
                        return;
                    }
                    break;
                default:
                    console.log('error');
                    r1.close();
                    return;
            }

            console.log(`Результат: ${result}`);
            r1.close();
        });
    });
});
