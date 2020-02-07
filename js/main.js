/*------Constants------*/



/*------Variables (state)------*/

// Variables might include (board/turn/winner)
var board = [];
var turn ;
let winner = 0;
let Count = 1;
let isWinner = false;


/*------Cached Element References------*/

// You might choose to put your game status here
var gameStatus = document.getElementById('message');

/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click
document.querySelector('.board').addEventListener('click', onClick)
/*------Functions------*/
init();


// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading
function init() {
    board = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];
    turn = 1;
    gameStatus.textContent = "It is X's turn";
 };
// On-Click function:
// Set up what happens when one of the elements
// is clicked
function onClick(e) {
    let squareIdx = parseInt(e.target.id.replace('sq',''));
    if (board[squareIdx] !== 'null') return;
    console.log('yes');
    getWinner();
    render(squareIdx);
};

// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so
function getWinner(){
    if (board[0]+board[1]+board[2] === 3 ||  board[3]+board[4]+board[5] === 3 ||  board[6]+board[7]+board[8] === 3 ||  
       board[0]+board[3]+board[6] === 3 ||  board[1]+board[4]+board[7] === 3 ||  board[2]+board[5]+board[8] === 3 ||  
       board[0]+board[4]+board[8] === 3 ||  board[2]+board[4]+board[6] === 3){
       gameStatus.textContent = "X wins the game";
       isWinner = true;
   }   
   if (board[0]+board[1]+board[2] === -3 ||  board[3]+board[4]+board[5] === -3 ||  board[6]+board[7]+board[8] === -3 ||  
       board[0]+board[3]+board[6] === -3 ||  board[1]+board[4]+board[7] === -3 ||  board[2]+board[5]+board[8] === -3 ||  
       board[0]+board[4]+board[8] === -3 ||  board[2]+board[4]+board[6] === -3){
       gameStatus.textContent = "O wins the game";
       isWinner = true;
   }   
}

// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is
function render(squareIdx){
    if (isWinner === false) {
        setLetter = document.getElementById(`sq${squareIdx}`);
        board[squareIdx] = turn;
    if (turn === 1) {
        setLetter.textContent = "X";
        gameStatus.textContent = "It is O's turn"
    }else {
        setLetter.textContent = "O";
        gameStatus.textContent = "It is X's turn"
    }
    }
    turn *= -1;
    getWinner();
    Count++;

    if (Count === 10 && isWinner === false){
        gameStatus.textContent = "This game is a draw";
    }
}