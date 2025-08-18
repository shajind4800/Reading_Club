import React, { useEffect, useRef, useState } from "react";
import { List, Dialog, Tooltip, Alert } from "@mui/material";

import { Member } from "../../types/types";
import { MemberForm } from "../MemberForm/MemberForm";
import {
  PageWrapper,
  Footer,
  LoaderOverlay,
  AddButton,
  StyledSnackbar,
  StyledDialogContent,
} from "./AdminPage.styles";
import MemberListItem from "./MemberListItem";
import { useFetchContext } from "../../context/FetchContext";
import AddIcon from "@mui/icons-material/Add";
import { EmptyState } from "../EmptyState/EmptyState";
import { ClipLoader } from "react-spinners";

export const AdminPage: React.FC = () => {
  const {
    members,
    loading,
    error,
    loadMembers,
    totalMembers,
    add,
    update,
    remove,
    books,
  } = useFetchContext();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Member | null>(null);
  const [clubMembers, setClubMembers] = useState<Member[]>([]);
  const [page, setPage] = useState<number>(1);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  useEffect(() => {
    if (members && members.length) {
      setClubMembers((prev) => [...prev, ...members]);
      loadingRef.current = false;
    }
  }, [members]);

  useEffect(() => {
    if (page > 1 && clubMembers.length < totalMembers) {
      loadMembers(page);
    }
  }, [page]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isBottom = scrollTop + clientHeight >= scrollHeight;

      if (
        !loadingRef.current &&
        clubMembers.length < totalMembers &&
        isBottom
      ) {
        setPage((prev) => prev + 1);
        loadingRef.current = true;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [clubMembers, totalMembers]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    if (error != null && error) {
      setSnackbarMessage("Error occurred while performing action..");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  }, [error]);

  const handleSave = (data: any) => {
    if (editing) {
      update({ ...editing, books: data.books });
      setSnackbarMessage("Member book details have been updated successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } else {
      add({
        username: data.username,
        email: data.email,
        books: data.books,
        profileImage: data.profileImage,
        membershipStart: new Date().toISOString(),
      });
      setSnackbarMessage("Mmeber has been added to the club!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    }
    setClubMembers([]);
    setPage(1);
    loadMembers(1);
    setDialogOpen(false);
    setEditing(null);
  };

  return (
    <React.Fragment>
      {loading && (
        <LoaderOverlay>
          <ClipLoader size={50} />
        </LoaderOverlay>
      )}
      {!totalMembers && !loading ? (
        <EmptyState message={"No active members in the club currently!"} />
      ) : (
        <PageWrapper ref={scrollContainerRef}>
          {loading ||
            (loadingRef.current && (
              <LoaderOverlay>
                <ClipLoader size={50} />
              </LoaderOverlay>
            ))}
          <List>
            {clubMembers.map((member) => (
              <MemberListItem
                key={member.id}
                member={member}
                onEdit={() => {
                  setEditing(member);
                  setDialogOpen(true);
                }}
                onDelete={() => {
                  remove(member.id);
                  setSnackbarMessage("Member has been removed from the club.");
                  setSnackbarSeverity("error");
                  setSnackbarOpen(true);
                  setClubMembers([]);
                }}
              />
            ))}
          </List>

          <Footer>
            <Tooltip title="Add Member" placement="left">
              <AddButton onClick={() => setDialogOpen(true)}>
                <AddIcon />
              </AddButton>
            </Tooltip>
          </Footer>

          <Dialog
            open={dialogOpen}
            onClose={() => {
              setDialogOpen(false);
              setEditing(null);
            }}
          >
            <StyledDialogContent>
              <MemberForm
                booksList={books}
                initialData={editing || undefined}
                onSubmit={handleSave}
                onDialogClose={() => {
                  setDialogOpen(false);
                  setEditing(null);
                }}
                title={editing ? "Edit Member" : "Add Member"}
              />
            </StyledDialogContent>
          </Dialog>
          <StyledSnackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={handleSnackbarClose}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity={snackbarSeverity}
              variant="filled"
            >
              {snackbarMessage}
            </Alert>
          </StyledSnackbar>
        </PageWrapper>
      )}
    </React.Fragment>
  );
};
