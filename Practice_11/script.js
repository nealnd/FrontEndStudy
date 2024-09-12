const tip = document.getElementById('tip');
const body = document.querySelector('body');

const div1 = document.createElement('div');

const div2 = document.createElement('div');

const div3 = document.createElement('div');


document.addEventListener("keydown", (event) => {


    div1.innerHTML = `<p>event.key</p><h1>${event.key}</h1>`;

    div2.innerHTML = `<p>event.keyCode</p>
        <h1> ${event.keyCode}</h1> `;
    div3.innerHTML = `<p>event.code</p><h1>${event.code}</h1>`;

    if (tip != null) {
        tip.remove();
        body.appendChild(div1);
        body.appendChild(div2);
        body.appendChild(div3);


    }



})