import { httpsCall } from "./httpsCall";

export const getAllNotesApi = async (notesFilter) => {
  const url = "notes/";
  const body = {
    limit: "25",
    offset: notesFilter.page + 1,
  };
  const response = await httpsCall("get", url, body);
  return response.data.data;
};

export const getNoteApi = async (noteId) => {
  const url = `notes/${noteId}`;
  const response = await httpsCall("get", url, {});
  return response.data.data;
};

export const createNoteApi = async (noteDetails) => {
  const url = "notes/";
  const body = {
    text: noteDetails.text,
    priority: noteDetails.priority,
  };

  const response = await httpsCall("post", url, body);
  return response.data.data;
};

export const updateNoteApi = async (noteDetails) => {
  const url = `notes/${noteDetails.id}`;
  const body = {
    text: noteDetails.text,
    priority: noteDetails.priority,
  };

  const response = await httpsCall("patch", url, body);
  return response.data.data;
};

export const deleteNoteApi = async (noteId) => {
  const url = `notes/${noteId}`;
  const response = await httpsCall("delete", url, {});
  return response.data;
};
