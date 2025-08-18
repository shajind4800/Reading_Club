
import styled from '@emotion/styled';

export const FormHeading = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #ea763f;
  text-align : center;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 16px;
  color: white;
  margin-bottom: 8px;
  text-align: left;
`;

export const FormInput = styled.input<{ disabled: boolean }>`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-shadow: inset 0 2px 4px #0000001a;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 8px rgba(52, 152, 219, 0.3);
  }
`;

export const SubmitButton = styled.button<{ disabled: boolean }>`
  background: #ea763f;
  padding: 14px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 50px;

   &:hover {
    background: #d65e2c;
  }
`;

export const FormContainer = styled.form`
  position: relative;  
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: visible;
`;

export const PreviewImage = styled.img`
  width: 100px;
  margin-top: 8px;
  border-radius: 8px;
  object-fit: cover;
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background-color: #424242;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #424242;
  }
`;

export const FormWrapper = styled.div`
display: flex;
justify-content: center;
align-items:center;
`