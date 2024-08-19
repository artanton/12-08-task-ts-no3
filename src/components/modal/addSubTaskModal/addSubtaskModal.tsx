// import { useDispatch } from 'react-redux';
// import { updateTask } from '../../../redux/operators';
// import { ModalButton, TextInput } from './editModalStyled';
import { IaddSubTaskModal } from '../../../App/App.types';
import { TaskForm } from '../../taskForm/taskForm';



export const AddSubTaskModal:React.FC<IaddSubTaskModal> = ({ _id, onClose, subLevel, }) => {
 

  return (
    <div>
      <h2
        style={{
          padding: 10,
        }}
      >
        Add SubTask
      </h2>

      <TaskForm parentId ={ _id} onClose={onClose} subLevel={subLevel} />
    </div>
  );
};
