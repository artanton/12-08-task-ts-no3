import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchTasks, deleteTask, addTask, updateTask } from './operators';
import { State, Task } from '../App/App.types';
// import { RootState } from './store';



const initialState: State={
  tasks: [],
    isLoading: false,
    error: null,
}

 


const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers:{},

  extraReducers: builder => {
    builder

      // fetch

      .addCase(fetchTasks.pending, (state:State) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state:State, action: PayloadAction<Task[]>) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state:State, action: PayloadAction<unknown>) => {
        // console.log(typeof( action.payload));
        // console.log(action.payload);
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // add Task

      .addCase(addTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state:State, action: PayloadAction<Task>) => {
        state.isLoading = false;
        state.error = null;
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state:State, action: PayloadAction<unknown>) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // update Task

      .addCase(updateTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateTask.fulfilled, (state:State, action: PayloadAction<Task>) => {
        state.isLoading = false;
        state.error = null;
        const { _id, text } = action.payload;

        if (text) {
          const taskToUpdate = state.tasks.find(task => {
            return task._id === _id;
          });

          if (taskToUpdate) {
            taskToUpdate.text = text;
          }
        }
      })
      .addCase(updateTask.rejected, (state:State, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // delete tasks

      .addCase(deleteTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state: State, action: PayloadAction<{ _id: string; message: string }>) => {
        state.isLoading = false;
        state.error = null;
        console.log(action.payload);
        console.log(typeof (action.payload._id));
        
        const index = state.tasks.findIndex(
        
          tasks => tasks._id === action.payload._id
        );
        state.tasks.splice(index, 1);
      })
      
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const taskReducer = taskSlice.reducer;
