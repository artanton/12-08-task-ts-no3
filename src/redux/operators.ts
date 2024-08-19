import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Task} from '../App/App.types';


axios.defaults.baseURL = 'https://recursive-todo-api.onrender.com/api';

// axios.defaults.baseURL = 'https://668c2ba00b61b8d23b0ca4de.mockapi.io';

export const fetchTasks = createAsyncThunk < Task[]> (
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');

      return response.data;
    } catch (e: unknown) {
      if (e instanceof Error) {
       
        return thunkAPI.rejectWithValue(e.message);
      } else {
       
        return thunkAPI.rejectWithValue('An unknown error occurred');
      }
    }
    }
);

export const addTask = createAsyncThunk<Task, Partial<Task>, { rejectValue: string }>(
  'tasks/addTask',
  async ({ text, date, parentId, subLevel }, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', { text, date, parentId, subLevel });
      return response.data;
    } catch (e: unknown) {
      if (e instanceof Error) {
       
        return thunkAPI.rejectWithValue(e.message);
      } else {
       
        return thunkAPI.rejectWithValue('An unknown error occurred');
      }
    }}
);

export const deleteTask = createAsyncThunk<  { _id: string; message: string }, Partial<Task>, { rejectValue: string }>(
  'tasks/deleteTask',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${_id}`);
      return response.data;
    } catch (e: unknown) {
      if (e instanceof Error) {
       
        return thunkAPI.rejectWithValue(e.message);
      } else {
        
        return thunkAPI.rejectWithValue('An unknown error occurred');
      }
    }}
);

export const updateTask = createAsyncThunk<Task, Partial<Task>, { rejectValue: string }>(
  'tasks/updateTask',

  async ({ _id, text }, thunkAPI) => {
    
    try {
      const response = await axios.put(`/tasks/${_id}`, { text });
      return response.data;
    } catch (e: unknown) {
      if (e instanceof Error) {
     
        return thunkAPI.rejectWithValue(e.message);
      } else {
        
        return thunkAPI.rejectWithValue('An unknown error occurred');
      }
    }}
);
