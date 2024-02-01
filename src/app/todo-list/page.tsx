import React from "react"
import "./styles.css"
import ButtonNewTask from "./components/ButtonNewTask"
import TaskList from "./components/TaskList"
import { TaskProvider } from "../context/TaskContext"



export default function TodoList() {
    return (
        <TaskProvider>
            <main>
                <div className="container-component-todo-list">
                    <TaskList />
                    <ButtonNewTask />
                </div>
            </main>
        </TaskProvider>
    )
}