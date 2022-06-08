import React from "react";
import "./Edit.css";

function EditButton() {
  const HandleEdit = () => {};

  return (
    <button
      onClick={HandleEdit}
      class="bw2 br2 bg-green pa2 white fw1 tc ttu tracked"
    >
      Edit Item
    </button>
  );
}

export default EditButton;
