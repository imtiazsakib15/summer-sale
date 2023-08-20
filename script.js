function handleItemClick(itemPriceId, itemNameId) {
  const itemPrice = getValue(itemPriceId);
  const total = getValue("total-price");

  const newTotal = itemPrice + total;
  setValue("total-price", newTotal);
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
