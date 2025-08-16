import styled from 'styled-components';

export const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  padding: 0 20px 0 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 0.5px solid #D3D3D3;
  position: fixed;
  top: 0;
  background: linear-gradient(to right, #ea763f, #391c0e);
  z-index: 1500;
`;

export const ToolbarLogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-right: 16px;
  cursor : pointer;
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
`;

export const Title = styled.div`
  color: white;
  font-size: 18px;
  margin-left: 8px;
`;

export const AuthButtonWrapper = styled.div`
  margin: 10px;
`;
