import React, { useState } from 'react'
import Counter from './components/Counter'
import Todo from './components/Todo'
import Navigation from './Navigation/nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import './index.css'
import Sidebar from './Sidebar/Sidebar'
import products from './db/data'
import Card from './components/Card'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleinputchange = (event) =>{
    setQuery(event.target.value);
  }

  // Input filter
  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) != -1);

  //Radio Filter
  const handleChange = event => {
    setSelectedCategory(event.target.value);
  }

  //Filter for buttons
  const handleClick = event => {
    setSelectedCategory(event.target.value);
  }

  function filteredData(products, selected, query){
    let filteredProducts = products;

    //Filtering input items
    if(query){
      filteredProducts = filteredItems;
    }

    if(selected){
      filteredProducts = filteredProducts.filter(({category, title, newPrice, company, color})=>
        category === selected || color === selected || company === selected || newPrice === selected || title === selected
      );
    }

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice})=>(
      <Card
      key = {Math.random()}
      img ={img} 
      title = {title} 
      star = {star} 
      reviews = {reviews}
      prevPrice = {prevPrice} 
      newPrice = {newPrice}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query);
  
  return (
    <>
      <Sidebar handleChange = {handleChange} />
      <Navigation query={query} handleinputchange={handleinputchange} />
      <Recommended handleClick={handleClick} />
      <Products result={result}/>
    </>
  )
}

export default App