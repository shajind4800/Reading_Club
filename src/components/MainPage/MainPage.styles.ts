import styled from "styled-components";

export const ScrollContainer = styled.div`
  height: calc(100vh - 56px);
  background: #222;
  overflow: auto;
`;

export const SpaceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 10px;
  padding: 10px 20px;
`;

export const MembersContainer = styled.div`
  width: fit-content;
  margin: 5px 10px;
  color: white;
`;

export const MembersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30.08px;
  gap : 10px;
`;

export const FocusText = styled.span`
  font-weight: 600;
  color: #ea763f;
`;

export const SubText = styled.div`
  padding-top: 8px;
  font-size: 16px;
  color: #dcdcdc;
`;
