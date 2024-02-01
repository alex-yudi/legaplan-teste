'use client'
import { ChangeEventHandler, useContext, useState } from 'react'
import './styles.css'
import Task from '../Task';
import { TaskContext } from '@/app/context/TaskContext';

const listOfTaskHaveLength = (listOfTasks: Task[]) => {
    if (listOfTasks.length > 0) {
        return true
    }

    return false
}


export default function TaskList() {
    const { taskListDone, taskListUndone } = useContext(TaskContext)

    const localListDone = [...taskListDone]
    const localListUndone = [...taskListUndone]


    return (
        <div className="container-tasks-list">

            <span>
                Suas tarefas de hoje
            </span>
            <div className="task-list">
                {
                    listOfTaskHaveLength(taskListUndone) ?
                        localListUndone.map((task) => (
                            <Task
                                key={task.title}
                                value={task}
                            />
                        ))
                        :
                        <h3 className='msg-empty-list'>
                            Não há tarefas para hoje
                        </h3>
                }
            </div>

            <span>
                Tarefas finalizadas
            </span>
            <div className="task-list tasks-dones">
                {
                    listOfTaskHaveLength(localListDone) ?
                        localListDone.map((task) => (
                            <Task
                                key={task.title}
                                value={task}
                            />
                        ))
                        :
                        <h3 className='msg-empty-list'>
                            Não há tarefas finalizadas
                        </h3>
                }
            </div>
        </div>
    )
}