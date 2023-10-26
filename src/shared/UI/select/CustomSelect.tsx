"use client";

import { Space, Select, Tag } from "antd";
import { ICustomDropdownOption } from "./CustomSelect.model";
import CustomImage from "../image/CustomImage";
import type { CustomTagProps } from "rc-select/lib/BaseSelect";
import { CSSProperties } from "react";
import "./CustomSelect.style.scss";

type Props = {
  placeholder: string;
  options: Array<ICustomDropdownOption>;
  defaultValue?: ICustomDropdownOption;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  onChange?: () => {};
};

export default function CustomDropdown({
  options,
  defaultValue,
  style,
  className,
  placeholder,
  disabled,
  onChange,
}: Props): React.ReactNode {
  const { Option, OptGroup } = Select;

  return (
    <>
      <Select
        placeholder={placeholder}
        style={style}
        className={className}
        defaultValue={defaultValue?.value}
        disabled={disabled}
        onChange={onChange}
      >
        {options.map((item) => {
          const { label, value, disabled, children, icon, obj } = item;
          if (children) {
            return (
              <OptGroup label={label} key={value}>
                {children.map((child) => {
                  const { label, value, disabled, children, icon, obj } = item;

                  return (
                    <Option value={value} label={label} key={value}>
                      children
                    </Option>
                  );
                })}
              </OptGroup>
            );
          }
          return (
            <Option
              value={value}
              /* label={label} wesit araa sachiwo radgan qvemodan renderdeba */ key={
                value
              }
            >
              <Space>
                <div className="select-option-wrapper">
                  {icon && (
                    <CustomImage
                      src={item.icon}
                      alt={`${item.label}`}
                      width={20}
                      height={20}
                    />
                  )}

                  {label}
                </div>
              </Space>
            </Option>
          );
        })}
      </Select>
    </>
  );
}
