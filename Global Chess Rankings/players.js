function start() {
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    let params = (new URL(document.location)).searchParams;
    const playerPre = data.filter(player => player.id == params.get('id'));
    const player = playerPre[0]

    playerIdentificationInside.innerText = player.name
    let classification = "";
    if(parseInt(player.classicalRating) > 2700){
        classification = "Super Grandmaster"
    }else if(parseInt(player.classicalRating) > 2500){
        classification = "Grandmaster"
    }else if(parseInt(player.classicalRating) > 2400){
        classification = "International Master"
    }else if(parseInt(player.classicalRating) > 2300){
        classification = "Master"
    }else if(parseInt(player.classicalRating) > 2000){
        classification = "Candidate Master"
    }else if(parseInt(player.classicalRating) > 1500){
        classification = "Experienced Player"
    }else if(parseInt(player.classicalRating) > 1000){
        classification = "Intermediate Player"
    }else if(parseInt(player.classicalRating) > 500){
        classification = "Beginner Player"
    }else if(parseInt(player.classicalRating) > 0){
        classification = "Bad Player"
    }
    playerSubtitle.innerText = classification
    classicalTitle.innerText = player.classicalRating
    rapidTitle.innerText = player.rapidRating
    blitzTitle.innerText = player.blitzRating

    let boxDiv = document.getElementById('boxDiv')

    if(player.games.length === 0){
        let notif = document.createElement('div')
        notif.classList.add("notification")
        notif.classList.add("is-primary")
        notif.classList.add("is-light")
        notif.classList.add("container")
        notif.classList.add("is-fullhd")
        notif.classList.add("m-2")
        notif.textContent = "There are no available games to display"
        boxDiv.appendChild(notif)
    }else{
        player.games.forEach(thisGame => {
            let thisColumn = document.createElement('div')
            thisColumn.classList.add("column")
            thisColumn.classList.add("is-half")

            let thisCard = document.createElement('div')
            thisCard.classList.add("card")

            let thisCardHeader = document.createElement('div')
            thisCardHeader.classList.add("card-header")

            let headerText = document.createElement('p')
            headerText.classList.add("card-header-title")
            headerText.classList.add("is-flex")
            headerText.classList.add("is-justify-content-center")
            headerText.classList.add("is-size-5")
            headerText.textContent = thisGame.white + " (White) || " + thisGame.black + " (Black)"

            thisCardHeader.appendChild(headerText);
            thisCard.appendChild(thisCardHeader)

            let cardContent = document.createElement('div')
            cardContent.classList.add("card-content")

            let infoColumns = document.createElement('div')
            infoColumns.classList.add("columns")
            infoColumns.classList.add("has-text-centered")

            let dateColumn = document.createElement('div')
            dateColumn.classList.add("column")
            dateColumn.classList.add("pt-1")
            dateColumn.classList.add("pb-1")
            dateColumn.classList.add("is-flex")
            dateColumn.classList.add("is-justify-content-center")
            dateColumn.classList.add("is-align-items-center")
            let resultColumn = document.createElement('div')
            resultColumn.classList.add("column")
            resultColumn.classList.add("pt-1")
            resultColumn.classList.add("pb-1")
            resultColumn.classList.add("is-flex")
            resultColumn.classList.add("is-justify-content-center")
            dateColumn.classList.add("is-align-items-center")
            let typeColumn = document.createElement('div')
            typeColumn.classList.add("column")
            typeColumn.classList.add("pt-1")
            typeColumn.classList.add("pb-1")
            typeColumn.classList.add("is-flex")
            typeColumn.classList.add("is-justify-content-center")
            dateColumn.classList.add("is-align-items-center")

            thisDate = thisGame.date
            thisYear = thisDate.substring(5,7);
            finalDis = dateConvert(thisYear) + " " +thisDate.substring(8) + ", " + thisDate.substring(0,4)
            dateColumn.textContent = finalDis

            if(thisGame.winner === "1"){
                let spanA = document.createElement("span")
                spanA.classList.add("icon")
                let icon = document.createElement("i")
                icon.classList.add("fa-regular")
                icon.classList.add("fa-flag")
                spanA.appendChild(icon)
                resultColumn.appendChild(spanA)

                let p = document.createElement("p")
                p.textContent = " White Victory "
                resultColumn.appendChild(p)

                let spanB = document.createElement("span")
                spanB.classList.add("icon")
                let iconB = document.createElement("i")
                iconB.classList.add("fa-regular")
                iconB.classList.add("fa-flag")
                spanB.appendChild(iconB)
                resultColumn.appendChild(spanB)
            }else if(thisGame.winner === "0"){
                let spanA = document.createElement("span")
                spanA.classList.add("icon")
                let icon = document.createElement("i")
                icon.classList.add("fa-solid")
                icon.classList.add("fa-flag")
                spanA.appendChild(icon)
                resultColumn.appendChild(spanA)

                let p = document.createElement("p")
                p.textContent = " Black Victory "
                resultColumn.appendChild(p)

                let spanB = document.createElement("span")
                spanB.classList.add("icon")
                let iconB = document.createElement("i")
                iconB.classList.add("fa-solid")
                iconB.classList.add("fa-flag")
                spanB.appendChild(iconB)
                resultColumn.appendChild(spanB)
            }else if(thisGame.winner === "-1"){
                let spanA = document.createElement("span")
                spanA.classList.add("icon")
                let icon = document.createElement("i")
                icon.classList.add("fa-solid")
                icon.classList.add("fa-grip-lines")
                spanA.appendChild(icon)
                resultColumn.appendChild(spanA)

                let p = document.createElement("p")
                p.textContent = " Stalemate "
                resultColumn.appendChild(p)

                let spanB = document.createElement("span")
                spanB.classList.add("icon")
                let iconB = document.createElement("i")
                iconB.classList.add("fa-solid")
                iconB.classList.add("fa-grip-lines")
                spanB.appendChild(iconB)
                resultColumn.appendChild(spanB)
            }
            
            if(thisGame.type === "classical"){
                let spanA = document.createElement("span")
                spanA.classList.add("icon")
                let icon = document.createElement("i")
                icon.classList.add("fa-solid")
                icon.classList.add("fa-chess-board")
                spanA.appendChild(icon)
                typeColumn.appendChild(spanA)

                let p = document.createElement("p")
                p.textContent = " Classical Game "
                typeColumn.appendChild(p)

                let spanB = document.createElement("span")
                spanB.classList.add("icon")
                let iconB = document.createElement("i")
                iconB.classList.add("fa-solid")
                iconB.classList.add("fa-chess-board")
                spanB.appendChild(iconB)
                typeColumn.appendChild(spanB)
            }else if(thisGame.type === "rapid"){
                let spanA = document.createElement("span")
                spanA.classList.add("icon")
                let icon = document.createElement("i")
                icon.classList.add("fa-regular")
                icon.classList.add("fa-clock")
                spanA.appendChild(icon)
                typeColumn.appendChild(spanA)

                let p = document.createElement("p")
                p.textContent = " Rapid Game "
                typeColumn.appendChild(p)

                let spanB = document.createElement("span")
                spanB.classList.add("icon")
                let iconB = document.createElement("i")
                iconB.classList.add("fa-regular")
                iconB.classList.add("fa-clock")
                spanB.appendChild(iconB)
                typeColumn.appendChild(spanB)
            }else if(thisGame.type === "blitz"){
                let spanA = document.createElement("span")
                spanA.classList.add("icon")
                let icon = document.createElement("i")
                icon.classList.add("fa-solid")
                icon.classList.add("fa-bolt")
                spanA.appendChild(icon)
                typeColumn.appendChild(spanA)

                let p = document.createElement("p")
                p.textContent = " Blitz Game "
                typeColumn.appendChild(p)

                let spanB = document.createElement("span")
                spanB.classList.add("icon")
                let iconB = document.createElement("i")
                iconB.classList.add("fa-solid")
                iconB.classList.add("fa-bolt")
                spanB.appendChild(iconB)
                typeColumn.appendChild(spanB)
            }

            infoColumns.appendChild(dateColumn)
            infoColumns.appendChild(resultColumn)
            infoColumns.appendChild(typeColumn)

            let table = document.createElement("table")
            table.classList.add("table")
            table.classList.add("is-fullwidth")

            let thead = document.createElement("thead")

            let thW = document.createElement("th")
            thW.textContent = "White"
            thW.classList.add("has-text-right")

            let thM = document.createElement("th")
            thM.textContent = "Type"
            thM.classList.add("is-flex")
            thM.classList.add("is-justify-content-center")

            let thB = document.createElement("th")
            thB.textContent = "Black"
            thB.classList.add("has-text-left")

            let tbody = document.createElement("tbody")

            tbody.appendChild(createRow(createCell(thisGame.brilliantW, "right"),createCell("Brilliant", "mid"),createCell(thisGame.brilliantB, "left")))

            tbody.appendChild(createRow(createCell(thisGame.greatW, "right"),createCell("Great", "mid"),createCell(thisGame.greatB, "left")))

            tbody.appendChild(createRow(createCell(thisGame.bestW, "right"),createCell("Best", "mid"),createCell(thisGame.bestB, "left")))

            tbody.appendChild(createRow(createCell(thisGame.excellentW, "right"),createCell("Excellent", "mid"),createCell(thisGame.excellentB, "left")))

            tbody.appendChild(createRow(createCell(thisGame.goodW, "right"),createCell("Good", "mid"),createCell(thisGame.goodB, "left")))

            tbody.appendChild(createRow(createCell(thisGame.inaccuracyW, "right"),createCell("Inaccuracies", "mid"),createCell(thisGame.inaccuracyB, "left")))

            tbody.appendChild(createRow(createCell(thisGame.mistakeW, "right"),createCell("Mistakes", "mid"),createCell(thisGame.mistakeB, "left")))

            tbody.appendChild(createRow(createCell(thisGame.blunderW, "right"),createCell("Blunder", "mid"),createCell(thisGame.blunderB, "left")))

            tbody.appendChild(createRow(createCell(thisGame.missedW, "right"),createCell("Missed Wins", "mid"),createCell(thisGame.missedB, "left")))

            thead.appendChild(thW)
            thead.appendChild(thM)
            thead.appendChild(thB)
            table.appendChild(thead)
            table.appendChild(tbody)

            cardContent.appendChild(infoColumns)
            cardContent.appendChild(table)
            thisCard.appendChild(cardContent)

            thisColumn.appendChild(thisCard)
            boxDiv.appendChild(thisColumn)
        });
    }
}

function createRow(white, middle, right){
    let tr = document.createElement("tr")
    tr.appendChild(white)
    tr.appendChild(middle)
    tr.appendChild(right)
    return tr;
}

function createCell(text, align){
    let th = document.createElement("th")
    th.classList.add("has-text-weight-normal")
    if(align === "left"){
        th.classList.add("has-text-left")
    }else if(align === "right"){
        th.classList.add("has-text-right")
    }else if(align === "mid"){
        th.classList.add("is-flex")
        th.classList.add("is-justify-content-center")
    }
    th.textContent = text
    return th
}

function dateConvert(num){
    if(num === "01"){
        return "January"
    }else if(num === "02"){
        return "February"
    }else if(num === "03"){
        return "March"
    }else if(num === "04"){
        return "April"
    }else if(num === "05"){
        return "May"
    }else if(num === "06"){
        return "June"
    }else if(num === "07"){
        return "July"
    }else if(num === "08"){
        return "August"
    }else if(num === "09"){
        return "September"
    }else if(num === "10"){
        return "October"
    }else if(num === "11"){
        return "November"
    }else if(num === "12"){
        return "December"
    }
}