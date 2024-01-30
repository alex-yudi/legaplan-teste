'use client'
import React, { ChangeEventHandler } from "react"
import Task from "./components/Task"
import "./styles.css"
import Button from "../Button"

export default function TodoList() {

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
                    <Task
                        value='teste'
                        onChange={handleOnChange}
                    />
                </div>

                <span>
                    Tarefas finalizadas
                </span>
                <div className="task-list tasks-dones">
                    <Task
                        value='teste2'
                        onChange={handleOnChange}
                    />
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