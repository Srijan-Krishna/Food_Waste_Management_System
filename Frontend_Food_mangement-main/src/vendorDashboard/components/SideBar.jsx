import React from "react";

const SideBar = ({
  showFirmHandler,
  showProductHandler,
  showAllProductsHandler,
  showFirmTitle,
  showaddedprocducthandler
}) => {
  return (
    <div className="sideBarSection">
      <ul>
        {showFirmTitle ? <li onClick={showFirmHandler}>Add Firm</li> : "" }
        <li onClick={showProductHandler}>Add Product</li>
        <li onClick={showAllProductsHandler}>All Your Products</li>
        <li onClick={showaddedprocducthandler}>Added Products</li>
        <li>User Details</li>
      </ul>
    </div>
  );
};

export default SideBar;
