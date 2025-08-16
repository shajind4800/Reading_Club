import { Tooltip } from "@mui/material";
import { useState } from "react";
import {
  Card,
  AvatarImage,
  EmailText,
  TagsContainer,
  Chip,
  TagGroup,
} from "./MemberCard.styles";
import { Book } from "../../types/types";

interface Props {
  profileImage: string;
  username: string;
  email: string;
  books: string[];
}

export const MemberCard : React.FC<Props> = ({
  profileImage,
  username,
  email,
  books,
}) =>{
  const [hover, setHover] = useState<boolean>(false);

  const visibleTags : Book[] = books.slice(0, 2);
  const hiddenTags : Book[] = books.slice(2);

  return (
    <Card onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <AvatarImage src={profileImage} alt="avatar" />
      <EmailText>{username}</EmailText>
      <EmailText>{email}</EmailText>

      <TagsContainer hover={hover}>
        {books.length < 3 ? (
          books.map((tag, i) => (
            <Tooltip key={i} title={tag} arrow>
              <Chip>{tag}</Chip>
            </Tooltip>
          ))
        ) : (
          <TagGroup>
            {visibleTags.map((tag, i) => (
              <Tooltip key={i} title={tag} arrow>
                <Chip>{tag}</Chip>
              </Tooltip>
            ))}
            <Tooltip
              title={
                <div>
                  {hiddenTags.map((tag, i) => (
                    <div key={i}>{tag}</div>
                  ))}
                </div>
              }
              arrow
            >
              <Chip>+{hiddenTags.length}</Chip>
            </Tooltip>
          </TagGroup>
        )}
      </TagsContainer>
    </Card>
  );
}
