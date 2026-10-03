


function getComputerChoise() {
	let numb = Math.floor(Math.random() * 3);
	let choiseC = null;

	switch(numb) { 
		
		case 0: 
			choiseC = 'rock';
		break;
		case 1:
			choiseC = 'paper';	
		break;
		case 2:
			choiseC = 'scissors'
        break;    
}
    console.log('Computer: ' + choiseC);
	return  choiseC;
}

function getHumanChoise() {
    let input = prompt('Enter the number of your choise: \n0 for rock, 1 for paper, 2 for scissors');
    let numb = parseInt(input);

    let choiseH = null;

    	switch(numb) { 
		
		case 0: 
			choiseH = 'rock';
		break;
		case 1:
			choiseH = 'paper';	
		break;
		case 2:
			choiseH = 'scissors'
        break;    
}
	console.log('player: ' + choiseH);
	return choiseH;
}


function playRound(){
    let machine = getComputerChoise();
    let human = getHumanChoise();
	let humanCount = 0;
	let machineCount = 0;

    if(machine === human){
		alert("Draw!");
	}
	else
		switch(machine){
			case 'rock':
				if(human === 'paper'){
					alert("You won!!");
					humanCount = humanCount + 1;
				}
				else
				{
					alert("You loose!");
					machineCount = machineCount + 1;
				}	
			break;

			case 'paper':
				if(human === 'scissors'){
					alert("You won!!");
					humanCount = humanCount + 1;
				}
				else
				{	
					alert("You loose!");
					machineCount = machineCount + 1;
				}	
			break;

			case 'scissors':
				if(human === 'rock'){
					alert("You won!!");
					humanCount = humanCount + 1;
				}
				else
				{	
					alert("You loose!");
					machineCount = machineCount + 1;
				}	
			break;
		}

		return {machineCount, humanCount};
	
}



function playGame(){
	const roundCounting = parseInt(prompt("How many rounds you want to play?"));
	let humanScore = 0;
	let computerScore = 0;

	for (let count = 0; count < roundCounting; count++){

		const result = playRound();

		humanScore += result.humanCount;
		computerScore += result.machineCount;
	}

	console.log("Final Human Score:", parseInt(humanScore));
    console.log("Final Computer Score:", parseInt(computerScore));

	alert(`Final score is: \nPlayer: ${parseInt(humanScore)} \nComputer: ${parseInt(computerScore)}`);
	

}

playGame();