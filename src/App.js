import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import StoreList from "./Components/StoreList";
import "../src/App.css"
import { API_KEY } from "./config";
import { useEffect } from "react";
import Goods from "./Components/Goods";
import "react-toastify/dist/ReactToastify.css";



const App = () => {
  const [data, setData] = useState([])
  const [isShowGoods, setIsShowGoods] = useState(false)
  const [goods, setGoods]= useState([])
  const openGoods = ()=>{
    goods.length && setIsShowGoods((prev)=> !prev);
  }
  const addGood =(good) => {
    const findItem = goods.findIndex(el => el.id === good.id)
    if(findItem < 0){
        setGoods((prev)=>[...prev,good])
    } else {
        const newGoods = goods.map((elem) =>{
            if(elem.id === good.id) {
                return {
                    ...elem,
                    quantity: elem.quantity +1
                } 
            }else {
               return elem     
            }
        });
        setGoods(newGoods)
      
    }
   
  }
  const removeGood = (id) => {
    const newGoods = goods.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          quantity: elem.quantity > 1 ? elem.quantity - 1 : elem.quantity,
        };
      } else {
        return elem;
      }
    });
    setGoods(newGoods);
  };
  const deleteGood = (id) => {
    const newGoods = goods.filter((el) => el.id !== id);
    setGoods(newGoods);

    if (newGoods.length == 0) {
    
      setIsShowGoods(false);
    }
  };
  const checkOut = () => {
    const totalPrice = () => {
      return goods.reduce((s, item) => {
        return item.price * item.quantity + s;
      }, 0);
    };
    const check = `
      ${goods.map(
        (elem) =>
          elem.name +
          "  " +
          "x" +
          elem.quantity +
          " " +
          "(" +
          elem.price +
          ")" +
          "$" +
          " = " +
          elem.quantity * elem.price +
          "$" +
          "\n\n"
      )}
    `;
    alert(check + `TotalPrice: ${totalPrice()}$`);
    setGoods([]);
  }


  useEffect(() => {
    fetch('https://fortniteapi.io/v1/shop?lang=en', {
      headers: ({
        Authorization: API_KEY,
      }),
    })
      .then((res) => res.json())
      .then((data) => setData(data.featured))
  }, [])
  useEffect(() => {
    if (goods.length === 0) {
      setIsShowGoods(false);
    }
  }, [goods]);


  return (
    <div className="App">

<Header />

{isShowGoods ? (
  <Goods
    openGoods={openGoods}
    goods={goods}
    removeGood={removeGood}
    addGood={addGood}
    deleteGood={deleteGood}
    checkOut={checkOut}
  />
) : null}
<StoreList
  data={data}
  openGoods={openGoods}
  goods={goods}
  addGood={addGood}
/>
<Footer />
</div>
);
}





export default App