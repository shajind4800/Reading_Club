import { createContext, useState, useEffect, ReactNode } from "react";
import { Book, FetchContextProps, Member } from "../types/types";

export const FetchContext = createContext<FetchContextProps>({
  members: [],
  totalMemeberCount : 0,
  nextPage : 0,
  books: [],
});

export const FetchProvider = ({ children }: { children: ReactNode }) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [totalRows , setTotalRows] = useState<number>(0);
  const [page , setPage] = useState<number>(1);

  useEffect(() => {
    loadMembers();
    loadBooks();
  },[]);

  const loadMembers = () => {
    fetch(`http://localhost:3001/members?_sort=membershipStart&_order=asc&_page=${page}&_per_page=50`)
      .then((res) => res.json())
      .then((result) => {
        setMembers(result.data);
        setTotalRows(1000)
        setPage(prev=>prev++)
      })
      .catch((err) => console.log(err));
  };
  const loadBooks = () => {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <FetchContext.Provider value={{ members, books ,nextPage : page ,totalMemeberCount:totalRows }}>
      {children}
    </FetchContext.Provider>
  );
};
