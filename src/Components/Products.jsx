import React from "react";
import formatcurrency from "./Util";
function Products(props) {





  return (
    <div>
      <ul className="products">
{
  props.item?.map((elem)=>{
return(
<li key={elem.id}>
    <div className="product">
      <img
        src={elem.image}
        alt=""
      />
      <p> {elem.title}</p>
      <div className="product-price">
        <button onClick={()=>{props.add(elem)}}>افزودن به سبد خرید</button>
        <div className="price">{formatcurrency(elem.price)}</div>
      </div>
    </div>
  </li>

)
 
 
 

  })
}
      </ul>
    </div>
  );
}

export default Products;
