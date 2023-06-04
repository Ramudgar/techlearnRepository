async function solveMathProblem(problem) {
  const parts = problem.split(" ");
  const operator = parts[0];
  const num1 = parseInt(parts[1]);
  const num2 = parseInt(parts[2]);

  let result;
  switch (operator) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operator");
  }

  return result;
}

async function run() {
  try {
    const result = await solveMathProblem("subtract 10 5");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

run();


//  simple funciton using async await to add numbers

// async function add(x, y) {
//     if (typeof x !== "number" || typeof y !== "number") {
//         throw new Error("X and Y must be numbers");
//     }
    
//     return x + y;
//     }

//     add(4, 5)
//     .then((val) => {
//         console.log("Promise resolved with: ", val);
//     }
//     )
//     .catch((err) => {
//         console.log("Promise rejected with: ", err);
//     }
//     );

function greeting(name) {
  console.log ('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);



