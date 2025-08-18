import styled from "styled-components";
import { Box, DialogContent, Fab, Snackbar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const PageWrapper = styled(Box)`
  height: calc(100vh - 56px);
  background-color: #222;
  overflow: auto;
  color: white;
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
`;

export const SecondaryText = styled.div`
  color: white;
  max-width: 650px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
`;

export const LoaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddButton = styled(Fab)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
`;

export const StyledSnackbar = styled(Snackbar)`
  z-index: 9999;
`;

export const StyledDialogContent = styled(DialogContent)`
  background: #424242;
`;

export const StyledEditIcon = styled(EditIcon)`
  color: #4fc3f7;
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
  color: #ef5350;
`;
