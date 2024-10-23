import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Products from "./Products";
import Card from "./Card";
import axios from "axios";

function Home() {
  const [item, setitem] = useState(null);
  const [sort, setsort] = useState("desc");
  const [brand, setbrand] = useState("همه");
  const[itemoff,setitemoff]=useState(null)
const[carditem,setcarditem]=useState([])
  const fetchitem = async () => {
    const res = await axios.get("http://localhost:3000/products");
    setitem(res.data);
    setitemoff(res.data)
  };
  useEffect(() => {
    fetchitem();
  }, []);

  const sortprouducts = (e) => {
    setsort(e.target.value);
    if (sort === "asc") {
      setitem(item.sort((a, b) => (a.id < b.id ? 1 : -1)));
    }
    if (sort === "desc") {
      setitem(item.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  };

  
  
  const filterpruducts = (e) => {
if (e.target.value === "") {
  setbrand(e.target.value)
  setitem(itemoff)
}else{
  const x=itemoff?.filter((item)=>
    item.availablerand.indexOf( e.target.value) >= 0 
 )
  setitem(x)

}
  };

const addproducts=(product)=>{
  const exist=carditem.find((elem)=>elem.id === product.id);
  if(exist){
    setcarditem(
      carditem.map((elem)=>elem.id ===product.id ?{...exist,qty:exist.qty+1}:elem)
    )
  }else{
    setcarditem([...carditem,{...product,qty:1}])

  }


}
const removeproduct=(product)=>{
  const exist=carditem.find((elem)=>elem.id === product.id);
if(exist.qty === 1){
  setcarditem(
    carditem.filter((elem)=>elem.id!==product.id)
  )

}else{
  setcarditem(
    carditem.map((elem)=>elem.id ===product.id ?{...exist,qty:exist.qty-1}:elem)
  )
}

}

  
  
  return (
    <div>
      <div className="container">
        <header>
          <a href="#">فروشگاه ملورین </a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                sortprouducts={sortprouducts}
                brand={brand}
                filter={filterpruducts}
                item={item}
              />
              <Products item={item} 
              add={addproducts}/>
            </div>
            <div className="sidebar">
              <Card remove={removeproduct} item={carditem} />
            </div>
          </div>
        </main>
        <footer>طراحی وتوسعه توسط محمد موسائی</footer>
      </div>
    </div>
  );
}

export default Home;
