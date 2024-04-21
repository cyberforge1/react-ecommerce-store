


* Add the cart system


* Product Page Button
    * when this button is clicked it should perform a number of actions:
        * increasing the quantity of the product document in the cart collection by one (adjust in database and also hold in state?)
        * decrement the quantity of that item in the products collection by one (adjust in database and also hold in state?)

    * figure out how to use the cart collection in firestore to set the properties from the products collection 
        * Add Id's manually to firestore db

    * Cart Page
        * if the quantity not equal to 0 display to card page
        * create component to display product details in cart
        * create a system to total the .price and add to the bottom of page (hold in state)

    * Add a remove from cart button on the cart page 
        * if the - button is clicked 
            * decrease the quantity of the product document in the cart collection by one (adjust in database and also hold in state?)

        * if the + button is clicked 
            * increase the quantity of the product document in the cart collection by one (adjust in database and also hold in state?)

        * Add a remove all button that finds the total quantity of the number of items in cart by id, decrements by this amount and adds this amount to the product quantity

    
    
* use the same ID's for the cart and the products 





* Troubleshoot the favorite system error

* Add bootstrap for design and viewport size changes

* Change styling

* Update product card

* Look at the number of fetch requests

* Add Loading spinner and functionality











* Hide the database details in a .env file


