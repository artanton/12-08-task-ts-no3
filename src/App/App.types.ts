export interface Task {
    _id: string;
     text: string;
     date: string;
     parentId: string;
     subLevel: number;
  };
  
  
export  interface State {
    tasks: Task[];
    isLoading: boolean;
    error: null|string|unknown;
  };

  export interface UpdateTaskPayload {
    taskId: string;
    text: string;
  };

  export interface CreateTaskPayload {
   
     text: string;
     date: string;
     parentId: string;
     subLevel: number;
  };




