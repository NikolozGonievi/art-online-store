"use client";

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

  return (
    <>
      <button
        type={type}
        style={style}
        className={targetClassName}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
}
