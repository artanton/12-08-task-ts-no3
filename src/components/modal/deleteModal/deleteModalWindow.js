import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { deleteTask, fetchTasks } from '../../../redux/operators';
// import { groupTasksByParentId } from '../../../helper/helper';
import { ModalButton } from './modalStyledWindow';

// import { selectTask } from '../../../redux/selectors';

export const DeleteConfirmationModal = ({ _id, onClose }) => {
  const dispatch = useDispatch();
  // console.log(typeof (taskId));


  const handleDelete = async () => {
    try {
      await dispatch(deleteTask(_id)).unwrap();
      
      dispatch(fetchTasks());
    } catch (error) {

      console.error('Error deleting task:', error);
    }

    onClose();
  };


  return (
    <div>
      <p>Are you sure you want to delete this task?</p>
      <div>
        <ModalButton onClick={handleDelete}>Yes</ModalButton>
        <ModalButton onClick={onClose}>No</ModalButton>
      </div>
    </div>
  );
};
