function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

let projectTitle;
let projectDescription;

const getData = async () => {
  for (let i = 0; i <= 3; i++) {
    const id = i;
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id );
    const data = await response.json();
    console.log(data);
    projectTitle = data.title;
    projectDescription = data.body;
    getProject(projectTitle, projectDescription, id);
  }
};
getData();
const getProject = async (name, text, id) => {
  document.querySelector(`#cardText${id}`).innerHTML = 
  `<h3>${name}</h3> <h5>${text}</h5>  <a href="./projects.html">Learn More</a>`;
};