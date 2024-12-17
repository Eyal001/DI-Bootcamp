function checkForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  document.getElementById("submitBtn").disabled = !username || !password;
}

function showMessage(message, type) {
  const messageContainer = document.getElementById("messageContainer");
  messageContainer.innerHTML = message;
  messageContainer.className = type;
}

async function submitForm(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      showMessage(data.message, "success");
    } else {
      showMessage(data.message, "error");
    }
  } catch (error) {
    showMessage("An error occurred, please try again.", "error");
  }
}
