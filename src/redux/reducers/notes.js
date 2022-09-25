import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createNoteApi,
  deleteNoteApi,
  getAllNotesApi,
  updateNoteApi,
} from "../../apis/note-apis";
import { NOTES_FILTER } from "../../constants";

export const getUserNotes = createAsyncThunk(
  "notes/getAllNotesApi",
  async (_, { getState }) => {
    const notesFilter = getState().notes.notesFilter;
    const data = await getAllNotesApi(notesFilter);
    return data;
  }
);

export const saveNote = createAsyncThunk(
  "notes/saveNote",
  async (noteDetails, { dispatch }) => {
    const data =
      noteDetails.id === "dummy"
        ? await createNoteApi(noteDetails)
        : await updateNoteApi(noteDetails);
    dispatch(updateNote(data));
    return data;
  }
);

export const deleteNote = createAsyncThunk(
  "notes/removeNote",
  async (noteId, { dispatch }) => {
    if (noteId !== "dummy") {
      await deleteNoteApi(noteId);
    }
    dispatch(removeNote(noteId));
  }
);

const setDefaultNotesFilter = () => {
  const notesFilterObj = {};
  Object.keys(NOTES_FILTER).forEach((filterKey) => {
    notesFilterObj[filterKey] = NOTES_FILTER[filterKey].value;
  });
  return notesFilterObj;
};

export const notes = createSlice({
  name: "notes",
  initialState: {
    loading: false,
    noteList: [],
    notesFilter: setDefaultNotesFilter(),
  },
  reducers: {
    addNote: (state, { payload }) => {
      const note = {
        id: "dummy",
        text: "",
        priority: 3,
      };
      const index = state.noteList.findIndex((note) => note.id === "dummy");
      if (index > -1) {
        state.noteList[index] = note;
      } else {
        state.noteList = [...state.noteList, note];
      }
    },
    updateNote: (state, { payload }) => {
      const noteIndex = state.noteList.findIndex(
        (note) => note.id === payload.id
      );
      const note = {
        id: payload.id,
        text: payload.text,
        priority: payload.priority,
      };
      if (noteIndex > -1) {
        state.noteList[noteIndex] = note;
      } else {
        state.noteList = [...state.noteList, note];
      }
    },
    removeNote: (state, { payload }) => {
      state.noteList = state.noteList.filter((note) => note.id !== payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserNotes.fulfilled, (state, { payload }) => {
        if (payload?.length) {
          state.noteList = Array.from(new Set([...state.noteList, ...payload]));
        }
        state.loading = false;
      })
      .addCase(getUserNotes.rejected, (state) => {
        state.loading = false;
      });
  },
});
const { actions, reducer } = notes;

export const { addNote, updateNote, removeNote } = actions;
export default reducer;
