import { useState } from 'react'
import './App.css'
import Items from "./components/Items/Items.tsx";
import drinkImage from '../../assets/free-icon-drinks-665885.png';
import foodImage from '../../assets/free-icon-dinner-272186.png';
import * as React from "react";
import AddedItems from "./components/AddedItems/AddedItems.tsx";

interface Props {
    drinkImage:  string;
    foodImage:  string;
}

const App: React.FC<Props> = ({drinkImage,foodImage}) => {
    const [addedItems, setAddedItems] = useState([]);

    const itemsFood  = [
        {name: 'Hamburger', price: 80, image: foodImage},
        {name: 'Cheeseburger', price: 90,image: foodImage},
        {name: 'Fries', price: 45,image: foodImage},
    ];

    const itemsDrinks = [
        {name: 'Coffee', price: 70,image: drinkImage},
        {name: 'Tea', price: 50,image: drinkImage},
        {name: 'Cola', price: 40,image: drinkImage},
    ];


    const addItem = (item: { name: string, price: number }) => {
        let itemExists = false;

        const updatedItems = addedItems.map((addedItem) => {
            if (addedItem.name === item.name) {
                itemExists = true;
                return { ...addedItem, amount: addedItem.amount += 1 };
            }
            return addedItem;
        });

        if (!itemExists) {
            setAddedItems([...addedItems, { name: item.name, price: item.price, amount: 1 }]);
        } else {
            setAddedItems(updatedItems);
        }
    };

    const totalPrice = addedItems.reduce((acc, item) => acc + item.price * item.amount, 0);

  return (
    <>
      <div className="App-container">
          <div className="order-details">
              {addedItems.length === 0 ? (
                  <span>Order is empty! Please add some items!</span>
              ) : (
                  <>
                      {addedItems.map((item, index) => (
                          <AddedItems
                              key={index}
                              itemName={item.name}
                              itemPrice={item.price}
                              itemAmount={item.amount}
                              totalPrice={totalPrice}
                          />
                      ))}
                      <h3>Total Price: {totalPrice} KGS</h3>
                  </>
              )}
          </div>
          <div className="add-items">
              <div className="food-items">
                  {itemsFood.map((item, index) => (
                      <Items
                          key={index}
                          addItem={() => addItem(item)}
                          itemName={item.name}
                          itemPrice={item.price}
                          itemImage={foodImage}/>
                  ))}
              </div>
              <div className="drinks-items">
                  {itemsDrinks.map((item, index) => (
                      <Items
                          key={index}
                          addItem={() => addItem(item)}
                          itemName={item.name}
                          itemPrice={item.price}
                          itemImage={foodImage}/>
                  ))}
              </div>
          </div>
      </div>
    </>
  )
};

export default App
