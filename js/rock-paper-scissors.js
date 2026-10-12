

function getComputerChoice() {
	let numb = Math.floor(Math.random() * 3);
	let choiceC = null;

	switch(numb) { 
		
		case 0: 
			choiceC = 'rock';
		break;
		case 1:
			choiceC = 'paper';	
		break;
		case 2:
			choiceC = 'scissors'
        break;    
}
	return  choiceC;
}

function playRound(input){
	let playerChoice = input;
	let machineChoice = getComputerChoice();
	console.log('player Choice: '+ playerChoice);
	console.log('machine Choice: '+ machineChoice);



	//User Choice text display

	const playerChoiceDisplay = document.querySelector('#user-choice');
	const playerChoiceText = document.createElement('span');

	//Display reset 

	playerChoiceText.textContent = playerChoice;
	playerChoiceDisplay.appendChild(playerChoiceText);
	
	//Computer Choice text display

	const computerChoiceDisplay = document.querySelector('#computer-choice');
	const computerChoiceText = document.createElement('span');
	computerChoiceText.textContent = machineChoice;
	computerChoiceDisplay.appendChild(computerChoiceText);


	//Game Winner Display
	const winnerText = document.querySelector('#winner');
	const winnerDisplay = document.createElement('span');
	
	

	if(playerChoice === machineChoice){
		winnerDisplay.textContent = " Draw!";
	}
	else{
		switch(machineChoice){
			case 'rock': 
			if(playerChoice === "paper"){
				winnerDisplay.textContent = " You won!";
			}else{
				winnerDisplay.textContent = ' You Loose...';
			}
			break;

			case 'paper': 
			if(playerChoice === "scissors"){
				winnerDisplay.textContent = " You won!";
			}else{
				winnerDisplay.textContent = ' You Loose...';
			}
			break;

			case 'scissors': 
			if(playerChoice === "rock"){
				winnerDisplay.textContent = " You won!";
			}else{
				winnerDisplay.textContent = ' You Loose...';
			}
			break;

		}
	}
	winnerText.appendChild(winnerDisplay);
}

// Buttons add Event Listeners 


const buttons = document.querySelectorAll('.choice');
buttons.forEach((button) => {
	button.addEventListener('click' , () => {
		playRound(button.id);
	})
})



