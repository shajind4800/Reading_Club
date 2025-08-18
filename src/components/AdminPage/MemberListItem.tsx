import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Tooltip,
} from "@mui/material";
import React from "react";
import { Member } from "../../types/types";
import {
  SecondaryText,
  StyledDeleteIcon,
  StyledEditIcon,
} from "./AdminPage.styles";

interface Props {
  member: Member;
  onEdit: () => void;
  onDelete: () => void;
}

const MemberListItem: React.FC<Props> = ({ member, onEdit, onDelete }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={member.profileImage} />
      </ListItemAvatar>

      <ListItemText
        primary={`${member.username} (${member.email})`}
        secondary={
          <SecondaryText
            title={member.books.map(({ title }) => title).join(", ")}
          >
            Books: {member.books.map(({ title }) => title).join(", ")}
          </SecondaryText>
        }
      />

      <Tooltip title="Edit">
        <IconButton onClick={onEdit}>
          <StyledEditIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        <IconButton onClick={onDelete}>
          <StyledDeleteIcon />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};

export default MemberListItem;
