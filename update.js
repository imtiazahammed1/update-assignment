// functioned number 1
//  Expenses and Balance Function

function updatevalue(valueRemaining) {
    const incomeInput = document.getElementById('income-input');
    const incomeValue = incomeInput.value;
    const product = parseFloat(incomeValue);
    if (valueRemaining == true) {
        const product = parseFloat(incomeValue);
        incomeInput.value = '';
    }
    else {
        const product = parseFloat(incomeValue);
    }
    console.log(product);
}




//  Function calling number 1
document.getElementById('calcaulate-total').addEventListener('click', function () {
    updatevalue(false);
});
//  Function calling number 2
document.getElementById('save-total').addEventListener('click', function () {
    updatevalue(true);

});