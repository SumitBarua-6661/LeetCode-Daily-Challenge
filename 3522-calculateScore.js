// # Instruction Simulator

// This project simulates a sequence of instructions, either "add" or "jump", based on input arrays of instructions and values. The function `calculateScore()` tracks execution and calculates the score, stopping when an instruction is revisited.

// ## Function

```javascript
var calculateScore = function(instructions, values) {
    let n = instructions.length;
    let score = 0;
    let i = 0;
    let visited = new Array(n).fill(false);

    while (i >= 0 && i < n) {
        if (visited[i]) {
            break;
        }
        
        visited[i] = true;

        if (instructions[i] === "add") {
            score += values[i];
            i++;
        } else if (instructions[i] === "jump") {
            i += values[i];
        }
    }

    return score;
};