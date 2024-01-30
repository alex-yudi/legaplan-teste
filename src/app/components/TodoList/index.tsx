'use client'
import React, { ChangeEventHandler, useState } from "react"
import Task from "./components/Task"
import "./styles.css"
import Button from "../Button"

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

    const listTasksOpened = listOfTasks.filter((task) => !task.checked)
    const listTasksClosed = listOfTasks.filter((task) => task.checked)

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.checked)
    }
    return (
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
                onClick={() => { }}
                quantity="unique"
            >
                Adicionar nova tarefa
            </Button>
        </div>
    )
}