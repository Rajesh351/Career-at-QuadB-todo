import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import TaskList from './TaskList';
import Navbar from './Navbar';
import TaskDetail from './TaskDetail';
import { useSelector } from 'react-redux';
import LoginPage from './LoginPage';

function App() {
  const { selected,login } =useSelector(store => store.auth);

  return (
    <div>
      <Navbar />
      {
        login==true?(<LoginPage/>):(<div className="flex">
          <Sidebar />
          <div className={`flex-1 ${selected ? '' : 'flex'}`}>
            {!selected ? (
              <div className="w-full flex">
                <TaskList />
                <TaskDetail />
              </div>
            ) : (
              <TaskList />
            )}
          </div>
        </div>)
      }
    </div>
  );
}

export default App;
