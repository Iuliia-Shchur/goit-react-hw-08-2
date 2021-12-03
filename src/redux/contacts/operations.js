import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://619aad8627827600174452eb.mockapi.io";

const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const addContacts = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWidthValue }) => {
    try {
      const resp = await axios.delete(`/contacts/${contactId}`);
      if (resp.status === 200) {
        return contactId;
      } else {
        throw new Error({ message: "error" });
      }
    } catch (error) {
      rejectWidthValue(error.message);
    }
  }
);

const operations = { addContacts, deleteContacts, fetchContacts };

export default operations;
