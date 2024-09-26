// class exam {
//     constructor(question, option1,option2,option3,option4,answer) {
//         this.question = question;
//         this.option1 = option1;
//         this.option2 = option2;
//         this.option3 = option3;
//         this.option4 = option4;
//         this.answer = answer;
//     }

// };

// let subject1 = new exam("Which language runs in a web browser?", "Java", "C", "Python", "JavaScript","option4")

// let subject2 = new exam('What does CSS stand for?', 'Central Style Sheets', 'Cascading Style Sheets',
//     'Cascading Simple Sheets', 'Cascading Simple Sheets', 'option1'
// )

// let subject3 = new exam('What does HTML stand for?', 'Hypertext Markup Language', 'Hypertext Markdown Language',
//     'Hyperloop Machine Language', 'Helicopters Terminals Motorboats Lamborginis', 'option1'
// )

// let subject4 = new exam('What year was JavaScript launched?', '1996', '1995', '1994', 'none of the above', 'option2')



// const datas = [subject1, subject2, subject3, subject4];
// const jsonString = JSON.stringify(datas, null, 2);


// const blob = new Blob([jsonString], { type: "application/json" });


// const url = URL.createObjectURL(blob);


// const a = document.createElement("a");
// a.href = url;
// a.download = "data.json";


// a.click();


// URL.revokeObjectURL(url);
