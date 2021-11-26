import React, { useRef } from 'react';

function NewTask({handleAddTask}) {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    const priorityRef = useRef();
    const date = new Date();
    const initialDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

    const handleClick = () => {
        let newTask = {
            id: new Date().getTime(),
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            date: dateRef.current.value,
            priority: priorityRef.current.value 
        }

        handleAddTask(newTask);

        titleRef.current.value = '';
        descriptionRef.current.value = '';
        dateRef.current.value = initialDate;
        priorityRef.current.value = 'normal';
    }

    return (
        <div className='new-task__wrap'>
            <h3>New Task</h3>

            <input ref={titleRef} type='text' placeholder='Add new task' />

            <div className='new-task__description'>
                <h4> Description </h4>
                <textarea ref={descriptionRef} className='new-task__description-textarea'/>
            </div>

            <div className='new-task__date-wrap'>
                <div className='new-task__date-item new-task__date-time'>
                    <h4>Due Date</h4>
                    <input ref={dateRef} type='date' defaultValue={initialDate}/>
                </div>
                <div className='new-task__date-item new-task__date-priority'>
                    <h4>Priority</h4>
                    <select ref={priorityRef} defaultValue='normal'>
                        <option value='low'>Low</option>
                        <option value='normal'>Normal</option>
                        <option value='high'>High</option>
                    </select>
                </div>
            </div>

            <button className='new-task__button' onClick={handleClick}>Add</button>

        </div>
    );
}

export default NewTask;