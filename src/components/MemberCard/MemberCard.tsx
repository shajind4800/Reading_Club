import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
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
  books: Book[];
}

export const MemberCard : React.FC<Props> = ({
  profileImage,
  username,
  email,
  books,
}) =>{
  const [hover, setHover] = useState<boolean>(false);
  const [bookList , setBookList] = useState<string[]>([])

  useEffect(()=>{
    setBookList(books.map(({title})=>title))
  },[books])


  return (
    <Card onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <AvatarImage src={profileImage} alt="https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-illustration-2470054311" />
      <EmailText>{username}</EmailText>
      <EmailText>{email}</EmailText>

      <TagsContainer hover={hover}>
        {bookList.length < 3 ? (
          bookList.map((tag, i) => (
            <Tooltip key={i} title={tag} arrow>
              <Chip>{tag}</Chip>
            </Tooltip>
          ))
        ) : (
          <TagGroup>
            {bookList.slice(0, 2).map((tag, i) => (
              <Tooltip key={i} title={tag} arrow>
                <Chip>{tag}</Chip>
              </Tooltip>
            ))}
            <Tooltip
              title={
                <div>
                  {bookList.slice(2).map((tag, i) => (
                    <div key={i}>{tag}</div>
                  ))}
                </div>
              }
              arrow
            >
              <Chip>+{bookList.slice(2).length}</Chip>
            </Tooltip>
          </TagGroup>
        )}
      </TagsContainer>
    </Card>
  );
}
