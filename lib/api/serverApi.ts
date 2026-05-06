import { Note } from "@/types/note";
import { nextServer } from "./api";

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
