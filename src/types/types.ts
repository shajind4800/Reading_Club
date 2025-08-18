export interface Member {
  id: number;
  username: string;
  email: string;
  books: Book[];
  membershipStart: string;
  profileImage: string;
}

export interface Book {
  id: number;
  title: string;
}

export interface FetchContextProps {
  members: Member[];
  totalMemeberCount: number;
  nextPage: number;
  books: Book[];
}

export interface AppContextProps {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}

export type AuthState = {
  isAuthenticated: boolean;
};

export type AuthAction = { type: "LOGIN" } | { type: "LOGOUT" };

export interface Option {
  id: any;
  value: string;
  label: string;
}

export type FetchState = {
  members: Member[];
  books: Book[];
  totalMembers: number;
  loading: boolean;
  error: string | null;
};

export type FetchAction =
  | { type: "SET_MEMBERS"; payload: { data: Member[]; total: number } }
  | { type: "ADD_MEMBER"; payload: Member }
  | { type: "UPDATE_MEMBER"; payload: Member }
  | { type: "DELETE_MEMBER"; payload: number }
  | { type: "SET_BOOKS"; payload: Book[] }
  | { type: "LOADING" }
  | { type: "ERROR"; payload: string };
