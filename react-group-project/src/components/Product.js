import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Product() {
  const[products, setProducts] = useState([])
  useEffect(() => {
    axios.get('https://csis3380-group-9-backend.onrender.com/products')
    .then((res) => {
      setProducts(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  return (
    <ul className="product-list">
      {products.map(p => {
        return (
          <li><Item
            key={p._id}
            name={p.productDisplayName}
            link={p.link}
            type={p.articleType}
            color={p.baseColour}
            id={p.id}
            masterCategory={p.masterCategory}
            price={p.price}
            stock={p.stock}
          /></li>
        )
      })}
    </ul>   
  )
}

//Todo: Load clothing data into item
class Item extends React.Component {
    render() {
      return (
        <div className="item-container">
          <div className="item">
            <img class="item-image" src={this.props.link} alt="Item" />
            <h2>{this.props.name}</h2>
            <ul>
              <li><strong>Price:</strong> ${this.props.price}</li>
              <li><strong>Stock:</strong> {this.props.stock}</li>
            </ul>
          </div>
        </div>
      )
    }
  }
