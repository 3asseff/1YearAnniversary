function showMessage(message) {
  const popup = document.getElementById("popup");
  const messageText = document.getElementById("messageText");
  messageText.textContent = message;
  popup.style.display = "flex";
}

function closeMessage() {
  document.getElementById("popup").style.display = "none";
}
