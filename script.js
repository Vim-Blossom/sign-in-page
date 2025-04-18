// DOM Elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const saveLoginCheckbox = document.getElementById('saveLogin');

// Form submission handler
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const saveLogin = saveLoginCheckbox.checked;
    
    // Basic validation
    if (!email || !password) {
        showError('Please fill in all fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        showError('Please enter a valid email address');
        return;
    }
    
    // Simulate login API call
    simulateLogin(email, password, saveLogin);
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show error message
function showError(message) {
    // Remove any existing error messages
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Create and show new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ff4444';
    errorDiv.style.marginBottom = '15px';
    errorDiv.style.fontSize = '14px';
    errorDiv.textContent = message;
    
    // Insert error before the form
    loginForm.insertBefore(errorDiv, loginForm.firstChild);
    
    // Remove error after 3 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Simulate login API call
function simulateLogin(email, password, saveLogin) {
    // Show loading state
    const loginButton = loginForm.querySelector('button[type="submit"]');
    const originalText = loginButton.textContent;
    loginButton.textContent = 'Logging in...';
    loginButton.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Reset button state
        loginButton.textContent = originalText;
        loginButton.disabled = false;
        
        // For demo purposes, always show success
        // In real application, this would be handled by your authentication system
        showSuccess();
    }, 1500);
}

// Show success message and redirect
function showSuccess() {
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.color = '#4CAF50';
    successDiv.style.marginBottom = '15px';
    successDiv.style.fontSize = '14px';
    successDiv.textContent = 'Login successful! Redirecting...';
    
    // Insert success message before the form
    loginForm.insertBefore(successDiv, loginForm.firstChild);
    
    // Simulate redirect after 2 seconds
    setTimeout(() => {
        // In real application, redirect to dashboard or home page
        alert('Login successful! In a real application, you would be redirected to the dashboard.');
        successDiv.remove();
    }, 2000);
}

// Add input focus effects
const inputs = document.querySelectorAll('.form-group input');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'translateY(-5px)';
        input.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'translateY(0)';
        input.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
}); 