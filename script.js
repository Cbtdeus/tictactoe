gameBoard = (function (){
    const board = ["","","","","","","","",""]
    const change = function(piece,location){
        if (board[location].length === 0)                     /* add legal move checking */
        board[location] = piece
        console.log(board)
        }
    const clear = function(){
        for (let i = 0;i < board.length; i++){
            board[i] = ""
    }
}
    return {change,clear}
})()

player = {
    humanSide =
    getBotMove                          
    getHumanMove                /* These 2 functions should call the game.isLegalMove to check if its their turn and if the move is legal */
}                               /* Human move should stop when the move is illegal, while bot move should loop until it finds a legal move */

game = {   

    isLegalMove
}

playGame = {}          /* add checking whose turn it is before altering the board */