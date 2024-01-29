'use client'
import React from "react"
import Task from "./components/Task"
import "./styles.css"
import Button from "../Button"

export default function TodoList() {

    return (
        <div className="container-component-todo-list">

            <div className="container-tasks-list">
                <span>
                    Suas tarefas de hoje
                </span>
                <div className="task-list">
                    <Task
                        value='teste'
                    />
                </div>

                <span>
                    Tarefas finalizadas
                </span>
                <div className="task-list tasks-dones">
                    <Task
                        value='teste2'
                        checked
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