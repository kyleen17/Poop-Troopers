document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    // Toggle hamburger menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close the menu when clicking on a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});

// JavaScript to create the instant quote popup

document.addEventListener('DOMContentLoaded', () => {
    const quoteForm = document.querySelector('.quote-form form');

    quoteForm.addEventListener('submit', (event) => {
        event.preventDefault();
        createQuotePopup();
    });
});

function createQuotePopup() {
    // Create the popup container
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');
    
    // Create the popup content
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    
    // Add content to the popup
    const message = document.createElement('h2');
    message.textContent = 'Your Quote is being Prepared!';
    
    const details = document.createElement('p');
    details.textContent = 'Thank you for requesting a quote! We will get back to you shortly. ';
    
    const signupButton = document.createElement('button');
    signupButton.textContent = 'Thank You';
    signupButton.classList.add('signup-button');
    
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.classList.add('close-button');
    
    // Append elements to popup content
    popupContent.appendChild(message);
    popupContent.appendChild(details);
    popupContent.appendChild(signupButton);
    popupContent.appendChild(closeButton);
    
    // Append content to container
    popupContainer.appendChild(popupContent);
    
    // Append container to body
    document.body.appendChild(popupContainer);

    // Add event listeners to buttons
    closeButton.addEventListener('click', () => {
        document.body.removeChild(popupContainer);
    });

    signupButton.addEventListener('click', () => {
        alert('Thank you for signing up! We will contact you soon.');
        document.body.removeChild(popupContainer);
    });
}

// CSS for the popup
const style = document.createElement('style');
style.textContent =`
    .popup-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .popup-content {
        background: #fff;
        padding: 2rem;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        max-width: 400px;
        width: 90%;
    }

    .signup-button, .close-button {
        margin-top: 1rem;
        padding: 0.75rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .signup-button {
        background-color: #1982c4;
        color: #fff;
        font-weight: bold;
    }

    .signup-button:hover {
        background-color: #0056b3;
    }

    .close-button {
        background-color: #ccc;
        color: #333;
    }

    .close-button:hover {
        background-color: #aaa;
    }
`;

document.head.appendChild(style);
document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game');
    const timerElement = document.getElementById('timer');
    const startButton = document.getElementById('start-button');
    const numPoops = 10; // Number of poops to display
    let timeLeft = 30; // Time in seconds
    let poopCount = numPoops; // Track remaining poops
    let timerInterval;

    // Start game when the button is clicked
    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        timerElement.style.display = 'block';
        startTimer();
        createPoops();
    });

    // Create poop elements
    function createPoops() {
        for (let i = 0; i < numPoops; i++) {
            const poop = document.createElement('img');
            poop.src = './images/scaredpoop.png';
            poop.alt = 'Poop';
            poop.classList.add('poop-image');
            poop.style.top = Math.random() * 80 + '%'; // Random top position
            poop.style.left = Math.random() * 80 + '%'; // Random left position
            
            // Add click event to remove poop
            poop.addEventListener('click', () => {
                gameContainer.removeChild(poop);
                poopCount--;
                if (poopCount === 0) {
                    clearInterval(timerInterval);
                    alert(`You win! Your time was ${30 - timeLeft}s.`);
                }
            });
            
            gameContainer.appendChild(poop);
        }
    }

    // Timer countdown
    function startTimer() {
        timerInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `Time Left: ${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                if (poopCount > 0) {
                    alert("Time's up! Better luck next time!");
                }
            }
        }, 1000);
    }
});

        gameContainer.appendChild(poop);

