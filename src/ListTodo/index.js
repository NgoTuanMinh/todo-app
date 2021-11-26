import React from 'react';
import TodoItem from './TodoItem';

function ListTodo({listTodo, handleUpdateTask, handleRemoveTask, handleFilter, handleRemoveAll}) {

    return (
        <div className='todo-list__wrap'>
            <h3>To Do List</h3>

            <input type='text' placeholder='Search...' onKeyUp={handleFilter}/>

            {listTodo.map((todo) => <TodoItem key={todo.id} task={todo} onUpdateTask={handleUpdateTask} onRemoveTask={handleRemoveTask} />)}

            {listTodo.length>0 && <button className='remove-btn btn-remove_all' onClick={handleRemoveAll}>Remove all</button>}
        </div>
    );
}

export default ListTodo;