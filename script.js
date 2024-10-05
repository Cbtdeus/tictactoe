gameBoard = {
    board:["","","","","","","","",""],
    change:(piece,index) => {
            gameBoard.board[index] = piece
    },
    clear:() => {
        gameBoard.board.fill("")
    }
    }

player = {
    O:"O",
    X:"X",
    changeName:(target,newName) => {
        if (newName == true){
        player[target] = newName
        }
    }
}
game = {
    pause:false,
    round:1,
    playRound:(index) => {
    if (index > 8 || index < 0 || gameBoard.board.at(index) != "" || game.pause == true) {
        return
    }
    if (game.round % 2){
        gameBoard.change("O",index)             
        displayHandler.gameStatus.textContent = player.X + "'s Turn"
        game.checkWinner(player.O)
    }else{
        gameBoard.change("X",index)                
        displayHandler.gameStatus.textContent = player.O + "'s Turn"
        game.checkWinner(player.X)
    }
    console.log(gameBoard.board)
    console.log(game.round)
    game.round++
    },
    reset:() => {
        gameBoard.board.fill("")
        game.round = 1
        game.pause = false
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
    checkWinner:(winner) => {
        for (let i = 0; i < game.winConditions.length;i++){
            const condition = game.winConditions[i]
            const cellA = gameBoard.board[condition[0]]
            const cellB = gameBoard.board[condition[1]]
            const cellC = gameBoard.board[condition[2]]
            if (cellA == "" || cellB == "" || cellC == ""){
                continue
            }
            if (cellA == cellB  && cellB == cellC){
                displayHandler.gameStatus.textContent = winner + " Wins!"
                console.log(winner + " Wins!") 
                game.pause = true
                return
            }
            if (game.round == 9){
                displayHandler.gameStatus.textContent = "Draw!"
                console.log("Draw!")
                game.pause = true
            }
        }
    }
    }
displayHandler = {
    refreshCell:(id) => {
        document.getElementById(id).textContent = gameBoard.board[id]
    },
    refreshBoard:() => {
        for (let i = 0; i < 9; i++){ 
        displayHandler.refreshCell(i)
        }
    },
    gameStatus:document.querySelector(".status")
} 
boardContainer = document.querySelector(".boardContainer")
for (let i = 0; i < 9;i++){
    const cell = document.createElement("div")
    cell.setAttribute("class","cell")
    cell.setAttribute("id",i)
    boardContainer.appendChild(cell)
    cell.addEventListener("click", () => {
        game.playRound(i)
        displayHandler.refreshCell(i)
    })
}
resetButton = document.querySelector("#reset")
resetButton.addEventListener("click", () => {
    game.reset()
    gameBoard.clear()
    displayHandler.refreshBoard()
})
p1NameChangeBtn = document.querySelector(".p1Name button")
p1NameChangeInput = document.querySelector(".p1Name input")
p2NameChangeBtn = document.querySelector(".p2Name button")
p2NameChangeInput = document.querySelector(".p2Name input")
p1NameChangeBtn.addEventListener("click",() => {
    player.O = p1NameChangeInput.value
})
p2NameChangeBtn.addEventListener("click",() => {
    player.X = p2NameChangeInput.value
})