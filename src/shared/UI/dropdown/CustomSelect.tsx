"use client";

import { Space, Select, Tag } from "antd";
import { ICustomDropdownOption } from "./CustomSelect.model";
import CustomImage from "../custom-icon/CustomImage";
import type { CustomTagProps } from "rc-select/lib/BaseSelect";
import { CSSProperties } from "react";
import "./CustomSelect.style.scss";

type Props = {
  options: Array<ICustomDropdownOption>;
  defaultValue?: ICustomDropdownOption;
  className?: string;
  style?: CSSProperties;
};

export default function CustomDropdown({
  options,
  defaultValue,
  style,
  className,
}: Props): React.ReactNode {
  const tagRender = (props: CustomTagProps) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    console.log("====================================");
    console.log("aba aq ra xdeba ?", props);
    console.log("====================================");
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
      >
        <Space>
          {/* <div className="select-option-wrapper">
            {icon && (
              <CustomImage
                src={item.icon}
                alt={`${item.label}`}
                width={20}
                height={20}
              />
            )}

          </div> */}
          {label}
        </Space>
      </Tag>
    );
  };

  const { Option, OptGroup } = Select;

  return (
    <>
      <Select
        placeholder={"test"}
        style={style}
        className={className}
        defaultValue={defaultValue}
        tagRender={tagRender}
        // value={defaultValue}
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
