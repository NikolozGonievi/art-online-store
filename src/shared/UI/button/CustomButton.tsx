"use client";

import { MouseEventHandler } from "react";
import IButtonProps from "./CustomButton.model";

export default function CustomButton({
  label,
  type,
  target,
  style,
  disabled,
  onClick,
}: IButtonProps) {
  const targetClassName = "";

  function handleClick(e: any): void {
    e.stopPropagation();
    e.preventDefault();

    if (onClick) {
      onClick(e);
    }
  }

  return (
    <>
      <button
        type={type}
        style={style}
        className={targetClassName}
        disabled={disabled}
        onClick={handleClick}
      >
        {label}
      </button>
    </>
  );
}
