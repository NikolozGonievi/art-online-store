"use client";

import CustomButton from "@/shared/UI/button/CustomButton";
import "./HeaderShoppingCart.style.scss";

export default function HeaderShoppingCart() {
  const handleClick = () => {
    console.log("migebuli data");
  };
  return (
    <>
      <div>
        Shopping Cart
        <CustomButton label="test" onClick={handleClick} />
      </div>
    </>
  );
}
