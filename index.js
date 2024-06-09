document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form form");
  const formContainer = document.querySelector(".form .col:first-child");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isCouplesMassage = document.getElementById("couplesMassage").checked;

    if (isCouplesMassage) {
      const couplesForm = `
                <form id="couplesForm">
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Your Name" required>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Your Email" required>
                    </div>
                    <div class="mb-3">
                        <input type="tel" class="form-control" placeholder="Your Phone number" required>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Partner's Name" required>
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>
            `;
      formContainer.innerHTML = couplesForm;

      document
        .getElementById("couplesForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          showConfirmation();
        });
    } else {
      const infoForm = `
                <form id="infoForm">
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Name" required>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Email" required>
                    </div>
                    <div class="mb-3">
                        <input type="tel" class="form-control" placeholder="Phone number" required>
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>
            `;
      formContainer.innerHTML = infoForm;

      document
        .getElementById("infoForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          showConfirmation();
        });
    }
  });

  function showConfirmation() {
    const confirmationMessage = `
            <div>
                <h1>Thank you for submitting your request.</h1>
                <p>Someone from our team will get in touch to confirm your appointment.</p>
            </div>
        `;
    formContainer.innerHTML = confirmationMessage;
  }
});
