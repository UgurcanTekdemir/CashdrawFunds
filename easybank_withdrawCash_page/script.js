
let currentBalance = 1000;


const balanceElement = document.getElementById('balance');
const withdrawInput = document.getElementById('withdraw-amount');
const withdrawForm = document.getElementById('withdraw-form');
const messageBox = document.getElementById('message-box');


withdrawForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const withdrawAmount = parseFloat(withdrawInput.value);

    
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        showMessage('Please enter a valid amount!', 'error');
        return;
    }

  
    if (withdrawAmount > currentBalance) {
        showMessage('Insufficient balance!', 'error');
        return;
    }

    
    currentBalance -= withdrawAmount;
    balanceElement.textContent = currentBalance;
    showMessage(`You have successfully withdrawn ${withdrawAmount} USD!`, 'success');
    withdrawInput.value = ''; 
});


function showMessage(message, type) {
    messageBox.textContent = message;
    messageBox.className = `message-box ${type}`;
    messageBox.style.display = 'block';
}
