'use client'
import { ReactNode, createContext, useState } from "react"

type TaskContextType = {
    teste: string;
}

type Props = {
    children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextType)

export function TaskProvider({ children }: Props) {
    const [teste, setTeste] = useState<string>('');

    return (
        <TaskContext.Provider value={{ teste, }}>
            {children}
        </TaskContext.Provider>
    )
}