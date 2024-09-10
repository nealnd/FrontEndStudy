const joke = document.getElementById('joke');
const button = document.getElementById('btn');


getjoke();
button.addEventListener('click', getjoke);





async function getjoke() {

    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    joke.innerHTML = data.joke
}

