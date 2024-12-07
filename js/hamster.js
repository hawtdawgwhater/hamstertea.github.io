function checkAnswer() {
            let answer = prompt("WELCOME! Hamsters are forbidden from accessing this website type BOBA if you are human");
            if (answer !== "BOBA") {
                alert("Human verification failed. No hamsters allowed.");
                window.location.href = "https://www.google.com";
            } else {
                alert("Welcome to our store physical location opens 1 JAN 2025.");
            }
        }
        window.onload = checkAnswer;