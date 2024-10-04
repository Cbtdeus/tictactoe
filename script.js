gameBoard = {
    board:["","","","","","","","",""],
    change:(piece,index) => {
            gameBoard.board[index] = piece
    },
    clear:() => {
        gameBoard.board.fill("")
    }
    }
game = {
    pause:false,
    round:1,
    playRound:(index) => {
    if (index > 8 || index < 0 || gameBoard.board.at(index) != "" || game.pause === true) {
        return
    }
    if (game.round % 2){
        gameBoard.change("O",index)             
        game.checkWinner()
    }else{
        gameBoard.change("X",index)                
        game.checkWinner()
    }
    console.log(gameBoard.board)
    game.round++
    },
    reset:() => {
        gameBoard.board.fill("")
        round = 1
        pause = false
    },
    winConditions:[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],
    checkWinner:() => {
        for (let i = 0; i < game.winConditions.length;i++){
            const condition = game.winConditions[i]
            const cellA = gameBoard.board[condition[0]]
            const cellB = gameBoard.board[condition[1]]
            const cellC = gameBoard.board[condition[2]]
            if (cellA == "" || cellB == "" || cellC == ""){
                continue
            }
            if (cellA == cellB  && cellB == cellC){
                console.log(gameBoard.board[condition[2]] + " won!")
                game.pause = true
            }
        }
    }
    }   
