let data;
const textContent = document.querySelector('.text');
const image = document.querySelector('.user img');
const username = document.querySelector('.username');
const job = document.querySelector('.job');

async function fetchData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok)
            throw new Error('response was not ok');
        data = await response.json();
    }
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function loadcontent(index) {
    textContent.textContent = data[index].text;
    image.src = data[index].photo;
    username.textContent = data[index].name;
    job.textContent = data[index].position;
}

async function main() {
    let index = 0;
    await fetchData();
    loadcontent(index);
    setInterval(() => {
        index++;
        if (index === data.length) index = 0;
        loadcontent(index);



    }, 10000)


}

main();