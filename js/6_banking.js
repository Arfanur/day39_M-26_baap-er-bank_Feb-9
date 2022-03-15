// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposit button clicked');
    const depositInput = document.getElementById('deposit-input');      // input
    const newDepositAmountText = depositInput.value;                    // input text
    const newDepositAmount = parseFloat(newDepositAmountText);          // input number
    // console.log(newDepositAmount);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');      // h4
    const previousDepositAmountText = depositTotal.innerText;           // h4 text
    const previousDepositAmount = parseFloat(previousDepositAmountText); // h4 number

    const newDepositTotal = previousDepositAmount + newDepositAmount;   // h4 number + input number
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');      // h4
    const balanceTotalText = balanceTotal.innerText;                    // h4 text
    const previousBalanceTotal = parseFloat(balanceTotalText);          // h4 number
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;    // h4 number + input number
    balanceTotal.innerText = newBalanceTotal;                           // h4 number

    // clear deposit input field
    depositInput.value = '';
});