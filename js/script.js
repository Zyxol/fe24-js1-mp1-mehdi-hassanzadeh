for(let i=5; i>0; i--) {
    const header = document.createElement('h' + i);
    document.body.appendChild(header);
    header.textContent = `Rad ${5-i+1}`;

    header.style.backgroundColor = `hsl(${120+20*(5-i+1)}, 90%, 85%)`;
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

    for (let j=0; j<9; j++) {
        const p = document.createElement('p');
        div3.appendChild(p);
        p.textContent = `P ${j+1}`;
        p.style.margin = '0px 0px';
        p.style.border = '1px solid black';
        p.style.backgroundColor = 'white';
    }
}