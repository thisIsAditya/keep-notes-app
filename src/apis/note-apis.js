import { httpsCall } from "./httpsCall";

export const getAllNotes = async (notesFilter) => {
  const url = "/";
  const body = {
    limit: "25",
    offset: notesFilter.page + 1,
  };

  const response = await httpsCall("get", url, body);
  return response.data.data;
};

export const getNote = async (noteId) => {
  const url = `/${noteId}`;
  const response = await httpsCall("get", url, {});
  return response.data.data;
};

export const createNote = async (noteDetails) => {
  const url = "/";
  const body = {
    text: noteDetails.text,
    priority: noteDetails.priority,
  };

  const response = await httpsCall("post", url, body);
  return response.data.data;
};

export const updateNote = async (noteDetails) => {
  const url = `/${noteDetails.id}`;
  const body = {
    text: noteDetails.text,
    priority: noteDetails.priority,
  };

  const response = await httpsCall("patch", url, body);
  return response.data.data;
};

export const deleteNote = async (noteId) => {
  const url = `/${noteId}`;
  const response = await httpsCall("delete", url, {});
  return response.data;
};
