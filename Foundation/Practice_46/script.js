const contents = document.querySelector('.container form');

const submitBtn = document.querySelector('.submit');

let data = null;

let index = 0;
let correctNum = 0;

async function fetchData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('response was not ok');
        }


        data = await response.json();



        console.log("Data fetched and stored in the global variable:", data);

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function loadcontent(index) {
    if (!data || !data[index]) {
        console.error('Data is not available or index is out of bounds');
        return;
    }
    contents.innerHTML = `
            <h2 id="question">${data[index].question}</h2>
            <input type="radio" name="option" value="option1">
            <label for=${data[index].option1}>${data[index].option1}</label><br>
            <input type="radio" name="option" value="option2">
            <label for=${data[index].option2}>${data[index].option2}</label><br>
            <input type="radio" name="option" value="option3">
            <label for=${data[index].option3}>${data[index].option3}</label><br>
            <input type="radio" name="option" value="option4">
            <label for=${data[index].option4}>${data[index].option4}</label>

    `
}

async function main() {
    //wait the completion of fetchData;
    await fetchData();

    loadcontent(index);

    submitBtn.addEventListener('click', () => {
        if (index === data.length) {
            // index = 0;
            // correctNum = 0;
            // loadcontent(index);
            location.reload()
        }
        let ans = selectionAns();
        if (ans === data[index].answer)
            correctNum++;
        if (ans) {
            index++;
            if (index < data.length)
                loadcontent(index);
            else {
                contents.innerHTML = `
                <h2>You answered ${correctNum}/${data.length} questions correctly</h2>
            `
                submitBtn.textContent = `Reload`
            }
        }
    })

}

main();


function selectionAns() {
    const selections = contents.querySelectorAll('input');
    let ans;
    selections.forEach(select => {
        if (select.checked)
            ans = select.value;
    })

    return ans;
}

