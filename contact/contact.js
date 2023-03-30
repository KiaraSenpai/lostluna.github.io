const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;
  // handle form submission here
  console.log(name, email, message);
  form.reset();
});
