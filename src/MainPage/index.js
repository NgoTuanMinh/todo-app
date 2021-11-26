import React, { useEffect, useState } from 'react';
import ListTodo from '../ListTodo';
import NewTask from '../NewTask';
import '../App.css';

function MainPage(props) {

    const initialListTodo = localStorage.getItem('listTodo') ? JSON.parse(localStorage.getItem('listTodo')) : [];
    const [listTodo, setListTodo] = useState(initialListTodo);
    const [filterText, setFilterText] = useState('');
    const [listTodoFilter, setListTodoFilter] = useState(listTodo);

    useEffect(() => {
        const filterList = listTodo.filter((todo) => todo.title.includes(filterText));
        setListTodoFilter(filterList);
    }, [filterText]);

    useEffect(() => {
        setListTodoFilter(listTodo);
    }, [listTodo]);

    const addNewTask = (task) => {
        const newListTodo = [...listTodo, task];
        setListTodo(newListTodo);
        localStorage.setItem('listTodo', JSON.stringify(newListTodo));
    }

    const removeTask = (removeTask) => {
        const newListTodo = listTodo.filter((task) => task.id !== removeTask.id);
        setListTodo(newListTodo);
        localStorage.setItem('listTodo', JSON.stringify(newListTodo));
    }

    const updateTask = (updatedTask) => {
        let newTodoList = [...listTodo];
        newTodoList.forEach((todo, idx) => {
            if (todo.id === updatedTask.id) {
                newTodoList[idx] = updatedTask;
                setListTodo(newTodoList);
                localStorage.setItem('listTodo', JSON.stringify(newTodoList));
            }
        })
    }

    const onChangeFilterText = (e) => {
        // setFilterText(e.target.value);
        const {value} = e.target;
        const {keyCode} = e;
        if(keyCode === 13) setFilterText(value);
    }

    const removeAll = () => {
        setListTodo([]);
        localStorage.setItem('listTodo', JSON.stringify([]));
    }

    return (
        <div className='App'>
            <div className='new-task'>
                <NewTask handleAddTask={addNewTask} />
            </div>
            <div className='list-todo'>
                <ListTodo handleRemoveAll={removeAll} handleFilter={onChangeFilterText} listTodo={listTodoFilter} handleUpdateTask={updateTask} handleRemoveTask={removeTask} />
            </div>
        </div>
    );
}

export default MainPage;