
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const saveLoginCheckbox = document.getElementById('saveLogin');


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
   
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const saveLogin = saveLoginCheckbox.checked;
    
  
    if (!email || !password) {
        showError('Please fill in all fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        showError('Please enter a valid email address');
        return;
    }
    
 
    simulateLogin(email, password, saveLogin);
});


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function showError(message) {
    
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
   
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ff4444';
    errorDiv.style.marginBottom = '15px';
    errorDiv.style.fontSize = '14px';
    errorDiv.textContent = message;
    
   
    loginForm.insertBefore(errorDiv, loginForm.firstChild);
    
  
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}


function simulateLogin(email, password, saveLogin) {
   
    const loginButton = loginForm.querySelector('button[type="submit"]');
    const originalText = loginButton.textContent;
    loginButton.textContent = 'Logging in...';
    loginButton.disabled = true;
    
   
    setTimeout(() => {
       
        loginButton.textContent = originalText;
        loginButton.disabled = false;
        
       
        showSuccess();
    }, 1500);
}


function showSuccess() {
   
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.color = '#4CAF50';
    successDiv.style.marginBottom = '15px';
    successDiv.style.fontSize = '14px';
    successDiv.textContent = 'Login successful! Redirecting...';
    
    
    loginForm.insertBefore(successDiv, loginForm.firstChild);
    
   
    setTimeout(() => {
        
        alert('Login successful! In a real application, you would be redirected to the dashboard.');
        successDiv.remove();
    }, 2000);
}


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