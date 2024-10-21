import React, { useState } from 'react';
import { useGetTodosQuery, useUpdateTodoMutation, useDeleteTodoMutation } from '../../store/api/apiSlice';
import { List, ListItem, ListItemText, IconButton, Checkbox, Typography, CircularProgress, Tab, Tabs } from '@mui/material';
import { ReceiptText, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type CreateTodoModel } from '../../models/createRequestSchema';


const TaskList: React.FC = () => {
  const { data: tasks, isLoading, isError } = useGetTodosQuery({});
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [tabValue, setTabValue] = useState(0);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography color="error">Error loading tasks</Typography>;
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

  const renderTaskList = (taskList: CreateTodoModel[]) => (
    <List>
      {taskList.map((task: CreateTodoModel) => (
        <ListItem key={task.id} className="mb-2 bg-purple-100 rounded shadow">
          <Checkbox
            checked={task.isCompleted}
            onChange={() => handleToggleComplete(task)}
          />
          <ListItemText
            primary={task.title}
            secondary={
              task.dueDate
                ? `Deadline: ${new Date(task.dueDate).toLocaleDateString()}`
                : 'No deadline'
            }
          />
          <div className="flex gap-2 pr-4">
            {/* NOTE: Add page link here */}
            <IconButton edge="end" aria-label="edit" component={Link} to="/">
              < ReceiptText color='rgb(153 51 204)' />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(task.id ?? '')}>
              <Trash2 color='rgb(153 51 204)' />
            </IconButton>
          </div>
        </ListItem>
      ))
      }
    </List >
  );

  return (
    <div>
      <Tabs value={tabValue} onChange={(_, newValue) => setTabValue(newValue)} className="mb-4">
        <Tab label="Active Tasks" />
        <Tab label="Completed Tasks" />
      </Tabs>
      {tabValue === 0 && renderTaskList(activeTasks)}
      {tabValue === 1 && renderTaskList(completedTasks)}
    </div>
  );
};

export default TaskList;
