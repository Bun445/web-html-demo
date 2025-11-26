function calculate() {
    const a = document.frmCal.txta.value.trim();
    const b = document.frmCal.txtb.value.trim();
    const op = document.frmCal.slto.value;
    const resultBox = document.frmCal.txtr;

    const numberFormat = /^[+-]?\d+(\.\d+)?$/;

    // Kiểm tra số
    if (!numberFormat.test(a)) {
        alert("❌ a must be a number!");
        resultBox.value = "";
        return;
    }

    if (!numberFormat.test(b)) {
        alert("❌ b must be a number!");
        resultBox.value = "";
        return;
    }

    const x = parseFloat(a);
    const y = parseFloat(b);
    let result;

    // Kiểm tra chia cho 0
    if ((op === "/" || op === "%") && y === 0) {
        alert("❌ b can't be 0!");
        resultBox.value = "";
        return;
    }

    // Thực hiện phép toán
    switch (op) {
        case "+": result = x + y; break;
        case "-": result = x - y; break;
        case "*": result = x * y; break;
        case "/": result = x / y; break;
        case "%": result = x % y; break;
        case "^": result = Math.pow(x, y); break;
        default:
            alert("Invalid operator!");
            return;
    }

    resultBox.value = result;
}