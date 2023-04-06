import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//Todo: Add clothing card dynamically
function Product() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const clickHandler = () => {
    const tempData = data;
    tempData.push(input);
    setData(data);
    setInput("");
    console.log(data);
  };


  return (
    <div className="Product">
      <input
        type="string"
        Id ={input}
        onChange={(e) => setInput(e.target.id)}
      />
      <input
        type="text"
        Gender ={input}
        onChange={(e) => setInput(e.target.gender)}
      />
      <input
        type="text"
        MasterCategory ={input}
        onChange={(e) => setInput(e.target.masterCategory)}
      />
      <input
        type="text"
        SubCategory ={input}
        onChange={(e) => setInput(e.target.subCategory)}
      />
      <input
        type="text"
        ArticleType ={input}
        onChange={(e) => setInput(e.target.articleType)}
      />
      <input
        type="text"
        BaseColour ={input}
        onChange={(e) => setInput(e.target.baseColour)}
      />
      <input
        type="text"
        Season ={input}
        onChange={(e) => setInput(e.target.season)}
      />
      <input
        type="text"
        Year ={String}
        onChange={(e) => setInput(e.target.year)}
      />
      <input
        type="text"
        Usage ={input}
        onChange={(e) => setInput(e.target.usage)}
      />
      <input
        type="text"
        ProductDisplayName ={input}
        onChange={(e) => setInput(e.target.productDisplayName)}
      />
       <input
        type="text"
        Filename ={input}
        onChange={(e) => setInput(e.target.filename)}
      />
       <input
        type="text"
        Link ={input}
        onChange={(e) => setInput(e.target.link)}
      />
       <input
        type="text"
        Price ={input}
        onChange={(e) => setInput(e.target.price)}
      />
       <input
        type="text"
        Stock ={input}
        onChange={(e) => setInput(e.target.stock)}
      />

      <button onClick={clickHandler}>Add</button>

      {data.length ? (
        <ul>
          {data.map((id,gender,masterCategory,subCategory,articleType,baseColour,season,year,usage,productDisplayName,filename,link,price,stock) => {
            return 
            <ul className="product-list">
            <li><Card/>Id: {product.id}</li>
            <li><Card/>Gender: {product.gender}</li>
            <li><Card/>MasterCategory: {product.masterCategory}</li>
            <li><Card/>SubCategory: {product.subCategory}</li>
            <li><Card/>ArticleType: {product.articleType}</li>
            <li><Card/>BaseColour: {product.baseColour}</li>
            <li><Card/>Season: {product.season}</li>
            <li><Card/>Year: {product.year}</li>
            <li><Card/>Usage: {product.usage}</li>
            <li><Card/>ProductDisplayName: {product.productDisplayName}</li>
            <li><Card/>Filename: {product.filename}</li>
            <li><Card/>Link: {product.link}</li>
            <li><Card/>Price: {product.price}</li>
            <li><Card/>Stock: {product.stock}</li>
  </ul>;
          })}
        </ul>
      ) : None}
    </div>
  );
}


//Todo: Load clothing data into card
class Card extends React.Component {
    render() {
      return (
        <div className="card-container">
          <div className="card">
            <div>
              <img class="shirt" src="img/red-t-shirt.jpg" alt="Item" />
            </div>
            <h2>Red T-Shirt</h2>
            <p>A brightly-coloured shirt that is summer ready and eye-catching</p>
            {/* <h2>{this.props.name}</h2>
            <p>{this.props.desc}</p> */}
            <ul>
              {/* <li><strong>Diameter:</strong>{this.props.diameter}</li>
              <li><strong>Moons:</strong> {this.props.moons}</li> */}
              <li><strong>Price:</strong>$9.99</li>
              <li><strong>Stock:</strong> 10</li>
            </ul>
          </div>
        </div>
      )
    }
  }

export default Product;