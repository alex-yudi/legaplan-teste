import React from "react"
import "./styles.css"
import ButtonNewTask from "./components/ButtonNewTask"
import TaskList from "./components/TaskList"



export default function TodoList() {
    return (
        <>
            <div className="container-component-todo-list">
                <TaskList />
                <ButtonNewTask />
            </div>
        </>
    )
}