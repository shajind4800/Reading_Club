import { FetchState, FetchAction } from "../types/types";

export const appReducer = (
  state: FetchState,
  action: FetchAction
): FetchState => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SET_MEMBERS":
      return {
        ...state,
        members: action.payload.data,
        totalMembers: action.payload.total,
        loading: false,
        error: null,
      };
    case "ADD_MEMBER":
      return {
        ...state,
        members: [...state.members, action.payload],
        loading: false,
      };
    case "UPDATE_MEMBER":
      return {
        ...state,
        loading: false,
        members: state.members.map((m) =>
          m.id === action.payload.id ? action.payload : m
        ),
      };
    case "DELETE_MEMBER":
      return {
        ...state,
        loading: false,
        members: state.members.filter((m) => m.id !== action.payload),
      };
    case "SET_BOOKS":
      return { ...state, books: action.payload, loading: false, error: null };
    case "ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
