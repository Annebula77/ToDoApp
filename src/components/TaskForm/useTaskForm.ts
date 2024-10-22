import { useState, useEffect } from 'react';
import { type EditTodoModel } from '../../models/editRequestSchema';
import { type CreateTodoModel } from '../../models/createRequestSchema';
import { isBefore, startOfToday } from 'date-fns';

interface UseTaskFormProps {
  task?: CreateTodoModel | EditTodoModel;
  onSubmit: (taskData: { title: string; description: string; dueDate: string | null }) => void;
}

export const useTaskForm = ({ task, onSubmit }: UseTaskFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [dueDateError, setDueDateError] = useState('');

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title ?? '');
      setDescription(task.description ?? '');
      setDueDate(task.dueDate ? new Date(task.dueDate) : null);
    }

    return () => {
      setTitle('');
      setDescription('');
      setDueDate(null);
    };
  }, [task]);

  const validateTitle = (value: string): boolean => {
    const regex = /^[a-zA-Z0-9\s.,;:!?'-]{1,200}$/;
    if (!regex.test(value)) {
      setTitleError('Title can only contain letters, numbers, punctuation, and must be less than 200 characters.');
      return false;
    }
    setTitleError('');
    return true;
  };

  const validateDescription = (value: string): boolean => {
    if (value.length > 700) {
      setDescriptionError('Description cannot exceed 700 characters.');
      return false;
    }
    setDescriptionError('');
    return true;
  };

  const validateDueDate = (date: Date | null) => {
    if (date && isBefore(date, startOfToday())) {
      setDueDateError('Due date cannot be earlier than today.');
      return false;
    }
    setDueDateError('');
    return true;
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateTitle(title) && validateDescription(description) && validateDueDate(dueDate)) {
      onSubmit({
        title,
        description,
        dueDate: dueDate ? dueDate.toISOString() : null,
      });


      setSnackbarMessage(task ? 'Task updated successfully!' : 'Task created successfully!');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return {
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
    validateTitle,
    validateDescription,
    dueDateError,
    validateDueDate,
  };
};
