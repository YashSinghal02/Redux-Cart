import { useDispatch } from "react-redux";
import { addToCart } from "../counterSlice/cartSlice.js";
import { content } from "./Content.js"




function Card() {

const dispatch=useDispatch()

  return (
    <div>
      <div className="flex gap-2 items-center justify-evenly flex-wrap">
{
       content.map((x,id) => {
        
        return (
          <div key={id} className="card bg-base-100 w-90 shadow-sm">
            <figure>
              <img className="w-90 h-90 object-cover"
                src={x.pictureLink}
                alt={x.category}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-xl">{x.name}</h2>
              <p className="font-bold text-xl">
               {x.price}
              </p>
              <div className="card-actions justify-end">
                <button onClick={()=>dispatch(addToCart({
                  productid: id,
                  name:x.name,
                  price:x.price,
                  img:x.pictureLink,
                }))} 
                className="btn btn-primary">Buy Now</button>
                      {/* <button 
                      onClick={()=>dispatch(removeCart({
                      productId: id,
                      name:x.name,
                      price:x.price,
                      }))}
                      className='p-2 rounded-2xl cursor-pointer bg-red-300'>Remove </button> */}

              </div>
            </div>
          </div>
        );
      })}





      </div>
    </div>
  );
}

export default Card;
