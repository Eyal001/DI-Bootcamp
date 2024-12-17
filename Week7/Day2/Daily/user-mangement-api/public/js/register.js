function checkForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  document.getElementById("submitBtn").disabled =
    !username || !password || !name || !lastName || !email;
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
  const name = document.getElementById("name").value;
  const last_name = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;

  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        name,
        last_name,
        email,
      }),
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
