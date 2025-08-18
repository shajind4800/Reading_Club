import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  color: #666;
  background: #222;
  height: calc(100vh - 56px);
`;

export const EmptyStateIcon = styled(FontAwesomeIcon)`
  color: #666;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
`;
