import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Input.css";
import ListPage from "../../pages/ListingPage";
import { userData, userDispatchData } from "../../context";

function FieldValue() {
  const [data, Setdata] = useState([]);
  const items = React.useContext(userData);
  const setItems = useContext(userDispatchData);

  const HandleEvent = (e) => {
    setItems(e.target.value);
  };

  const HandleAdd = (e) => {
    e.preventDefault();
    data.push(items);

    if (data?.length) {
      localStorage.setItem("lists", JSON.stringify(data));
    }
    Setdata(data);

    setItems("");
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `../listingPage`;
    navigate(path);
  };

  return (
    <div className="fieldBox">
      <form className="fieldBox">
        <input
          placeholder="Enter todo item.."
          type="text"
          value={items}
          onChange={HandleEvent}
        ></input>
        <button
          class="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-gray"
          onClick={HandleAdd}
        >
          Submit
        </button>

<<<<<<< HEAD
        {data.map((itemval, index) => {
          return;
        })}
      </form>
      <button
        class="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib bg-mid-gray"
        onClick={routeChange}
      >
        Show Items
      </button>
    </div>
  );
=======

 {/* <li>{items}</li>  */}
 {/* {data.map((itemval, id="name+1")=>{return <li key={id+1}>{itemval}</li>})} */}

 {data.map((itemval, index)=>{return <ListPage/>})}
 </form>
 <button onClick={routeChange}>Show List</button>
 
  </div>
  )
>>>>>>> 900bffafe930c68fafa8953c6eb70744d082c6ac
}

export default FieldValue;
