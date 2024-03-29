'use client'
import { ReactNode, createContext, useEffect, useState } from "react"

type TaskContextType = {
    showModalNewTask: boolean;
    handlerToggleModalNewTask: () => void;
    handleCreateNewTask: (newTask: string) => void;
    showModalDeleteTask: boolean;
    handlerToggleModalDeleteTask: () => void;
    selectTaskToDelete: (idTaskSelected: number) => void;
    handleDeleteTask: () => void;
    taskListDone: Task[];
    taskListUndone: Task[];
    handleChangeCheckOfTask: (newValue: Task) => void;
}

type Props = {
    children: ReactNode;
}

let id = 5;
const mocTasks: Task[] = [
    {
        id: 1,
        title: "Levar o lixo para fora",
        checked: true
    },
    {
        id: 2,
        title: "Lavar as mãos",
        checked: false
    },
    {
        id: 3,
        title: "Fazer um bolo",
        checked: false
    },
    {
        id: 4,
        title: "Lavar a louça",
        checked: false
    },
]


export const TaskContext = createContext({} as TaskContextType)

export function TaskProvider({ children }: Props) {
    const [showModalNewTask, setShowModalNewTask] = useState(false);
    const [showModalDeleteTask, setShowModalDeleteTask] = useState(false);
    const [taskList, setTaskList] = useState<TaskList>(mocTasks)
    const [taskListDone, setTaskListDone] = useState<TaskList>([])
    const [taskListUndone, setTaskListUndone] = useState<TaskList>([])
    const [idTaskToDelete, setIdTaskToDelete] = useState<number>()

    const handlerToggleModalNewTask = () => {
        setShowModalNewTask(!showModalNewTask)
    }
    const handlerToggleModalDeleteTask = () => {
        setShowModalDeleteTask(!showModalDeleteTask)
    }

    const handleCreateNewTask = (newTask: string) => {
        const task: Task = {
            id,
            title: newTask,
            checked: false,
        }
        const localList = [...taskList, task]
        setTaskList(localList)

        id++

        handlerToggleModalNewTask()
    }

    const selectTaskToDelete = (idTaskSelected: number) => {
        setIdTaskToDelete(idTaskSelected)
    }

    const handleDeleteTask = () => {
        const localList: Task[] = taskList.filter((task) => task.id !== idTaskToDelete)
        setTaskList(localList)
        handlerToggleModalDeleteTask()
    }

    const handleChangeCheckOfTask = (newValue: Task) => {
        const indexOfTask = taskList.findIndex((task) => task.id === newValue.id)
        const localList = [...taskList]
        localList[indexOfTask] = newValue;
        setTaskList(localList)
    }

    useEffect(() => {
        const localTaskList = taskList
        setTaskListUndone(localTaskList.filter((task) => task.checked === false))
        setTaskListDone(localTaskList.filter((task) => task.checked === true))
    }, [taskList])

    return (
        <TaskContext.Provider value={{ showModalNewTask, handlerToggleModalNewTask, handleCreateNewTask, showModalDeleteTask, handlerToggleModalDeleteTask, selectTaskToDelete, handleDeleteTask, taskListDone, taskListUndone, handleChangeCheckOfTask }}>
            {children}
        </TaskContext.Provider>
    )
}