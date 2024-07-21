import React from 'react';
import TodoList from './TodoList';
import NavBar from './NavBar';
import AddTask from './AddTask';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import initialData from './initialData';
import uniqueid from 'uniqueid';
import Layout from './Layout';

class App extends React.Component {
  state = {
    tasks: initialData
  };

  onToggleCompleted = (taskId) => {
    this.setState(prevState => {
      const tasks = prevState.tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return { tasks };
    });
  };

  onAddTask = (newTaskName) => {
    const newTask = {
      id: uniqueid(),
      name: newTaskName,
      completed: false
    };
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }));
  };

  onDeleteCompleted = () => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => !task.completed)
    }));
  };

  render() {
    return (
      <section id='todo'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
            <Route path='/login' element={<Login />}/>
            <Route path='/add-task' element={<AddTask onAddTask={this.onAddTask} />} />
            <Route path='/:filter?' element={<TodoList tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
            </Route>
          </Routes>
          <NavBar onDeleteCompleted={this.onDeleteCompleted} />
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
