const number1 = parseFloat(prompt('Ô trống 1: '));
const operator = prompt('Nhập phép toán (+, -, *, /, ^): ');
const number2 = parseFloat(prompt('Ô trống 2 : '));

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
        result = number2 !== 0 ? number1 / number2 : "Không chia cho 0";
        break;
    case '^':
        result = Math.pow(number1, number2);
        break;
    default:
        result = "Phép toán không hợp lệ";
}


console.log(`Kết quả: ${result}`);