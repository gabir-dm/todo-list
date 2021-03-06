import React, { useState } from 'react'
import Form from './Form'
import { RiCloseCircleLine } from 'react-icons/ri'

function TodoList() {
    const [taskList, setTaskList] = useState([])

    function handleAddTaskToList(task) {
        const newTasks = [...taskList, task]

        setTaskList(newTasks)
    }

    function completeTask(id){
        let updateTask = taskList.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete
            }
            return task
        })
        
        setTaskList(updateTask)
    }

    function handleRemoveTask(id) {
        const removeItem = [...taskList].filter(task => task.id !== id)
        
        setTaskList(removeItem)
    }

    return (
        <div>
            <div className='todo-wrapper'>
                <h1>Lista de Tarefas</h1>

                <Form onSubmit={handleAddTaskToList} /> 

                <ul className='todo-list'>
                    {taskList.map(item => 
                        (<li className={item.isComplete ? 'list-item complete' : 'list-item'} key={item.id}> 
                            <button className='close-icon-btn' onClick={() => handleRemoveTask(item.id)}><RiCloseCircleLine className='close-icon'/></button>
                            <input type="checkbox" onChange={() => completeTask(item.id)}/> 
                            {item.title} 
                        </li>))
                    } 
                </ul>
            </div>
            <div className="footer-app"><span>Assessment da disciplina Frameworks Front-End e Conexão com Back-End - Gabriela Melo</span></div>
        </div>
    )
}

export default TodoList