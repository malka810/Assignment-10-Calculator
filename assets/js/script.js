
const display = document.querySelector(".display"); 
const buttons = document.querySelectorAll("button");
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=") {
        try {
            output = eval(output.replace("%", "/100"));
        } catch (error) {
            output = "Error"; 
        }
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.slice(0, -1);
    } else {
        const lastChar = output[output.length - 1];
        if ((['+', '-', '*', '/', '%'].includes(btnValue) && 
             ['+', '-', '*', '/', '%'].includes(lastChar)) || 
             (output === "" && ['+', '-', '*', '/', '%'].includes(btnValue))) {
            return; 
        }
    
        output += btnValue;
    }
  
    display.value = output;
};
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});