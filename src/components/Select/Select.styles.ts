import styled from "@emotion/styled";

export const CustomSelectContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

export const SelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: inset 0 2px 4px #0000001a;
  cursor: pointer;
`;

export const SelectInput = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  overflow : hidden;
  text-overflow: ellipsis;
`;

export const Arrow = styled.span<{ isOpen: boolean }>`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%) ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "")};
  font-size: 12px;
  pointer-events: none;
  transition: transform 0.2s ease;
`;

export const SelectMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 8px;
  background-color: #fff;
  z-index: 10;
  max-height: 220px;
  overflow-y: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const OptionsList = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

export const OptionItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #eee9fc;
  }

  &:active {
    background-color: #e0e0e0;
  }

  &.selected {
    background-color: #eee9fc;
    font-weight: bold;
  }
`;

export const NoOptionsItem = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #999;
`;
