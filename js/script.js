for(let i=5; i>0; i--) {
    const header = document.createElement('h' + i);
    document.body.appendChild(header);
    header.textContent = `Rad ${5-i+1}`;

    header.style.backgroundColor = `hsl(${100+20*(5-i+1)}, 90%, 85%)`;
    header.style.color = 'hsl(240, 90%, 70%)';

    header.classList.add('row');
    header.style.margin = `${5*(5-i+1)}px 0px`;
}

const div = document.createElement('div');
document.body.appendChild(div);
div.style.border = '2px solid black';

div.classList.add('container');

for (let i=0; i<3; i++) {
    const div2 = document.createElement('div');
    div.appendChild(div2);
    div2.style.backgroundColor = 'hsl(240, 71%, 80%)';
    div2.style.margin = '50px';

    const div3 = document.createElement('div');
    div2.appendChild(div3);
    div3.style.margin = '10px';

    for (let j=0; j<10; j++) {
        const p = document.createElement('p');
        div3.appendChild(p);
        p.textContent = `P ${j+1}`;
        p.style.width = '50px';
        p.style.margin = '0px 0px';
        p.style.backgroundColor = 'white';
    }

    div2.classList.add(`div${i+1}`);
}

const divEL1 = document.querySelector('.div1');
const divEL2 = document.querySelector('.div2');
const divEL3 = document.querySelector('.div3');

const pElements1 = divEL1.querySelectorAll('p');
for (let i = 0; i < pElements1.length && i < 10; i++) {
    pElements1[i].textContent = `${i}`;

    if (i === 4) {
        pElements1[i].style.backgroundColor = 'hsl(240, 71%, 80%)';
        pElements1[i].style.color = 'white';
    } else if (i % 2 === 0) {
        pElements1[i].style.backgroundColor = 'black';
        pElements1[i].style.color = 'white';
    }
}

const pElements2 = divEL2.querySelectorAll('p');
for (let i = 0; i < pElements2.length && i < 10; i++) {
    pElements2[i].textContent = `${9-i}`;

    if (i === 1) {
        pElements2[i].style.backgroundColor = 'hsl(240, 71%, 80%)';
        pElements2[i].style.color = 'white';
    } else if (i % 2 === 1) {
        pElements2[i].style.backgroundColor = 'black';
        pElements2[i].style.color = 'white';
    }
    pElements2[i].style.textAlign = 'center';
}

const string = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

const pElements3 = divEL3.querySelectorAll('p');
for (let i = 0; i<pElements3.length && i<10; i++) {
    pElements3[i].textContent = string[i];

    if (i === 5) {
        pElements3[i].style.backgroundColor = 'hsl(240, 71%, 80%)';
        pElements3[i].style.color = 'black';
    } else if (i % 2 === 0) {
        pElements3[i].style.backgroundColor = 'black';
        pElements3[i].style.color = 'white';
    }
    pElements3[i].style.textAlign = 'right';
}