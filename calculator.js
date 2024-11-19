// Select the display input field
const display = document.querySelector('input[name="display"]');

// Get all buttons
const buttons = document.querySelectorAll('.calculator input[type="button"]');

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === "RESET") {
            // Clear the display
            display.value = "";
        } else if (value === "DEL") {
            // Remove the last character
            display.value = display.value.slice(0, -1);
        } else if (value === "=") {
            // Evaluate the expression
            try {
                display.value = eval(display.value.replace('x', '*'));
            } catch {
                display.value = "Error";
            }
        } else {
            // Append the button value to the display
            display.value += value;
        }
    });
});
