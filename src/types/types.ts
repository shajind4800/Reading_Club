export interface Member {
  id: number;
  username: string;
  email: string;
  books: Book[];
  membershipStart: string;
  profileImage: string;
}

export type Book = string;

export interface FetchContextProps {
  members: Member[];
  totalMemeberCount: number;
  nextPage: number;
  books: Book[];
}

export interface AppContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export type State = {
    isAuthenticated: boolean;
  };
  
export type Action = { type: "LOGIN" } | { type: "LOGOUT" };
  