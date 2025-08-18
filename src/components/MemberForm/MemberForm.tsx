import React, { useState, useEffect } from "react";
import { Book, Member, Option } from "../../types/types";

import {
  CloseButton,
  FormContainer,
  FormGroup,
  FormHeading,
  FormInput,
  FormLabel,
  FormWrapper,
  PreviewImage,
  SubmitButton,
} from "./MemberForm.styles";
import { Select } from "../Select/Select";


interface Props {
  booksList: Book[];
  initialData?: Member;
  title: string;
  onSubmit: (
    data: Omit<Member, "id" | "membershipStart"> &
      Partial<Pick<Member, "membershipStart">>
  ) => void;
  onDialogClose: () => void;
}

export const MemberForm: React.FC<Props> = ({
  booksList,
  initialData,
  onSubmit,
  title,
  onDialogClose,
}) => {
  const [username, setUsername] = useState<string>(initialData?.username || "");
  const [email, setEmail] = useState<string>(initialData?.email || "");
  const [bookOptions, setBookOptions] = useState<Option[]>([]);
  const [,setProfileImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    initialData?.profileImage || null
  );
  const [selectedBooks, setSelectedBooks] = useState<Option | Option[]>(
    initialData?.books?.map(({ id, title }) => ({
      id,
      label: title,
      value: title,
    })) || []
  );
  
  useEffect(() => {
    setBookOptions(
      booksList.map((book, key) => ({
        id: book.id,
        label: book.title,
        value: book.title,
      }))
    );
  }, [booksList]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onClose = () => {
    setUsername("");
    setEmail("");
    setPreviewUrl("");
    setSelectedBooks([]);
    onDialogClose();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      username,
      email,
      profileImage: previewUrl || "",
      books: Array.isArray(selectedBooks)
        ? selectedBooks.map(({ id, label }) => ({ id, title: label }))
        : [{ id: selectedBooks.id, title: selectedBooks.label }],
      membershipStart: initialData?.membershipStart,
    });
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <FormWrapper>
        {onClose && (
          <CloseButton type="button" onClick={onClose} aria-label="Close Form">
            &times;
          </CloseButton>
        )}
      </FormWrapper>
      <FormHeading>{title}</FormHeading>

      <FormGroup>
        <FormLabel htmlFor="username">Username</FormLabel>
        <FormInput
          id="username"
          value={username}
          onChange={(e: any) => {
            setUsername(e.target.value.trim());
          }}
          placeholder="Enter username..."
          disabled={!!initialData}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <FormInput
          id="email"
          type="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value.trim())}
          pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
          placeholder="Enter email address..."
          disabled={!!initialData}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="books">Books</FormLabel>
        <Select
          options={bookOptions}
          placeholder="Select books here..."
          onChange={(selected) => selected && setSelectedBooks(selected)}
          selectedOption={selectedBooks}
          isMulti
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="avatar">Profile Image</FormLabel>
        <FormInput
          id="avatar"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleImageChange}
          disabled={!!initialData}
        />
        {previewUrl && <PreviewImage src={previewUrl} alt="Profile Preview" />}
      </FormGroup>

      <SubmitButton
        disabled={!username || !email || (Array.isArray(selectedBooks) ? !selectedBooks.length : !selectedBooks)}
        type="submit"
      >
        {title.split(" ")[0]}
      </SubmitButton>
    </FormContainer>
  );
};
