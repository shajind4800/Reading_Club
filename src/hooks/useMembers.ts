import { useReducer } from "react";
import {
  fetchMembers,
  addMember,
  deleteMember,
  updateMember,
  fetchBooks,
} from "../services/api";
import { appReducer } from "../reducer/appReducer";
import { Member, FetchState } from "../types/types";

const initialState: FetchState = {
  members: [],
  loading: true,
  error: null,
  totalMembers: 0,
  books: [],
};

export const useMembers = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const loadMembers = async (page = 1) => {
    dispatch({ type: "LOADING" });
    try {
      const { data, total } = await fetchMembers(page);
      dispatch({ type: "SET_MEMBERS", payload: { data, total } });
    } catch (err: any) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  };

  const loadBooks = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await fetchBooks();
      dispatch({ type: "SET_BOOKS", payload: data });
    } catch (err: any) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  };

  const add = async (member: Omit<Member, "id">) => {
    dispatch({ type: "LOADING" });
    const res = await addMember(member);
    dispatch({ type: "ADD_MEMBER", payload: res });
  };

  const update = async (member: Member) => {
    dispatch({ type: "LOADING" });
    const res = await updateMember(member);
    dispatch({ type: "UPDATE_MEMBER", payload: res });
  };

  const remove = async (id: number) => {
    dispatch({ type: "LOADING" });
    await deleteMember(id);
    dispatch({ type: "DELETE_MEMBER", payload: id });
  };

  return {
    ...state,
    loadMembers,
    loadBooks,
    add,
    update,
    remove,
  };
};
