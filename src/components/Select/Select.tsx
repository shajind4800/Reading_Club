import React, { useState, useRef, useEffect } from "react";
import {
  CustomSelectContainer,
  SelectContainer,
  SelectInput,
  Arrow,
  SelectMenu,
  OptionsList,
  OptionItem,
  NoOptionsItem,
} from "./Select.styles";
import { Option } from "../../types/types";

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (selected: Option | Option[] | null) => void;
  selectedOption: Option | Option[] | null;
  isMulti?: boolean;
}

export const Select: React.FC<CustomSelectProps> = ({
  options,
  placeholder = "Select an option",
  onChange,
  selectedOption,
  isMulti = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [value, setValue] = useState<Option | Option[] | null>(selectedOption);
  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setValue(selectedOption);
  }, [selectedOption]);

  const handleTextClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    if (isMulti) {
      const currentValues = Array.isArray(value) ? value : [];
      const isSelected = currentValues.some((o) => o.value === option.value);
      const newValues = isSelected
        ? currentValues.filter((o) => o.value !== option.value)
        : [...currentValues, option];

      setValue(newValues);
      onChange(newValues);
    } else {
      setValue(option);
      onChange(option);
      setIsOpen(false);
      setSearchTerm("");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const displayValue = () => {
    if (searchTerm !== "") {
      return searchTerm;
    }
  
    if (isMulti && Array.isArray(value)) {
      return value.map((v) => v.label).join(", ");
    } else if (!isMulti && value && !Array.isArray(value)) {
      return value.label;
    }
  
    return "";
  };
  const filteredOptions : Option[] = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClickOutside = (event: MouseEvent) : void => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <CustomSelectContainer ref={selectRef}>
      <SelectContainer onClick={handleTextClick}>
        <SelectInput
          type="text"
          value={displayValue()}
          onChange={handleSearchChange}
          placeholder={placeholder}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        />
        <Arrow isOpen={isOpen}>▼</Arrow>
      </SelectContainer>
      {isOpen && (
        <SelectMenu>
          <OptionsList>
            {filteredOptions.length ? (
              filteredOptions.map((option) => {
                const isSelected = isMulti
                  ? Array.isArray(value) &&
                    value.some((o) => o.value === option.value)
                  : (value as Option)?.value === option.value;

                return (
                  <OptionItem
                    key={option.value}
                    onClick={() => handleOptionClick(option)}
                    className={isSelected ? "selected" : ""}
                  >
                    {option.label}
                  </OptionItem>
                );
              })
            ) : (
              <NoOptionsItem>No options found</NoOptionsItem>
            )}
          </OptionsList>
        </SelectMenu>
      )}
    </CustomSelectContainer>
  );
};
