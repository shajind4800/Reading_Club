import React from 'react';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { EmptyStateContainer, EmptyStateIcon, Message } from './EmptyState.styles';

interface EmptyStateProps {
  message: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <EmptyStateContainer>
      <EmptyStateIcon icon={faFrown} size="8x" />
      <Message>{message}</Message>
    </EmptyStateContainer>
  );
};
