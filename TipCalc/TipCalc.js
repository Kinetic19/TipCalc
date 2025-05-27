function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tipPercent = parseFloat(document.getElementById("tip").value);

  if (isNaN(bill) || isNaN(tipPercent)) return;

  const tipAmount = (bill * tipPercent) / 100;
  const total = bill + tipAmount;

  document.getElementById("tip-amount").textContent = tipAmount.toFixed(2);
  document.getElementById("total").textContent = total.toFixed(2);
}
