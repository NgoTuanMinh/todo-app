import React, { useRef, useState } from 'react';

function TodoItem({task, onUpdateTask, onRemoveTask}) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    const priorityRef = useRef();

    const {title, description, date, priority, id} = task;

    const handleClick = () => {
        let updateTask = {
            id,
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            date: dateRef.current.value,
            priority: priorityRef.current.value 
        }
        onUpdateTask(updateTask);
    }

    const onChangeDate = (e) => {
        console.log(e.target.value);
    }

    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className='todo-item__wrap'>
            <div className='todo-item__header'>
                <div className='todo-item__header-left'>
                    <input type='checkbox' id="checkbox_id"/>
                    <label htmlFor="checkbox_id">{title}</label>
                </div>
                <div className='todo-item__header-right'>
                    <button className='detail-btn' onClick={() => setShowDetail(!showDetail)}>Detail</button>
                    <button className='remove-btn' onClick={() => onRemoveTask(task)}>Remove</button>
                </div>
            </div>

           {showDetail && <div className='todo-item__detail'>
                <input type='text' ref={titleRef} defaultValue={title} />

                <div className='new-task__description'>
                    <h4> Description </h4>
                    <textarea ref={descriptionRef} className='new-task__description-textarea' defaultValue={description}/>
                </div>

                <div className='new-task__date-wrap'>
                    <div className='new-task__date-item new-task__date-time'>
                        <h4>Due Date</h4>
                        <input ref={dateRef} type='date' onChange={onChangeDate} defaultValue={date}/>
                    </div>
                    <div className='new-task__date-item new-task__date-priority'>
                        <h4>Priority</h4>
                        <select ref={priorityRef} defaultValue={priority}>
                            <option value='low'>Low</option>
                            <option value='normal'>Normal</option>
                            <option value='high'>High</option>
                        </select>
                    </div>
                </div>

                <button className='new-task__button' onClick={handleClick}>Update</button>
            </div>}
        </div>
    );
}

export default TodoItem;