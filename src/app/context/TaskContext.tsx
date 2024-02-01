'use client'
import { ReactNode, createContext, useEffect, useState } from "react"

type TaskContextType = {
    showModalNewTask: boolean;
    handlerToggleModalNewTask: () => void;
    handleCreateNewTask: (newTask: string) => void;
    showModalDeleteTask: boolean;
    handlerToggleModalDeleteTask: () => void;
    selectTaskToDelete: (taskSelected: Task) => void;
    handleDeleteTask: () => void;
    taskListDone: Task[];
    taskListUndone: Task[];
}

type Props = {
    children: ReactNode;
}


const mocTasks: Task[] = [
    {
        title: "Task 1",
        checked: true
    },
    {
        title: "Task 2",
        checked: false
    }
]


export const TaskContext = createContext({} as TaskContextType)

export function TaskProvider({ children }: Props) {
    const [showModalNewTask, setShowModalNewTask] = useState(false);
    const [showModalDeleteTask, setShowModalDeleteTask] = useState(false);
    const [taskList, setTaskList] = useState<TaskList>(mocTasks)
    const [taskListDone, setTaskListDone] = useState<TaskList>([])
    const [taskListUndone, setTaskListUndone] = useState<TaskList>([])
    const [taskToDelete, setTaskToDelete] = useState<Task>()


    const handlerToggleModalNewTask = () => {
        setShowModalNewTask(!showModalNewTask)
    }
    const handlerToggleModalDeleteTask = () => {
        setShowModalDeleteTask(!showModalDeleteTask)
    }

    const handleCreateNewTask = (newTask: string) => {
        const task: Task = {
            title: newTask,
            checked: false,
        }
        const localList = [...taskList, task]
        setTaskList(localList);
        handlerToggleModalNewTask()
    }

    const selectTaskToDelete = (taskSelected: Task) => {
        setTaskToDelete(taskSelected)

        console.log(taskToDelete)
    }

    const handleDeleteTask = () => {
        const localList = taskList.filter((task) => task.title !== taskToDelete!.title)
        setTaskList(localList)
        handlerToggleModalDeleteTask()
    }


    useEffect(() => {
        const localTaskList = [...taskList]

        setTaskListDone(localTaskList.filter((task) => task.checked === true))
        setTaskListUndone(localTaskList.filter((task) => task.checked === false))
    }, [taskList])

    return (
        <TaskContext.Provider value={{ showModalNewTask, handlerToggleModalNewTask, handleCreateNewTask, showModalDeleteTask, handlerToggleModalDeleteTask, selectTaskToDelete, handleDeleteTask, taskListDone, taskListUndone }}>
            {children}
        </TaskContext.Provider>
    )
}