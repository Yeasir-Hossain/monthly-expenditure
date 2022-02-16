function casehandler(input) {

}

// value parsing from html 

function parsingValue(input) {
    const inputField = document.getElementById(input + '-field');
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

// inner text parsing and setting

function inner_text(id, value) {
    const innertext = document.getElementById(id);
    innertext.innerText = value;

}

// event after clicking calculate button 

document.getElementById('calculate').addEventListener('click', function() {
    const income = parsingValue('income');
    const food = parsingValue('food');
    const rent = parsingValue('rent');
    const clothes = parsingValue('clothes');
    const totalExpense = food + rent + clothes;
    const balance = income - totalExpense;
    const totalExpenseField = inner_text('total-expense', totalExpense);
    const balanceField = inner_text('balance', balance);

})

// event after clicking save button
document.getElementById('save').addEventListener('click', function() {
    const save = parsingValue('save');

})