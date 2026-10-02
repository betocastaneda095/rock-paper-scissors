


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
			choiseC = 'scisors'
        break;    
}
    console.log('Computer: ' + choiseC);
	return  choiseC;
}

function getHumanChoise() {
    let input = prompt('Enter the number of your choise: \n0 for rock, 1 for paper, 2 for scisors');
    let choiseH = parseInt(input);

    let numb = null;
    	switch(numb) { 
		
		case 0: 
			choiseH = 'rock';
		break;
		case 1:
			choiseH = 'paper';	
		break;
		case 2:
			choiseH = 'scisors'
        break;    
}

}

let humanScore = 0;
let computerScore = 0;

function playRound(){
    let machine = getComputerChoise();
    let human = getHumanChoise();

    if(machine === )
}
