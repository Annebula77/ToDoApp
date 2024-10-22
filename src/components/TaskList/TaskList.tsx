import { useGetTodosQuery, useUpdateTodoMutation, useDeleteTodoMutation } from '../../store/api/apiSlice';
import { Tabs, Tab, CircularProgress, Typography } from '@mui/material';
import { type CreateTodoModel } from '../../models/createRequestSchema';
import TaskListRender from '../TaskListRender/TaskListRender';
import { useState } from 'react';

const TaskList = () => {
  const { data: tasks, isLoading, isError } = useGetTodosQuery({});
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [tabValue, setTabValue] = useState(0);

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

  const handleToggleComplete = async (task: CreateTodoModel) => {
    const { id, ...rest } = task;
    await updateTodo({ id, ...rest, isCompleted: !task.isCompleted });
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
  };

  const activeTasks = tasks.filter((task: CreateTodoModel) => !task.isCompleted);
  const completedTasks = tasks.filter((task: CreateTodoModel) => task.isCompleted);

  return (
    <div className='w-full flex flex-col items-center md:items-start'>
      <Tabs value={tabValue} onChange={(_, newValue) => setTabValue(newValue)} className="mb-4">
        <Tab label="Active Tasks" />
        <Tab label="Completed Tasks" />
      </Tabs>
      {tabValue === 0 && <TaskListRender taskList={activeTasks} handleToggleComplete={handleToggleComplete} handleDelete={handleDelete} />}
      {tabValue === 1 && <TaskListRender taskList={completedTasks} handleToggleComplete={handleToggleComplete} handleDelete={handleDelete} />}
    </div>
  );
};

export default TaskList;
