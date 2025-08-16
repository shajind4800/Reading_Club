import { useNavigate } from 'react-router-dom';
import { LogoIcon } from '../../assets/LogoIcon';
import { AuthButton } from '../AuthButton';
import {
  ToolbarContainer,
  ToolbarLogoContainer,
  LogoWrapper,
  Title,
  AuthButtonWrapper
} from './Toolbar.styles';

const Toolbar = () => {
  const navigate = useNavigate();
  return (
    <ToolbarContainer>
      <ToolbarLogoContainer onClick={()=>navigate('/')}>
        <LogoWrapper>
          <LogoIcon />
        </LogoWrapper>
        <Title>Reading Club</Title>
      </ToolbarLogoContainer>
      <AuthButtonWrapper>
        <AuthButton />
      </AuthButtonWrapper>
    </ToolbarContainer>
  );
};

export default Toolbar;
