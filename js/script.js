const exceedMessage = document.getElementById('exceed');
exceedMessage.style.display = 'none';
const supplyexceedMessage = document.getElementById('supply-exceed');
supplyexceedMessage.style.display = 'none';

function casehandler(name, input) {
    if (isNaN(input) == true) {
        alert(name + " field cannot be string");
        return false;

    } else if (input < 0) {
        alert(name + " field cannot be less than Zero(0)");
        return false;
    } else
        return true;
}

// value parsing from html 

function parsingValue(input) {
    const inputField = document.getElementById(input + '-field');
    const inputValue = parseFloat(inputField.value);
    const type = casehandler(input, inputValue);
    if (type == true) {
        return inputValue;
    } else
        return 0;

}

// inner text parsing and setting

function inner_text(id, value) {
    const innertext = document.getElementById(id);
    innertext.innerText = value;

}

// Balance return after expenses
function balance() {
    const income = parsingValue('income');
    const food = parsingValue('food');
    const rent = parsingValue('rent');
    const clothes = parsingValue('clothes');
    const totalExpense = food + rent + clothes;
    const balance = income - totalExpense;
    const totalExpenseField = inner_text('total-expense', totalExpense);
    const balanceField = inner_text('balance', balance);
    return balance;
}

// event after clicking calculate button 

document.getElementById('calculate').addEventListener('click', function() {
    const newbalance = balance();
    const expenseField = document.getElementById('expense');
    if (newbalance >= 0) {
        exceedMessage.style.display = 'none';
        expenseField.style.display = 'block';
    } else {
        expenseField.style.display = 'none';
        exceedMessage.style.display = 'block';
    }
})

// event after clicking save button
document.getElementById('save').addEventListener('click', function() {
    const income = parsingValue('income');
    const save = parsingValue('save');
    const newbalance = balance();
    const savings = income * (save / 100);
    const remainingBalance = newbalance - savings;
    const savingField = inner_text('saving-amount', savings);
    const remainingBalanceField = inner_text('remaining-balance', remainingBalance);
    const expenseField = document.getElementById('saving');
    if (remainingBalance >= 0) {
        supplyexceedMessage.style.display = 'none';
        expenseField.style.display = 'block';
    } else {
        expenseField.style.display = 'none';
        supplyexceedMessage.style.display = 'block';
    }
})