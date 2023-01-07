/* DO NOT CHANGE THIS DATA
*  This is your source of truth for your page!
*  Pretend that this is the data you receive from the server.
* */
const DATA = [
  { id: '1', item: 'soda', price: 1.50 },
  { id: '42', item: 'bread', price: 2.00 },
  { id: '74', item: 'apple', price: 0.55 },
  { id: '1337', item: 'milk', price: 1.70 },
  { id: '500', item: 'ham', price: 3.25 }
];

/*
*  Hint: You would probably want to create a function to "render" the page.
*        This is where you'd "map" each of provided data item, and transform them
*        into HTML nodes to be added to the shopping cart.
* */

const renderShoppingCart = (rawData) => {
  // Given some rawData as an array, how do I "map" or "transform" the data
  // into element nodes to be added onto a parent node.

  // You'd probably want reference to the cart node here to clear out
  // it's current content and replace it with your items.

  // const cartNode = ...?

  // Your MAP function should go in here.

  // Also good to implement REDUCE here as we will need to render the price as well.

       
    let arrId = rawData.map(function(element){
      return `${element.id}`;
    })


    let arrItem = rawData.map(function(element){
      return `${element.item}`;
    })

    let arrPrice = rawData.map(function(element){
      return `${element.price}`;
    })

    document.getElementById("cart").innerHTML = '';


    for (i = 0; i < rawData.length; i++){
      document.getElementById("cart").innerHTML += " [id: " + arrId[i] + "] - " + " " + arrItem[i] + " - $" + arrPrice[i];
      
      document.getElementById("cart").innerHTML += "<br>";

      console.log(document.getElementById("cart").innerHTML);
    }


 const priceTotal =  rawData.reduce((total, item) => {
    
  return total + item.price;
  }, 0)

  document.getElementById("total").innerHTML = "Total Price: $" + priceTotal;

}



/*
* Hint: Define the below function that will "filter" from the original DATA array
*       and only return the ID that you are looking for.
*       This should be added as an event listener to
* */
const filterHandler = (s) => {
  // Implement your FILTER function below.

  /*
  *  Hint: Given some string  s as a parameter to this function...
  *        implement a filter on DATA that will remove elements whose id
  *        does not match the string s
  * */

  // Then with the filtered array, you'd probably want to re-paint/render the cart
  // Use the renderShoppingCart above!
 
  

  let someFilteredArray = DATA.filter((elements=>elements.id.includes(s)));
  
  // console.log(DATA.filter(data => data.id.includes(1)));
  renderShoppingCart(someFilteredArray);
  

}

// == MAIN DRIVER FUNCTION ==
window.onload = () => {
  // All your functions above should be called in here. Consider the following order/algorithm:

  /*
  *  1) Render your shopping cart
  *  2) Add an event listener for the input field and filter the cart with the input.
  *  3) As part of your rendering process, implement a "reducer" to sum up the total.
  * */
  renderShoppingCart(DATA);

  const searchElement = document.getElementById('search')
  searchElement.addEventListener('change', filterCaller)
  function filterCaller(){
    filterHandler(searchElement.value);
  }
  
};