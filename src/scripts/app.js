body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #eaeded;
}

.app {
  width: 100%;
}

.header {
  background-color: #131921;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
}

.logo {
  width: 100px;
  margin-right: 20px;
}

.searchInput {
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 16px;
}

.searchButton, .cartButton {
  background-color: #febd69;
  border: none;
  padding: 10px 15px;
  margin-left: 10px;
  cursor: pointer;
  font-weight: bold;
}

.productSection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

.product {
  background-color: white;
  margin: 10px;
  padding: 15px;
  width: 250px;
  border: 1px solid lightgray;
  border-radius: 5px;
  text-align: center;
}

.productImage {
  max-width: 100%;
  height: 200px;
  object-fit: contain;
}

.productTitle {
  font-size: 16px;
  font-weight: bold;
}

.productPrice {
  color: green;
  margin: 5px 0;
}

.productRating {
  color: orange;
}

.addToCart {
  background-color: #ffd814;
  border: 1px solid #fcd200;
  padding: 8px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
}

