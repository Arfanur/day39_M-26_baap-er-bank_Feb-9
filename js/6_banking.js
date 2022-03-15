// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposit button clicked');
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;

    // clear deposit input field
    depositInput.value = '';
});