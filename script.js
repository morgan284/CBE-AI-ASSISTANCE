const sendButton = document.getElementById("sendButton");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

sendButton.addEventListener("click", sendMessage);

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    userInput.value = "";

    try {
        const response = await fetch("YOUR_BACKEND_URL/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message
            })
        });

        const data = await response.json();

        chatBox.innerHTML += `<p><strong>AI:</strong> ${data.reply}</p>`;
    } catch (error) {
        chatBox.innerHTML += `<p><strong>AI:</strong> Error connecting to the server.</p>`;
    }
}
