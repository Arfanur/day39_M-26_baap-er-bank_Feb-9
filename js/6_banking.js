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
    depositInput.value = '';                                            // clear deposit input
});





// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
            // console.log('withdraw-button clicked')
    const withdrawInput = document.getElementById('withdraw-input');    // input
    const withdrawAmountText = withdrawInput.value;                     // input text
    const newWithdrawAmount = parseFloat(withdrawAmountText);           // input number
            // console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-Total');    // h4
            // console.log('withdraw-button clicked')
    const previousWithdrawText = withdrawTotal.innerText;               // h4 text
    const previousWithdrawTotal = parseFloat(previousWithdrawText);     // h4 number
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount; // h4 number + input number
    withdrawTotal.innerText = newWithdrawTotal;                         // h4 = updated

    // update balance
    const balanceTotal = document.getElementById('balance-total');      // h4
    const previousBalanceText = balanceTotal.innerText;                 // h4 text
    const previousBalanceTotal = parseFloat(previousBalanceText);       // h4 number
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;   // h4 number - input number
    balanceTotal.innerText = newBalanceTotal;                           // h4 updated

    // clear withdraw input
    withdrawInput.value = '';                                           // clear withdraw input
});
