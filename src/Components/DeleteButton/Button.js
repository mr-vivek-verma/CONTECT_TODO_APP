import React from "react";
import "./DeleteButton.css";
function DeleteButton(props) {
<<<<<<< HEAD
  const HandleDelete = () => {
    console.log("deleted");
    alert("deleted successfully");
  };
=======

  const HandleDelete=()=>{
    console.log("deleted")
    // alert ("deleted successfully")
    localStorage.clear();
    
  }
>>>>>>> 900bffafe930c68fafa8953c6eb70744d082c6ac

  return (
    <button
      onClick={HandleDelete}
      class="bw0 br2 bg-red pa2 white fw1 tc ttu tracked"
    >
      Delete Item
    </button>
  );
}

export default DeleteButton;
