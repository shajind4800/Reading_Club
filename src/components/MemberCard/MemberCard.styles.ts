import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
`;

export const AvatarImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const EmailText = styled.div`
  font-size: 0.9rem;
  color: white;
  margin-bottom: 10px;
  text-overflow: clip;
`;

export const TagsContainer = styled.div<{ hover: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: flex-start;
  max-height: ${({ hover }) => (hover ? "100px" : "0px")};
  opacity: ${({ hover }) => (hover ? 1 : 0)};
  transition: all 0.5s ease;
`;

export const Chip = styled.div`
  background-color: #e3f9fa;
  color: #006064;
  border-radius: 16px;
  padding: 4px 12px;
  font-size: 0.8rem;
  white-space: nowrap;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TagGroup = styled.span`
  display: flex;
  gap: 8px;
  cursor: default;
`;