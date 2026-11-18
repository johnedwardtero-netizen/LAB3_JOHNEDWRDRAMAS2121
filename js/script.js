const message = document.getElementById("message");
const messageButton = document.getElementById("messageButton");

messageButton.addEventListener("click", function () {
  message.textContent = "My website is ready for deployment!";
});