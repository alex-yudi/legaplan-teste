'use client'
import { ReactNode, createContext, useState } from "react"

type TaskContextType = {
    showModalNewTask: boolean;
    handlerToggleModalNewTask: () => void;

}

type Props = {
    children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextType)

export function TaskProvider({ children }: Props) {
    const [showModalNewTask, setShowModalNewTask] = useState(false);

    const handlerToggleModalNewTask = () => {
        setShowModalNewTask(!showModalNewTask)
    }


    return (
        <TaskContext.Provider value={{ showModalNewTask, handlerToggleModalNewTask }}>
            {children}
        </TaskContext.Provider>
    )
}