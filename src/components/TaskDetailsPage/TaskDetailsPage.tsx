import TaskForm from '../TaskForm/TaskForm';
import { useGetTodoByIdQuery, useUpdateTodoMutation } from '../../store/api/apiSlice';
import { useParams } from 'react-router-dom';
import { type EditTodoModel } from '../../models/editRequestSchema';
import { CircularProgress, Paper, Typography } from '@mui/material';



const TaskDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: task, isLoading, isError } = useGetTodoByIdQuery(id);
  const [updateTodo] = useUpdateTodoMutation();

  const handleSubmit = async (taskData: { title: string; description: string; dueDate: string | null }) => {
    if (!task) return;
    const updatedTask: EditTodoModel = {
      ...task,
      ...taskData,
      updatedAt: new Date().toISOString(),
    };
    await updateTodo({ id, ...updatedTask });
  };


  if (isLoading) {
    return (
      <section className='w-full h-screen flex items-center justify-center'>
        <CircularProgress />
      </section>

    );
  }

  if (isError) {
    <section className='w-full h-screen flex items-center justify-center'>
      return <Typography component='h1' color="error">Error loading tasks</Typography>;
    </section>
  }

  return (
    <Paper sx={{
      p: 8,
      gap: 6,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div className='flex justify-between'>
        <Typography component="h1" variant="h3"> Details</Typography>
        <Typography component="h2" variant="h6" color='secondary'> Status: {task?.isCompleted ? 'Completed' : 'Not completed'}</Typography>
      </div>
      <TaskForm task={task} onSubmit={handleSubmit} />
    </Paper >
  );
};

export default TaskDetailsPage;
