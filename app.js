async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const responseDiv = document.getElementById('response');

    const response = await fetch('https://api-inference.huggingface.co/models/gpt-3.5', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const responseDiv = document.getElementById('response');

    const response = await fetch('https://api-inference.huggingface.co/models/gpt-3.5', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer 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`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inputs: userInput
        })
    });

    const data = await response.json();
    const answer = data[0]?.generated_text || "Sorry, I couldn't process that.";
    responseDiv.innerHTML = `<p>${answer}</p>`;
}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inputs: userInput
        })
    });

    const data = await response.json();
    const answer = data[0]?.generated_text || "Sorry, I couldn't process that.";
    responseDiv.innerHTML = `<p>${answer}</p>`;
}