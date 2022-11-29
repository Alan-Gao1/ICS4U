let tempData = JSON.parse(localStorage.getItem("data"));
let tempSeen = JSON.parse(localStorage.getItem("seen"))

tempData.forEach(player =>{
    let whitePlayer = document.getElementById("whitePlayer")
    let blackPlayer = document.getElementById("blackPlayer")

    let option1 = document.createElement('option')
    option1.setAttribute("value", player.name)
    option1.textContent = player.name
    whitePlayer.appendChild(option1)

    let option2 = document.createElement('option')
    option2.setAttribute("value", player.name)
    option2.textContent = player.name
    blackPlayer.appendChild(option2)
})

function addPlayer(){
    let firstName = document.querySelector('#pFirstName').value;
    let lastName = document.querySelector('#pLastName').value;
    let name = firstName.concat(" ", lastName);
    let classical = document.querySelector('#classical').value;
    let rapid = document.querySelector('#rapid').value;
    let blitz = document.querySelector('#blitz').value;
    let samePlayer = false
    tempData.forEach(player =>{
        let name = firstName + " " + lastName
        if(player.name === name){
            samePlayer = true
        }
    })
    if(firstName == ""||lastName == ""||classical == ""||rapid == ""||blitz == ""||samePlayer){
        let invalid = document.getElementById("invalidPlayer")
        invalid.classList.remove("is-hidden")
        let valid = document.getElementById("validPlayer")
        valid.classList.add("is-hidden")
    }else{
        let valid = document.getElementById("validPlayer")
        valid.classList.remove("is-hidden")
        let invalid = document.getElementById("invalidPlayer")
        invalid.classList.add("is-hidden")
        let id = tempData[tempData.length -1].id;
        let rank = 0;
        parseInt(id)
        id++;
        let finID = id.toString();
        tempData.push({
            name: name,
            id: finID,
            classicalRating: classical,
            rapidRating: rapid,
            blitzRating: blitz,
            games: []
        });
        let playersString = JSON.stringify(tempData);
        localStorage.setItem("data", playersString);
    }
}

function addGame(){
    let date = document.getElementById('date')
    let dateValue = date.value;
    let whitePlayerDIV = document.getElementById('whitePlayer')
    let blackPlayerDIV = document.getElementById('blackPlayer')
    let whitePlayer = whitePlayerDIV.options[whitePlayerDIV.selectedIndex].value
    let blackPlayer= blackPlayerDIV.options[blackPlayerDIV.selectedIndex].value

    let winner = ""
    if(document.getElementById('whiteWin').checked){
        winner = "1"
    }else if(document.getElementById('blackWin').checked){
        winner = "0"
    }else if(document.getElementById('stalemate').checked){
        winner = "-1"
    }

    let type = document.getElementById('type')
    let selectedValue = type.options[type.selectedIndex].value
    let gameType = "";
    if(selectedValue === "classicalType"){
        gameType = "classical"
    }else if(selectedValue === "rapidType"){
        gameType = "rapid"
    }else if(selectedValue === "blitzType"){
        gameType = "blitz"
    }

    let brilliantW = document.getElementById('brilliantW').value
    let greatW = document.getElementById('greatW').value
    let bestW = document.getElementById('bestW').value
    let excellentW = document.getElementById('excellentW').value
    let goodW = document.getElementById('goodW').value
    let bookW = document.getElementById('bookW').value
    let inaccuracyW = document.getElementById('inaccuracyW').value
    let mistakeW = document.getElementById('mistakeW').value
    let blunderW = document.getElementById('blunderW').value
    let missedW = document.getElementById('missedW').value

    let brilliantB = document.getElementById('brilliantB').value
    let greatB = document.getElementById('greatB').value
    let bestB = document.getElementById('bestB').value
    let excellentB = document.getElementById('excellentB').value
    let goodB = document.getElementById('goodB').value
    let bookB = document.getElementById('bookB').value
    let inaccuracyB = document.getElementById('inaccuracyB').value
    let mistakeB = document.getElementById('mistakeB').value
    let blunderB = document.getElementById('blunderB').value
    let missedB = document.getElementById('missedB').value

    if(brilliantW==""||greatW==""||bestW==""||excellentW==""||goodW==""||bookW==""||inaccuracyW==""||mistakeW==""||blunderW==""||missedW==""||brilliantB==""||bestB==""||greatB==""||excellentB==""||goodB==""||bookB==""||inaccuracyB==""||mistakeB==""||blunderB==""||missedB==""||gameType==""||winner==""||dateValue==""||whitePlayer==blackPlayer){
        let notif1 = document.getElementById("invalidNotif")
        notif1.classList.remove("is-hidden")
        let notif2 = document.getElementById("validNotif")
        notif2.classList.add("is-hidden")
    }else{
        let notif1 = document.getElementById("invalidNotif")
        notif1.classList.add("is-hidden")
        let notif = document.getElementById("validNotif")
        notif.classList.remove("is-hidden")
        let additive = parseInt(tempSeen[0])
        let numID = additive+1
        let gameID = numID.toString()
        tempSeen.unshift(gameID);

        tempData.forEach(element => {
            if(whitePlayer === element.name){
                element.games.push({
                    date: dateValue,
                    white: whitePlayer,
                    black: blackPlayer,
                    winner: winner,
                    brilliantW: brilliantW,
                    greatW: greatW,
                    bestW: bestW,
                    excellentW: excellentW,
                    goodW: goodW,
                    bookW: bookW,
                    inaccuracyW: inaccuracyW,
                    mistakeW: mistakeW,
                    blunderW: blunderW,
                    missedW: missedW,
                    brilliantB: brilliantB,
                    greatB: greatB,
                    bestB: bestB,
                    excellentB: excellentB,
                    goodB: goodB,
                    bookB: bookB,
                    inaccuracyB: inaccuracyB,
                    mistakeB: mistakeB,
                    blunderB: blunderB,
                    missedB: missedB,
                    type: gameType,
                    id: gameID
                })
            }else if(blackPlayer === element.name){
                element.games.push({
                    date: dateValue,
                    white: whitePlayer,
                    black: blackPlayer,
                    winner: winner,
                    brilliantW: brilliantW,
                    greatW: greatW,
                    bestW: bestW,
                    excellentW: excellentW,
                    goodW: goodW,
                    bookW: bookW,
                    inaccuracyW: inaccuracyW,
                    mistakeW: mistakeW,
                    blunderW: blunderW,
                    missedW: missedW,
                    brilliantB: brilliantB,
                    greatB: greatB,
                    bestB: bestB,
                    excellentB: excellentB,
                    goodB: goodB,
                    bookB: bookB,
                    inaccuracyB: inaccuracyB,
                    mistakeB: mistakeB,
                    blunderB: blunderB,
                    missedB: missedB,
                    type: gameType,
                    id: gameID
                })
            }
        });
        let playersString = JSON.stringify(tempData);
        localStorage.setItem("data", playersString);

        let seenString = JSON.stringify(tempSeen)
        localStorage.setItem("seen", seenString)
    }
}