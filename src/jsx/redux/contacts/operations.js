import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { END_POINT, CONTACTS_SLICE } from './constants';
import {
  SUCCESS_ADD,
  ERR_ADD,
  SUCCESS_DELETE,
  ERR_DELETE,
  SUCCESS_UPDATE,
  ERR_UPDATE,
} from '../../notification/constants';
import { errNotify } from '../../notification/error-notify';
import { successNotify } from '../../notification/success-notify';

export const fetchContacts = createAsyncThunk(
  `${CONTACTS_SLICE}/fetchAll`,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(END_POINT);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  `${CONTACTS_SLICE}/addContact`,
  async (values, thunkAPI) => {
    try {
      const response = await axios.post(END_POINT, values);
      successNotify(SUCCESS_ADD);
      return response.data;
    } catch (error) {
      errNotify(ERR_ADD);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  `${CONTACTS_SLICE}/deleteContact`,
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${END_POINT}/${id}`);
      successNotify(SUCCESS_DELETE);
      return response.data;
    } catch (error) {
      errNotify(ERR_DELETE);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  `${CONTACTS_SLICE}/updateContact`,
  async (data, thunkAPI) => {
    try {
      console.log({ name: data.name, number: data.number });
      const response = await axios.patch(`${END_POINT}/${data.id}`, {
        name: data.name,
        number: data.number,
      });
      successNotify(SUCCESS_UPDATE);
      return response.data;
    } catch (error) {
      errNotify(ERR_UPDATE);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const saveUpdatingItemIndex = id => ({
  type: `${CONTACTS_SLICE}/saveUpdatingItem`,
  payload: id,
});
