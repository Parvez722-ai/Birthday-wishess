// Wait until the page content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Balloons and sprinkle animations
    const balloons = document.querySelector('.balloons');
    setInterval(() => {
        // Balloon animation here (you can customize it)
    }, 500);

    // Typing effect for the birthday message
    const typingMessage = document.querySelector('.typing-message');
    setTimeout(() => {
        typingMessage.innerHTML = "I love you, Nishat, and I am so happy to be with you!";
    }, 2000); // Delay for typing animation

    // Blow Candle Button Action
    const blowButton = document.querySelector('.blow-button');
    blowButton.addEventListener('click', () => {
        alert('The candle is blown! 🎂✨');
    });

    // Crumbled paper interactions
    const messages = [
        "I love you",
        "We will last forever",
        "I'll never make you upset",
        "I'll be there for you in every low and high",
        "I'll always take care of your mood swing",
        "I'll help you in every work",
        "And again, I love you"
    ];
    
    const crumbleContainer = document.querySelector('.crumble-paper-container');
    messages.forEach((message, index) => {
        const paper = document.createElement('div');
        paper.classList.add('crumble-paper');
        paper.innerText = message;
        crumbleContainer.appendChild(paper);
    });

    // Next Button to move to next page
    const nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', () => {
        window.location.href = "https://your-next-page-link.com"; // Redirect to next page
    });
});