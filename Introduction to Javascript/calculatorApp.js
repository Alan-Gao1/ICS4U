const gridContainer = document.querySelector('.grid-container');
const keypadNumbers = [
    [7, 8, 9, '/'],
    [4, 5, 6, '*'],
    [1, 2, 3, '+'],
    [0, '.', '-'],
    ['CLS', '=']
];

keypadNumbers.forEach(row => {
    const rowElement = document.createElement('div');
    row.forEach(element => {
        const buttonElement = document.createElement('button')
        handleClick = () => {
            const toAdd = buttonElement.textContent;
            if(toAdd === "CLS"){
                field.innerHTML = "";
            }else if(toAdd != "="){
                field.innerHTML += toAdd;
            }else{
                if(field.innerHTML != ""){
                    try {
                        field.innerHTML = eval(field.innerHTML);
                    } catch (error) {
                        field.innerHTML = "ERROR";
                    }
                }else{
                    field.innerHTML = "ERROR";
                }
            }
        }
        buttonElement.textContent = element;
        buttonElement.setAttribute('id', element);
        buttonElement.setAttribute('class', 'key')
        buttonElement.addEventListener('click', handleClick)
        const gridRow = document.querySelector('div')
        if(buttonElement.textContent == "0" || buttonElement.textContent == "CLS"){
            buttonElement.classList.add('wide-button-1');
        }else if(buttonElement.textContent == "="){
            buttonElement.classList.add('wide-button-2');
        }
        gridRow.append(buttonElement);
    })
});

const field = document.createElement('div');
field.style.borderWidth = '1px';
field.classList.add('result');
field.classList.add('key');
gridContainer.append(field);