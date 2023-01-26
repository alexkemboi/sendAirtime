function sendAirtime() {
  const amount = document.getElementById("amount").value;
  const phoneNumber = document.getElementById("phonenumber").value;

  const data = { amount, phoneNumber };

  fetch("http://localhost:3000/endpoint", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.parse(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const message = document.getElementById("message");
      message.innerHTML = "success";
    })
    .catch((error) => console.error(error));
}
sendAirtime();
