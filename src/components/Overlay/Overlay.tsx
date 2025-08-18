import React from 'react';

import { OverlayContainer, OverlayIcon } from './Overlay.styles';
import { Alert } from '@mui/material';
import { faPersonDrowning } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface OverlayProps {
  message: string;
}

export const Overlay: React.FC<OverlayProps> = ({ message }) => {
  return (
    <OverlayContainer>
      <OverlayIcon icon={faPersonDrowning as IconProp} size="10x" />
      <Alert title='Error' severity="error">
        {message}
      </Alert>
    </OverlayContainer>
  );
};
