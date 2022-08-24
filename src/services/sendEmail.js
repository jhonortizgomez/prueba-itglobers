export function sendEmailService(email) {
  console.log("enviando email", email);
  const form = document.getElementById("formEmail");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const response = await fetch(e.target.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      alert("Felicitaciones! ya estas suscrito");
      form.reset();
    }
  }
  form.addEventListener("submit", handleSubmit);
}
