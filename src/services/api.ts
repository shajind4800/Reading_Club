import { APPLICATION_JSON, BASE_URL, BOOKS_URL, getMembersApiQuery, HTTP_METHODS, MEMBERS_URL, PATH_SEPARATOR } from "../constants/apiConstants";
import { Book, Member } from "../types/types";

export const fetchMembers = async (page: number, perPage: number = 50) => {
  const query : string = getMembersApiQuery(page ,perPage);
  const response = await fetch(
    `${BASE_URL}${MEMBERS_URL}${query}`
  );
  if (!response.ok) throw new Error("Failed to fetch members");
  const data = await response.json();
  return { data: data.data, total: data.items };
};

export const fetchBooks = async (): Promise<Book[]> => {
  const res = await fetch(`${BASE_URL}${BOOKS_URL}`);
  if (!res.ok) throw new Error("Failed to fetch books");
  return await res.json();
};

export const addMember = async (
  member: Omit<Member, "id">
): Promise<Member> => {
  const response = await fetch(`${BASE_URL}${MEMBERS_URL}`, {
    method: HTTP_METHODS.POST,
    headers: { "Content-Type" : APPLICATION_JSON },
    body: JSON.stringify(member),
  });
  if (!response.ok) throw new Error("Failed to add member");
  return await response.json();
};

export const updateMember = async (member: Member): Promise<Member> => {
  const response = await fetch(`${BASE_URL}${MEMBERS_URL}${PATH_SEPARATOR}${member.id}`, {
    method: HTTP_METHODS.PUT,
    headers: { "Content-Type": APPLICATION_JSON },
    body: JSON.stringify(member),
  });
  if (!response.ok) throw new Error("Failed to update member");
  return await response.json();
};

export const deleteMember = async (id: number): Promise<void> => {
  const response = await fetch(`${BASE_URL}${MEMBERS_URL}${PATH_SEPARATOR}${id}`, {
    method: HTTP_METHODS.DELETE,
  });
  if (!response.ok) throw new Error("Failed to delete member");
};
