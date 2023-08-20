function handleItemClick(itemPriceId, itemNameId) {
  const itemPrice = getValue(itemPriceId);
  const total = getValue("total-price");

  const newTotal = itemPrice + total;
  setValue("total-price", newTotal);
  setValue("discount-amount", 0);
  setValue("grand-total", newTotal);

  const purchaseBtn = document.getElementById("purchase-btn");
  if (newTotal > 0) purchaseBtn.removeAttribute("disabled");

  const couponApplyBtn = document.getElementById("coupon-apply-btn");
  if (newTotal >= 200) couponApplyBtn.removeAttribute("disabled");

  const itemName = document.getElementById(itemNameId).innerText;
  const previousCartItem =
    document.getElementById("cart-items").childNodes.length;
  const item = `<p>${previousCartItem + 1}. ${itemName}</p>`;

  document.getElementById("cart-items").innerHTML += item;
}

function getValue(valueId) {
  const value = document.getElementById(valueId);
  return parseFloat(value.innerText);
}
function setValue(valueId, amount) {
  document.getElementById(valueId).innerText = amount.toFixed(2);
}

function handleCoupon() {
  const couponField = document.getElementById("coupon-code");
  if (couponField.value === "SELL200") {
    const total = getValue("total-price");
    const discount = total * 0.2;
    setValue("discount-amount", discount);

    const grandTotal = total - discount;
    setValue("grand-total", grandTotal);
  }
}

function handleGoHome() {
  document.getElementById("cart-items").innerHTML = "";
  setValue("total-price", 0);
  setValue("discount-amount", 0);
  setValue("grand-total", 0);
  document.getElementById("coupon-code").value = "";
  document.getElementById("purchase-btn").setAttribute("disabled", true);
  document.getElementById("coupon-apply-btn").setAttribute("disabled", true);
}
