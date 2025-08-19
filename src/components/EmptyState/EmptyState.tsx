import React from 'react';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { EmptyStateContainer, EmptyStateIcon, Message } from './EmptyState.styles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface EmptyStateProps {
  message: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <EmptyStateContainer>
      <EmptyStateIcon icon={faFrown as IconProp} size="8x" />
      <Message>{message}</Message>
    </EmptyStateContainer>
  );
};
