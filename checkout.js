<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    
<div class="container">
    <div class="checkoutLayout">

        
        <div class="returnCart">
            <a href="/">keep shopping</a>
            <h1>List Product in Cart</h1>
            <div class="list">

                <div class="item">
                    <img src="images/1.webp">
                    <div class="info">
                        <div class="name">PRODUCT 1</div>
                        <div class="price">$22/1 product</div>
                    </div>
                    <div class="quantity">5</div>
                    <div class="returnPrice">$433.3</div>
                </div>

            </div>
        </div>


        <div class="right">
            <h1>Checkout</h1>

            <div class="form">
                <div class="group">
                    <label for="name">Full Name</label>
                    <input type="text" name="name" id="name">
                </div>
    
                <div class="group">
                    <label for="phone">Phone Number</label>
                    <input type="text" name="phone" id="phone">
                </div>
    
                <div class="group">
                    <label for="address">Address</label>
                    <input type="text" name="address" id="address">
                </div>
    
            
                <div class="group">
                    <label for="city">City</label>
                    <input type="text" name="address" id="city">
                </div>
             
            </div>
            <div class="return">
                <div class="row">
                    <div>Total Quantity</div>
                    <div class="totalQuantity">70</div>
                </div>
                <div class="row">
                    <div>Total Price</div>
                    <div class="totalPrice">$900</div>
                </div>
            </div>
            <button class="buttonCheckout">CHECKOUT</button>
            </div>
    </div>
</div>
<style>






/* Global styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Checkout layout */
.checkoutLayout {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-sizing: border-box;
}

.returnCart,
.right {
  width: 100%;
}

.returnCart a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
}

.returnCart h1,
.right h1 {
  margin-top: 0;
  font-size: 24px;
}

.list {
  margin-top: 20px;
}

.item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.item img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}

.info {
  flex-grow: 1;
}

.name {
  font-size: 18px;
  font-weight: bold;
}

.price {
  font-size: 14px;
  color: #777;
}

.quantity,
.returnPrice {
  font-size: 16px;
  font-weight: bold;
}

.form {
  margin-top: 20px;
}

.group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.return {
  margin-top: 20px;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
}

.totalQuantity,
.totalPrice {
  font-weight: bold;
}

.buttonCheckout {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.buttonCheckout:hover {
  background-color: #555;
}








</style>

<script>






let listCart = [];
function checkCart(){
        var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
        if(cookieValue){
            listCart = JSON.parse(cookieValue.split('=')[1]);
        }
}
checkCart();
addCartToHTML();
function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">$${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
}




$(document).ready(function() {
    // Handle checkout button click event
    $('.buttonCheckout').on('click', function() {
      // Retrieve order details
      var fullName = $('#name').val();
      var phoneNumber = $('#phone').val();
      var address = $('#address').val();
      var city = $('#city').val();
  
      // Construct the order message
      var message = 'Order Details:\n';
      message += 'Full Name: ' + fullName + '\n';
      message += 'Phone Number: ' + phoneNumber + '\n';
      message += 'Address: ' + address + '\n';
      message += 'City: ' + city  ;
  
      // Encode the message for URL
      var encodedMessage = encodeURIComponent(message);
  
      // Replace the following WhatsApp number with your desired recipient number
      var whatsappNumber = '+201007276757';
  
      // Construct the WhatsApp URL
      var whatsappURL = 'https://api.whatsapp.com/send?phone=' + whatsappNumber + '&text=' + encodedMessage;
  
      // Open the WhatsApp URL in a new tab/window
      window.open(whatsappURL, '_blank');
    });
  });</script>


</body>
</html>
