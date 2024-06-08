document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form form');
  const formContainer = document.querySelector('.form .col:first-child');
  form.addEventListener('submit', function (event) {
      event.preventDefault();
      const confirmationMessage = `
          <div>
              <h1>Thank you for submitting your request.</h1>
              <p>Someone from our team will get in touch to confirm your appointment.</p>
          </div>
      `;
      formContainer.innerHTML = confirmationMessage;
  });
});