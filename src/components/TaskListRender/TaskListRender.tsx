import { List, ListItem, ListItemText, IconButton, Checkbox, Tooltip, Typography } from '@mui/material';
import { ReceiptText, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type CreateTodoModel } from '../../models/createRequestSchema';
import { calculateDaysUntilDeadline } from '../../utils/calculateDaysUntilDeadline ';

interface TaskListRenderProps {
  taskList: CreateTodoModel[];
  handleToggleComplete: (task: CreateTodoModel) => void;
  handleDelete: (id: string) => void;
}

const TaskListRender = ({ taskList, handleToggleComplete, handleDelete }: TaskListRenderProps) => {


  return (
    <List className="md:w-2/3">
      {taskList.map((task: CreateTodoModel) => {
        const { daysLeft, isOverdue } = calculateDaysUntilDeadline(task.dueDate);

        return (
          <ListItem key={task.id} className="mb-2 bg-purple-100 rounded shadow gap-2">
            <Tooltip arrow placement="top" title={task.isCompleted ? 'Still something to work on?' : 'Done?'}>
              <Checkbox checked={task.isCompleted} onChange={() => handleToggleComplete(task)} />
            </Tooltip>
            <ListItemText
              primary={<Typography component='h3' variant='h5'>{task.title}</Typography>}
              secondary={
                task.dueDate ? (
                  <Typography
                    color={isOverdue ? 'secondary' : 'primary'}                  >
                    {isOverdue
                      ? 'Deadline missed'
                      : `Deadline in ${daysLeft} day${daysLeft !== 1 ? 's' : ''}`}
                  </Typography>
                ) : (
                  'No deadline'
                )
              }
            />
            <div className="flex gap-2 pr-4">
              <Tooltip arrow placement="top" title="Details and edits">
                <IconButton edge="end" aria-label="edit" component={Link} to={`/${task.id}`}>
                  <ReceiptText color="rgb(153 51 204)" />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="top" title="Delete task">
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(task.id ?? '')}>
                  <Trash2 color="rgb(153 51 204)" />
                </IconButton>
              </Tooltip>
            </div>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TaskListRender;
