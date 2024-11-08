//Creating the headers and styling them
for(let i = 1; i <= 5; i++) {
    const header = document.createElement(`h${5-i+1}`);
    document.body.appendChild(header);
    header.textContent = `Rad ${i}`;

    header.classList.add('row');

    header.style.backgroundColor = `hsl(${100+20*i}, 90%, 85%)`;
    header.style.margin = `${5*i}px 0px`;  
}

//Creating the container div with a border
const containerDiv = document.createElement('div');
document.body.appendChild(containerDiv);
containerDiv.classList.add('container');

//Array with the strings to be displayed
const string = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
//Array with the values for the text-align property
const justify = ['left', 'center', 'right'];

//Creating the 3 divs inside the container div
for (let i = 0; i < 3; i++) {
    const elementDiv = document.createElement('div');
    containerDiv.appendChild(elementDiv);
    elementDiv.classList.add('element-Div');

    //Div inside the containerDiv to apply margin
    const contentDiv = document.createElement('div');
    elementDiv.appendChild(contentDiv);
    contentDiv.style.margin = '10px';

    //Creating the 10 p elements inside the div3
    for (let j=0; j<10; j++) {
        const p = document.createElement('p');
        contentDiv.appendChild(p);
        p.classList.add('content-p');

        p.style.textAlign = justify[i];

        //Applying the correct style depending on the value of i(aka the div number)
        switch (i) {
            //Left div
            case 0: {
                p.textContent = j;
                if(j === 4) {
                    p.style.backgroundColor = 'hsl(240, 71%, 80%)';
                    p.style.color = 'white';
                }
                else if(j%2 === 0) {
                    p.style.backgroundColor = 'black';
                    p.style.color = 'white';
                }
                break;
            }
            //Center div
            case 1: {
                p.textContent = `${9-j}`;
                if(j === 1) {
                    p.style.backgroundColor = 'hsl(240, 71%, 80%)';
                    p.style.color = 'white';
                }
                else if(j%2 === 1) {
                    p.style.backgroundColor = 'black';
                    p.style.color = 'white';
                }
                break;
            }
            //Right div
            case 2: {
                p.textContent = string[j];
                if(j === 5) {
                    p.style.backgroundColor = 'hsl(240, 71%, 80%)';
                    p.style.color = 'black';
                }
                else if(j%2 === 0) {
                    p.style.backgroundColor = 'black';
                    p.style.color = 'white';
                }
                break;
            }
        }
    }
}