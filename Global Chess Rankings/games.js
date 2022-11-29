let data = JSON.parse(localStorage.getItem("data"));
let tempSeen = JSON.parse(localStorage.getItem("seen"))

createTable()

function addLink(thisGame, nameString, link){
    data.forEach(player =>{
        if(player.name === nameString){
            link.href = 'players.html?id=' + player.id;
            link.textContent = player.name
        }
    })
}

function createTable(){
    let tableBody = document.querySelector('tbody')
    let addedID = ["0"]
    data.forEach(player => {
        if(player.games.length > 0){
            for(let i = 0; i<player.games.length; i++){
                let thisGame = player.games[i]
                let flag = false;
                for(let i = 0; i<addedID.length; i++){
                    if(addedID[i] === thisGame.id){
                        flag = true;
                    }
                }
                if(!flag){
                    const row = document.createElement('tr');
                    let cell = document.createElement('td');
                    let link = document.createElement('a');

                    cell.textContent = thisGame.date
                    row.appendChild(cell)

                    cell = document.createElement('td');
                    addLink(thisGame, thisGame.white, link)
                    cell.appendChild(link);
                    row.appendChild(cell);

                    cell = document.createElement('td');
                    link = document.createElement('a');
                    addLink(thisGame, thisGame.black, link)
                    cell.appendChild(link)
                    row.appendChild(cell);

                    cell = document.createElement('td');
                    let winDisplay = ""
                    if(thisGame.winner == "1"){
                        winDisplay = "Won by White";
                    }else if(thisGame.winner == "0"){
                        winDisplay = "Won by Black";
                    }else if(thisGame.winner == "-1"){
                        winDisplay = "Stalemate"
                    }
                    cell.textContent = winDisplay;
                    row.appendChild(cell);
                    
                    cell = document.createElement('td');
                    let typeDisplay = ""
                    if(thisGame.type == "classical"){
                        typeDisplay = "Classical"
                    }else if(thisGame.type == "rapid"){
                        typeDisplay = "Rapid"
                    }else if(thisGame.type == "blitz"){
                        typeDisplay = "Blitz"
                    }
                    cell.textContent = typeDisplay;
                    row.appendChild(cell);


                    tableBody.appendChild(row);
                    addedID.unshift(thisGame.id)
                }
            }
        }
    });
}


function dateFilter(){
    let dateFromUN = document.getElementById('dateFrom').value
    let dateToUN = document.getElementById('dateTo').value

    let dateFromSlash = dateFromUN.substring(0,4) + "/" + dateFromUN.substring(5,7) + "/" + dateFromUN.substring(8)
    let dateToSlash = dateToUN.substring(0,4) + "/" + dateToUN.substring(5,7) + "/" + dateToUN.substring(8)


    let dateFrom = new Date(dateFromSlash)
    let dateTo = new Date(dateToSlash)

    let tableBody = document.getElementById('body')
    let addedID = ["0"]

    tableBody.replaceChildren();

    data.forEach(player => {
        if(player.games.length > 0){
            player.games.forEach(thisGame => {
                let currentDateSlash = thisGame.date.substring(0,4) + "/" + thisGame.date.substring(5,7) + "/" + thisGame.date.substring(8)
                let currentDate = new Date(currentDateSlash)
                if(currentDate>=dateFrom){
                    if(currentDate<=dateTo){
                        let flag = false;
                        for(let i = 0; i<addedID.length; i++){
                            if(addedID[i] === thisGame.id){
                                flag = true;
                            }
                        }
                        if(!flag){
                            const row = document.createElement('tr');
                            let cell = document.createElement('td');
                            let link = document.createElement('a');

                            cell.textContent = thisGame.date;
                            row.appendChild(cell)

                            cell = document.createElement('td');
                            addLink(thisGame, thisGame.white, link)
                            cell.appendChild(link);
                            row.appendChild(cell);

                            cell = document.createElement('td');
                            link = document.createElement('a');
                            addLink(thisGame, thisGame.black, link)
                            cell.appendChild(link)
                            row.appendChild(cell);

                            cell = document.createElement('td');
                            let winDisplay = ""
                            if(thisGame.winner == "1"){
                                winDisplay = "Won by White";
                            }else if(thisGame.winner == "0"){
                                winDisplay = "Won by Black";
                            }else if(thisGame.winner == "-1"){
                                winDisplay = "Stalemate"
                            }
                            cell.textContent = winDisplay;
                            row.appendChild(cell);
                            
                            cell = document.createElement('td');
                            let typeDisplay = ""
                            if(thisGame.type == "classical"){
                                typeDisplay = "Classical"
                            }else if(thisGame.type == "rapid"){
                                typeDisplay = "Rapid"
                            }else if(thisGame.type == "blitz"){
                                typeDisplay = "Blitz"
                            }
                            cell.textContent = typeDisplay;
                            row.appendChild(cell);
                            tableBody.appendChild(row);
                            addedID.unshift(thisGame.id)
                        }
                    }
                }
            })
        }
    });
    if(tableBody.childElementCount == 0){
        let notif = document.getElementById("invalid")
        notif.classList.remove("is-hidden")
    }else{
        let notif = document.getElementById("invalid")
        notif.classList.add("is-hidden")
    }
}