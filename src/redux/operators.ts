import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CreateTaskPayload, Task, UpdateTaskPayload } from '../App/App.types';


axios.defaults.baseURL = 'https://recursive-todo-api.onrender.com/api';

// axios.defaults.baseURL = 'https://668c2ba00b61b8d23b0ca4de.mockapi.io';

export const fetchTasks = createAsyncThunk (
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
    }}
);

export const addTask = createAsyncThunk<Task, CreateTaskPayload, { rejectValue: string }>(
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

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId:string, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (e: unknown) {
      if (e instanceof Error) {
       
        return thunkAPI.rejectWithValue(e.message);
      } else {
        
        return thunkAPI.rejectWithValue('An unknown error occurred');
      }
    }}
);

export const updateTask = createAsyncThunk<Task, UpdateTaskPayload, { rejectValue: string }>(
  'tasks/updateTask',

  async ({ taskId, text }, thunkAPI) => {
    
    try {
      const response = await axios.put(`/tasks/${taskId}`, { text });
      return response.data;
    } catch (e: unknown) {
      if (e instanceof Error) {
     
        return thunkAPI.rejectWithValue(e.message);
      } else {
        
        return thunkAPI.rejectWithValue('An unknown error occurred');
      }
    }}
);
