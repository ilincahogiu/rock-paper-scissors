console.log(`Rock, paper, scissors game`);

const options = [`rock`, `paper`, `scissors`];
const displayPlayer = document.getElementById(`displayPlayer`);
const displayComputer = document.getElementById(`displayComputer`);
const displayResult = document.getElementById(`displayResult`);

function play(player) {
  const computer = options[Math.floor(Math.random() * options.length)];

  let result = ``;

    if (player === computer) {
        result = `It's a tie. You both chose ${computer}. `; 
    } else {
        switch(player) {
            case `rock`:
                result = (computer === `scissors`) ? `Congratulations, you won! Rock beats scissors.` : `Sorry, this time the computer won. Paper beats rock.`;
                break;
            case `paper`:
                result = (computer === `rock`) ? `Congratulations, you won! Paper beats rock.` : `Sorry, this time the computer won. Scissors beats paper.`;
                break;
            case `scissors`:
                result = (computer === `paper`) ? `Congratulations, you won! Scissors beats paper.` : `Sorry, this time the computer won. Rock beats scissors.`;
                break;
            }
        }
        displayPlayer.textContent = `Player: ${player}.`
        displayComputer.textContent = `Computer: ${computer}.`
        displayResult.textContent = result;
    }

//   if (user === computer) {
//     console.log(`Tie`);

//   } else if (user == `rock`) {
//     if (computer == `paper`) {
//       console.log(`Computer wins!`);
//     } else {
//       console.log(`User wins!`);
//     }

//   } else if (computer == `rock`) {
//     if (user == `paper`) {
//       console.log(`User wins!`);
//     } else {
//       console.log(`Computer wins!`);
//     }

//   } else if (computer == `paper`) {
//     if (user == `scissors`) {
//       console.log(`User wins!`);
//     } else {
//       console.log(`Computer wins!`);
//     }

//   } else if (computer == `scissors`) {
//     if (user == `paper`) {
//       console.log(`Computer wins!`);
//     } else {
//       console.log(`User wins!`);
//     }

//   } else if (user == `rock`) {
//     if (computer == `scissors`) {
//       console.log(`User wins!`);
//     } else {
//       console.log(`Computer wins!`);
//     }

//   } else if (computer == `rock`) {
//     if (user == `scissors`) {
//       console.log(`Computer wins!`);
//     } else {
//       console.log(`User wins!`);
//     }
//   }
// }
