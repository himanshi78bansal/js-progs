// number guessing game

let number = 25;

let guess = prompt("Enter number: ");

while(guess!=number){
    if(guess>number){
        console.log("think for smaller one.");
    } else if(guess<number){
        console.log("think for larger one.");
    }
    guess = prompt("Enter number: ");
}

if(guess==number){
    console.log("congratulations: your guess is right.");        
} 