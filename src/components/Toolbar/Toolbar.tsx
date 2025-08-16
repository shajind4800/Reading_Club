import React from 'react';
import { LogoIcon } from '../../assets/LogoIcon';
import { AuthButton } from '../AuthButton';
import {
  ToolbarContainer,
  ToolbarLeft,
  LogoWrapper,
  Title,
  AuthButtonWrapper
} from './Toolbar.styles';

const Toolbar = () => {
  return (
    <ToolbarContainer>
      <ToolbarLeft>
        <LogoWrapper>
          <LogoIcon />
        </LogoWrapper>
        <Title>Reading Club</Title>
      </ToolbarLeft>
      <AuthButtonWrapper>
        <AuthButton />
      </AuthButtonWrapper>
    </ToolbarContainer>
  );
};

export default Toolbar;
