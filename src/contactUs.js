function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
const form = document.querySelector('#form');
const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const message = document.querySelector('#message');

submit.addEventListener('click', async (e) => {
    e.preventDefault();


    console.log(`Name: ${fullName.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Phone: ${phone.value}`);
    console.log(`Message: ${message.value}`);
})

