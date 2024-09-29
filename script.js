gameBoard = (function (){
    const board = ["","","","","","","","",""]
    const change = function(piece,location){                   
        board[location] = piece
        console.log(board)
        }
    const clear = function(){
        for (let i = 0;i < board.length; i++){
            board[i] = ""
    }
}
    const isLegal = (moveIndex) => {    
        if (gameBoard.board[moveIndex].length == 0){
            return true
        }else {
            return false
        }
    }

     const checkWinner = (piece) => {
        if (board.at(0) === piece && board.at(1) === piece && board.at(2) === piece){
            return true
        }
        if (board.at(3) === piece && board.at(4) === piece && board.at(5) === piece){
            return true
        }
        if (board.at(6) === piece && board.at(7) === piece && board.at(8) === piece){
            return true
        }
        if (board.at(0) === piece && board.at(3) === piece && board.at(6) === piece){
            return true
        }
        if (board.at(1) === piece && board.at(4) === piece && board.at(7) === piece){
            return true
        }
        if (board.at(2) === piece && board.at(5) === piece && board.at(8) === piece){
            return true
        }
        if (board.at(0) === piece && board.at(4) === piece && board.at(8) === piece){
            return true
        }
        if (board.at(2) === piece && board.at(4) === piece && board.at(6) === piece){
            return true
        }
        return false
    } 

    return {board,change,clear,isLegal,checkWinner}
})()

const player = {
    getSides:(playerPiece) => {
        if (playerPiece === "X")
            botPiece = "O"
        else botPiece = "X"
        return {playerPiece,botPiece}
    },
    getHumanMove: (humanMove) => {
        while (gameBoard.isLegal(humanMove) === false){
            humanMove = prompt("pick something else")
        } 
        return humanMove
    },
    getBotMove: () => {
       botMove = Math.floor(Math.random()*8.9)
       while (gameBoard.isLegal(botMove) === false){
        botMove = Math.floor(Math.random()*8.9)
       }
        return botMove
    }
}
 playGame = function(){
    gameBoard.clear()
    const sides = player.getSides(prompt("Pick a piece"))
    console.log(sides)
    for (let i = 1; i < 10;i++){
        if (i % 2 != 0){
            if (sides.playerPiece === "O"){
                gameBoard.change("O",player.getHumanMove(prompt("1")))
                if (gameBoard.checkWinner("O")){
                    console.log("You won!")
                    return
                }
            }else{
                gameBoard.change("O",player.getBotMove())
                if (gameBoard.checkWinner("O")){
                    console.log("You lost!")
                    return
                }
            }
           gameBoard.checkWinner("O")
        }
        if (i % 2 === 0){
            if (sides.playerPiece === "X"){
                gameBoard.change("X",player.getHumanMove(prompt("1")))
                if (gameBoard.checkWinner("X")){
                    console.log("You won!")
                    return
                }
            }else{
                gameBoard.change("X",player.getBotMove())
            }
            if (gameBoard.checkWinner("X")){
                if (gameBoard.checkWinner("X")){
                    console.log("You Lost!")
                    return
                }
                
            }
        }
        if (i === 9){
            console.log("Tie")
        } 
        }
    
}   

playGame()
