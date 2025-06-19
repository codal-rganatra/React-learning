import React from 'react'
import { useState } from 'react'
const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [name,setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            name: name,
            quantity: quantity
        };
        setItems(prevItems => [...prevItems, item]);
        setName("");
        setQuantity(0);
    }
  return (
    <div>
        <form>
            Name: <input type="text" placeholder='Add item name here' name="name" onChange={(e) => setName(e.target.value)} value={name}/>
            Quantity: <input type="number" placeholder='Add item quantity here' name="quantity" onChange={(e) => setQuantity(e.target.value)} value={quantity}/>
            <button onClick={handleSubmit}>Add item</button>
        </form>
        <h3>Shopping List</h3>
        <ul>
            <li>Name - Quantity</li>
            {items.map((item, index) => (
                <li key={index}>
                    {item.name} - {item.quantity}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ShoppingList