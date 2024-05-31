document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = document.getElementById('welcome-message');
    const userName = 'Harfi'; // This could be dynamically set
    welcomeMessage.textContent = `Hi ${userName}, Welcome To Website`;

    const messageForm = document.getElementById('message-form');
    messageForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const birthDate = document.getElementById('birth-date').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('message').value;
        
        const formOutput = document.getElementById('form-output');
        formOutput.innerHTML = `
            <p>Nama: ${name}</p>
            <p>Tanggal Lahir: ${birthDate}</p>
            <p>Jenis Kelamin: ${gender}</p>
            <p>Pesan: ${message}</p>
        `;
    });

    const chatboxForm = document.getElementById('chatbox-form');
    const chatboxMessages = document.getElementById('chatbox-messages');
    chatboxForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const chatInput = document.getElementById('chatbox-input');
        const newMessage = chatInput.value;
        if (newMessage.trim() !== '') {
            const messageElement = document.createElement('p');
            messageElement.textContent = newMessage;
            chatboxMessages.appendChild(messageElement);
            chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
            chatInput.value = '';
        }
    });
});
