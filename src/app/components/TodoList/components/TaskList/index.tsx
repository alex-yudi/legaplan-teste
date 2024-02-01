'use client'
import { ChangeEventHandler, useContext, useState } from 'react'
import './styles.css'
import Task from '../Task';
import { TaskContext } from '@/app/context/TaskContext';

export default function TaskList() {
    const { taskListDone, taskListUndone } = useContext(TaskContext)

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.checked)
    }

    return (
        <div className="container-tasks-list">
            <span>
                Suas tarefas de hoje
            </span>
            <div className="task-list">
                {
                    taskListUndone.map((task) => (
                        <Task
                            key={task.title}
                            value={task}
                            onChange={handleOnChange}
                        />
                    ))
                }
            </div>

            <span>
                Tarefas finalizadas
            </span>
            <div className="task-list tasks-dones">
                {
                    taskListDone.map((task) => (
                        <Task
                            key={task.title}
                            value={task}
                            onChange={handleOnChange}
                        />
                    ))
                }
            </div>
        </div>
    )
}