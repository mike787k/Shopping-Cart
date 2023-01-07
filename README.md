## Problem 3
## Map/Filter/Reduce

---

## Instructions

This problem is designed to help you understand how to use the array function `map()`, `filter()` and `reduce()` to add functionality to your page such as rendering elements from a data source, implementing search, and reducing the elements down to the data that you need.

---

## Requirements

- Code your solution into the provided `solution.js`.
- **DO NOT** modify anything inside `index.html`
- Although styling will not be graded, feel free to modify styling in `index.css`

### Map

- You will implement a map function to map over the provided `DATA` array in the `solution.js` file.
- The result of this mapping is to render the list of item provided in `DATA`
- The result should be appended to the `<div id='cart'>` element.

```text
As a USER
WHEN I visit the page
I SHOULD see a shopping car list
AND I should see 5 items in the list
AND I should see the items' id, name, price
```

```text
As a DEVELOPER
WHEN the index.html page renders
I SHOULD be able to load the JS file
AND I SHOULD be able to render the page with the provided DATA array
AND I SHOULD render all the data for every index onto the page (id, name, price)
```

### Filter

- You will implement the filter function to implement a search functionality to the rendered list above.
- There is an `<input>` element provided, you should add an event listener to this field to listen for user input.
- The user will enter text into this input field with the intention of searching for items in the shopping cart by their ids.
- When the user clicks out of the input after typing, you should filter the provided `DATA` array to match the id the user entered.

```text
As a USER
WHEN I see my shopping cart rendered on the page
AND I enter an id into the input field
AND I click out of the input field with my mouse or keyboard tab
I SHOULD see the shopping cart refreshed/re-rendered with only the items that match my id
```

```text
As a DEVELOPER
GIVEN that I have an event listener to listen for the user's input
WHEN the onchage event triggers for the input
I SHOULD be able to read what the user had input
AND I SHOULD implement a filter function on the DATA array that matches the user's input for ids
AND I SHOULD re-render the shopping cart items from the newly filtered array
```

## Reduce

- You will implement a reduce function to sum up the total price of all the items that are currently rendered in the shopping cart.
- There is a `<div>` provided in the `index.html` to render this price.

```text
As a USER
WHEN I am presented with my shopping cart
I SHOULD be able to see a total price of all the items in my cart at the bottom
```

```text
As a DEVELOPER
GIVEN a DATA array (either filtered or not)
I SHOULD be able to implement a reduce function on the array
AND the reduce function should sum up all the prices of the items in the array
AND I SHOULD be able to render it in the <div id="total"> element
```