        const rockButton=document.querySelector("#rock-button")
        const paperButton=document.querySelector("#paper-button")
        const scissorsButton=document.querySelector("#scissors-button")
        const refreshButton=document.querySelector("#refresh-button")


        rockButton.addEventListener('click', ()=>{playGame('Rock')})
        paperButton.addEventListener('click', ()=>{playGame('Paper')})
        scissorsButton.addEventListener('click', ()=>{playGame('Scissors')})
        refreshButton.addEventListener('click',resetScore )
        
        let win=0,lose=0,tie=0;
        let score= JSON.parse(localStorage.getItem("myrpsscores")) ||
        {win,lose,tie}
        const movesDiv=document.getElementById("moves")
        const resultsDiv=document.querySelector("#results")
        const scoresDiv=document.querySelector("#scores")
        console.log(movesDiv)

        function playGame(playerMove) {
            console.log(`Player Move ${playerMove}`)
            const computerMove=generateComputerMove()
            console.log(`Computer Move ${computerMove}`)
            let result
            switch(playerMove)
            {
                case "Rock":
                        switch(computerMove)
                        {
                            case "Rock":  result="Tie"; break;
                            case "Paper": result="Lose"; break;
                            case "Scissors": result="Win"; break;
                        }
                break;
                case "Paper":
                    switch(computerMove)
                        {
                            case "Rock":  result="Win"; break;
                            case "Paper": result="Tie"; break;
                            case "Scissors": result="Lose"; break;
                        }
                break;
                case "Scissors":
                    switch(computerMove)
                        {
                            case "Rock":  result="Lose"; break;
                            case "Paper": result="Win"; break;
                            case "Scissors": result="Tie"; break;
                        }
                break;
            }

             console.log(`Result ${result}`)
             switch(result)
             {
                case "Win": score.win++;break;
                case "Lose": score.lose++;break;
                case "Tie": score.tie++;break;
             }

             console.log(`Scoreboard Wins : ${score.win} Lose : ${score.lose}  Tie : ${score.tie}`)
       

        movesDiv.innerHTML=`Player Move ${playerMove} Computer Move ${computerMove}`
        resultsDiv.innerHTML=`Result ${result}`
        localStorage.setItem('myrpsscores', JSON.stringify(score))
        displayScoreboard();
    }

        function displayScoreboard()
        {
            scoresDiv.innerHTML=`Scoreboard Wins : ${score.win} Lose : ${score.lose}  Tie : ${score.tie}`
        }
        function generateComputerMove()
        {
            const random=Math.random()
            //console.log(random)
            if(random<1/3)
            return "Rock"
            else if(random>1/3 && random<=2/3)
            return "Paper"
            else
            return "Scissors"
        }

       
        function resetScore()
        {
            if(JSON.parse(localStorage.getItem("myrpsscores")))
            {
                localStorage.removeItem("myrpsscores")
                score={win:0,lose:0,tie:0}
                displayScoreboard();
            }
        }