import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Goods = ({
  openGoods,
  goods,
  addGood,
  removeGood,
  deleteGood,
  checkOut,
}) => {
  const totalPrice = () => {
    return goods.reduce((s, item) => {
      return item.price * item.quantity + s;
    }, 0);
  };

  return (
    <>
      <div className="shadow" onClick={openGoods}></div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Item quantity</th>
            <th>Item Price</th>
          </tr>
        </thead>

        <tbody>
          {goods.map(({ id, name, quantity, price }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>
                x{quantity}({price}$)
                <button
                  className="waves-effect waves-light btn green"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    const good = {
                      id,
                      name,
                      price,
                      quantity: 1,
                    };
                    
                    addGood(good);
                    toast.success(good.name);
                    
                  }}
                >
                  +
                </button>
                
                <button
                  className="waves-effect waves-light btn "
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    removeGood(id);
                    toast.error ("destroy " + name);
                  }}
                >
                  -
                </button>
                <ToastContainer />
              </td>
              <td>
                {price * quantity}$
                <button
                  className="waves-effect waves-light btn red"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    deleteGood(id);
                    toast.error("delete " + name);
                  }}
                >
                  Delete
                </button>
                <ToastContainer/>
                
              </td>
            </tr>
          ))}
          <tr>
            <td className="total">
              <h5>Total price: {totalPrice()}$</h5>
              <button
                className="waves-effect waves-light btn"
                onClick={checkOut}
              >
                Buy
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Goods;
