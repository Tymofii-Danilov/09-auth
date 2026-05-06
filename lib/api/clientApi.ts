import axios from "axios";
import type { CreateNote, Note, RegisterRequest, User } from "@/types/note";
import { nextServer } from "./api";

const key = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.headers.common["Authorization"] = `Bearer ${key}`;

interface Response {
  notes: Note[];
  totalPages: number;
}

interface FetchNotesProps {
  query: string;
  page: number;
  perPage: number;
  tag?: string;
}

export async function fetchNotes({
  query,
  page,
  perPage,
  tag,
}: FetchNotesProps): Promise<Response> {
  const response = await nextServer.get<Response>(`/notes`, {
    params: {
      search: query,
      page,
      perPage,
      tag,
    },
  });

  return response.data;
}

export async function createNote({
  title,
  content,
  tag,
}: CreateNote): Promise<Note> {
  const response = await nextServer.post<Note>(`/notes`, {
    title,
    content,
    tag,
  });
  return response.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const response = await nextServer.delete<Note>(`/notes/${id}`);
  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const response = await nextServer.get<Note>(`/notes/${id}`);
  return response.data;
}

export async function register(data: RegisterRequest) {
  const res = await nextServer.post<User>(`/auth/register`, data);
  return res.data;
}
