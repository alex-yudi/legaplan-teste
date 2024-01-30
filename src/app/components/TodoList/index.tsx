'use client'
import React, { ChangeEventHandler, useState } from "react"
import "./styles.css"
import Task from "./components/Task"
import Button from "../Button"
import ModalNewTask from "./components/ModalNewTask"

type task = {
    title: string;
    checked: boolean;
}

const mocTasks: task[] = [
    {
        title: "Task 1",
        checked: true
    },
    {
        title: "Task 2",
        checked: false
    }
]


export default function TodoList() {
    const [listOfTasks, setListOfTasks] = useState<task[]>(mocTasks)
    const [showModalNewTask, setShowModalNewTask] = useState(false)

    const listTasksOpened = listOfTasks.filter((task) => !task.checked)
    const listTasksClosed = listOfTasks.filter((task) => task.checked)

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.checked)
    }

    const handleShowModalNewTask = () => {
        setShowModalNewTask(true)
    }
    const handleCloseModalNewTask = () => {
        setShowModalNewTask(false)
    }

    return (
        <>
            <div className="container-component-todo-list">

                <div className="container-tasks-list">
                    <span>
                        Suas tarefas de hoje
                    </span>
                    <div className="task-list">
                        {
                            listTasksOpened.map((task) => (
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
                            listTasksClosed.map((task) => (
                                <Task
                                    key={task.title}
                                    value={task}
                                    onChange={handleOnChange}
                                />
                            ))
                        }
                    </div>
                </div>
                <Button
                    color="blue"
                    onClick={handleShowModalNewTask}
                    quantity="unique"
                >
                    Adicionar nova tarefa
                </Button>
            </div>

            {
                showModalNewTask && <ModalNewTask closeModal={handleCloseModalNewTask} />
            }

        </>
    )
}