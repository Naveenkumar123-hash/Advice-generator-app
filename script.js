const adviceText = document.getElementById("advice-text");
const adviceId = document.getElementById("advice-id");
const adviceButton = document.getElementById("advice-button");

document.getElementById('advice-button').addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        document.getElementById('advice-number').innerText = `ADVICE #${data.slip.id}`;
        document.getElementById('advice-text').innerText = `"${data.slip.advice}"`;
      })
      .catch(error => console.error('Error fetching advice:', error));
  });
  
