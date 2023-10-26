import { StaticImageData } from "next/image";

export interface ICustomDropdownOption {
  label: string;
  value: number | string;
  disabled?: boolean;
  children?: Array<ICustomDropdownOption>;
  icon?: StaticImageData ;
  obj?: any;
}
