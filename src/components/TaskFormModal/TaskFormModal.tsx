import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import TaskForm from '../TaskForm/TaskForm';
import { useAddTodoMutation } from '../../store/api/apiSlice';
import { type CreateTodoModel } from '../../models/createRequestSchema';

interface TaskFormModalProps {
  open: boolean;
  onClose: () => void;
  task?: CreateTodoModel;
}

const TaskFormModal = ({ open, onClose, task }: TaskFormModalProps) => {
  const [addTodo] = useAddTodoMutation();


  const handleSubmit = async (taskData: { title: string; description: string; dueDate: string | null }) => {
    const newTask: CreateTodoModel = {
      ...taskData,
      isCompleted: false,
      id: null,
      createdAt: null,
      updatedAt: null,
    };
    await addTodo(newTask);
    onClose();
  };


  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Task</DialogTitle>
      <DialogContent className='w-full'>
        <TaskForm task={task} onSubmit={handleSubmit} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} >Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskFormModal;
