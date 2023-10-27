import { ReactNode, CSSProperties } from "react";

export default interface IButtonProps {
  label: string | ReactNode;
  type?: "button" | "submit" | "reset";
  target?: "";
  disabled?: boolean;
  style?: CSSProperties;
  onClick?: CallableFunction;
}
