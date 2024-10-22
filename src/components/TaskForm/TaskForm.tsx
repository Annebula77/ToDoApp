import { TextField, Button, Snackbar, Alert } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useTaskForm } from './useTaskForm';
import { type CreateTodoModel } from '../../models/createRequestSchema';
import { type EditTodoModel } from '../../models/editRequestSchema';

interface TaskFormProps {
  task?: CreateTodoModel | EditTodoModel;
  onSubmit: (taskData: { title: string; description: string; dueDate: string | null }) => void;
}

const TaskForm = ({ task, onSubmit }: TaskFormProps) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    dueDate,
    setDueDate,
    titleError,
    descriptionError,
    snackbarOpen,
    snackbarMessage,
    handleSubmit,
    handleSnackbarClose,
    dueDateError,
    validateDueDate,
  } = useTaskForm({ task, onSubmit });

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-2">
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => {
            const value = e.target.value;
            setTitle(value);
          }}
          required
          error={!!titleError}
          helperText={titleError || 'Up to 200 characters. Only letters, numbers, and punctuation allowed.'}
        />
        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => {
            const value = e.target.value;
            setDescription(value);
          }}
          multiline
          rows={4}
          error={!!descriptionError}
          helperText={descriptionError || 'Up to 700 characters.'}
        />
        <DatePicker
          label="Due Date"
          value={dueDate}
          onChange={(newValue) => {
            setDueDate(newValue);
            validateDueDate(newValue);
          }}
          slotProps={{
            textField: {
              error: !!dueDateError,
              helperText: dueDateError || 'Please select a due date.',
              fullWidth: true,
            },
          }}
        />
        <Button type="submit" variant="contained" color="primary" className="w-1/2 self-center" sx={{ py: 2, mt: 4 }}>
          {task ? 'Update Task' : 'Create Task'}
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default TaskForm;
