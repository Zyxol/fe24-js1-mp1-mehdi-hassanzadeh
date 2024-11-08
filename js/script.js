for(let i=5; i>0; i--) {
    const header = document.createElement('h' + i);
    header.textContent = `Rad ${5-i+1}`;
    document.body.appendChild(header);

    header.style.backgroundColor = `hsl(${120+20*(5-i+1)}, 90%, 85%)`;
    console.log(120+20*(5-i+1));
    header.style.color = 'hsl(240, 90%, 70%)';

    header.classList.add('row');
    header.style.margin = `${5*(5-i+1)}px 0px`;
}