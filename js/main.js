// Object constructor for job information
function Job (company, date, response, note) {
    this.company = company;
    this.date = date;
    this.response = response;
    this.note = note;
}
// Array of jobs
let jobs = [
    new Job ("Calm", "01/29/18", "Awaiting Response", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dolor suscipit maxime eum consequuntur voluptatum autem necessitatibus, vero harum quia in dolore excepturi velit non veniam omnis odit libero. Maxime!"),
    new Job ("Facebook", "01/30/18", "Awaiting response", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dolor suscipit maxime eum consequuntur voluptatum autem necessitatibus.")
]
// Uses the button onclick to take the input values and put them into the array of jobs
track = () => {
    let com = document.getElementById("inputcom").value;
    let d = document.getElementById("inputdate").value;
    let res = document.getElementById("inputres").value;
    let n = document.getElementById("inputnote").value;
    if(com, d, res, n === "") {
        alert("Please make sure the entire form is filled out. Thank you!");
    } else {
        let input = new Job (com,d,res,n);
        jobs.push(input);
        createDiv(jobs.length - 1);
    };
}
// On the window load a for loop goes through the job array and calls the createDiv function
window.onload = function load() {
    for(i = 0; i < jobs.length; i++) {
        createDiv(i);
    }
}
// The createDiv function creates a new div for the job input information and displays it on the page
createDiv = (newdiv) => {
    const jobscol = document.getElementById("jobscol");

    const div = document.createElement("div");
    div.className = "jobdiv";
    jobscol.appendChild(div);

    const h1 = document.createElement("h1");
    h1.textContent = jobs[newdiv].company;
    div.appendChild(h1);

    const p = document.createElement("p");
    p.className = "date"
    p.textContent = jobs[newdiv].date;
    div.appendChild(p);

    const p2 = document.createElement("p");
    p2.className = "response"
    p2.textContent = jobs[newdiv].response;
    div.appendChild(p2);

    const p3 = document.createElement("p");
    p3.className = "notes"
    p3.textContent = jobs[newdiv].note;
    div.appendChild(p3);
}

