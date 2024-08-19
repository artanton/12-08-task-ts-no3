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

  export interface TaskItemProp {
    task: Omit <Task , "parentId">
    color:string;
  }

  export interface IaddSubTaskModal extends Pick<Task, "_id" | "subLevel">{
    
    onClose:()=> void
  }

 



