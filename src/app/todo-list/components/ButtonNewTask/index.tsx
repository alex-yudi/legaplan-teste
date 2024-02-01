'use client'
import { useContext, useState } from 'react'
import Button from '@/app/components/Button';
import ModalNewTask from '../ModalNewTask';
import { TaskContext } from '@/app/context/TaskContext';

export default function ButtonNewTask() {
    const { showModalNewTask, handlerToggleModalNewTask } = useContext(TaskContext)


    return (
        <>
            <Button
                color="blue"
                onClick={handlerToggleModalNewTask}
                quantity="unique"
            >
                Adicionar nova tarefa
            </Button>
            {
                showModalNewTask && <ModalNewTask />
            }
        </>
    )
}