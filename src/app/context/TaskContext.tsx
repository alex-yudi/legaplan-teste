'use client'
import { ReactNode, createContext, useState } from "react"

type TaskContextType = {
    showModalNewTask: boolean;
    handlerToggleModalNewTask: () => void;
    handleCreateNewTask: () => void;
    showModalDeleteTask: boolean;
    handlerToggleModalDeleteTask: () => void;
    handleDeleteTask: () => void;
}

type Props = {
    children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextType)

export function TaskProvider({ children }: Props) {
    const [showModalNewTask, setShowModalNewTask] = useState(false);
    const [showModalDeleteTask, setShowModalDeleteTask] = useState(false);


    const handlerToggleModalNewTask = () => {
        setShowModalNewTask(!showModalNewTask)
    }
    const handlerToggleModalDeleteTask = () => {
        setShowModalDeleteTask(!showModalDeleteTask)
    }

    const handleCreateNewTask = () => {
        handlerToggleModalNewTask()
    }

    const handleDeleteTask = () => {

        handlerToggleModalDeleteTask()
    }

    return (
        <TaskContext.Provider value={{ showModalNewTask, handlerToggleModalNewTask, handleCreateNewTask, showModalDeleteTask, handlerToggleModalDeleteTask, handleDeleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}