import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ClipboardList } from 'lucide-react';
import { useState } from 'react';
import TaskForm from '../TaskForm/TaskForm';

const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);


  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(153 51 204)', borderRadius: 0 }} className='py-4 md:py-0'>
      <Toolbar>
        <ClipboardList className="mr-2" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>
        <div className='flex gap-4'>
          <Button variant="contained" color="primary" component={Link} to="/">
            All tasks
          </Button>
          <Button variant="contained" color="primary" onClick={() => setOpenModal(true)} className="mb-4">
            + New Task
          </Button>
        </div>
      </Toolbar>
      <TaskForm
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      />
    </AppBar>

  );
};

export default Header;