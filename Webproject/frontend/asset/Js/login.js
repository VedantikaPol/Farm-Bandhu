// This script handles the toggle functionality and a simple role-based redirect.
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.login-container');
    
    if (container) {
        const registerBtn = document.querySelector('.register-btn');
        const loginBtn = document.querySelector('.login-btn');
        const loginForm = document.querySelector('.form-box.login form');
        const usernameInput = document.querySelector('.form-box.login .input-box input[type="text"]');

        if (registerBtn) {
            registerBtn.addEventListener('click', () => {
                container.classList.add('active');
            });
        }

        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                container.classList.remove('active');
            });
        }

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault(); 
                const username = usernameInput.value.toLowerCase().trim();

                if (username === 'farmer') {
                    alert('Login successful! Redirecting to Farmer Dashboard...');
                    window.location.href = 'farmer_dashboard.html';
                } else if (username === 'buyer') {
                    alert('Login successful! Redirecting to Buyer Dashboard...');
                    window.location.href = 'buyer_dashboard.html';
                } else if (username === 'equipment owner') {
                    alert('Login successful! Redirecting to Equipment Owner Dashboard...');
                    window.location.href = 'equipment_owner_dashboard.html';
                } else if (username === 'transporter') {
                    alert('Login successful! Redirecting to Transporter Dashboard...');
                    window.location.href = 'transporter_dashboard.html';
                } else {
                    alert('Login successful! Dashboard for this role is not yet created. Try: "farmer", "buyer", "equipment owner", or "transporter"');
                }
            });
        }
    }
});
