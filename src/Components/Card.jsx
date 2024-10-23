import React from "react";
import formatcurrency from "./Util";
import { Fade } from "react-reveal";

function Card(props) {
  const item = props.item;
  const remove = props.remove;
  const itemprice = item.reduce((a, c) => a + c.price * c.qty, 0);
  const totalprice = itemprice;
  return (
    <>
      {item.length === 0 ? (
        <div className="empty-price">سبد خرید خالی است</div>
      ) : (
        <div className="show-price">
        
          شما {item.length} کالا در سبد خرید دارید.
        </div>
      )}

      {item?.map((elem) => (
        <Fade>
          <div key={elem.id} className="product-item">
            <div className="product-detail">
              <img src={elem.image} alt="" />
              <h2>{elem.title} </h2>
            </div>

            <div className="product-price">
              <div className="price">
                <span className="">{formatcurrency(elem.price)}</span>
                <span className="qty">{elem.qty}</span>
              </div>

              <div className="remove-item">
                <button onClick={() => remove(elem)}>حذف از سبد</button>
              </div>
            </div>
          </div>
        </Fade>
      ))}
      <div className="total-price">
        <div className="total-text">مجموع قیمت:</div>
        <div className="total">{formatcurrency(totalprice)} </div>
      </div>
    </>
  );
}

export default Card;
