var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var b = Math.random() * 100
  var c = Math.floor(b)
  cart.push({[item]: c})
  console.log (`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log (`Your shopping cart is empty.`);
  }
  else {
    var newArr = [];
  for (var i = 0; i < cart.length; i++) {
    var itemWithPrice = cart[i];
    var item = Object.keys(itemWithPrice)[0];
    var price = itemWithPrice[item];
    newArr.push(` ${item} at \$${price}`);
  }
  console.log(`In your cart, you have${newArr}.`);
}}

function removeFromCart(item) {
  for (var i in cart) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(card) {
  if (card === undefined) {
    console.log("We don\'t have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`);
    cart = [];
  }
}


function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
