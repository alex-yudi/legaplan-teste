'use client'
import { useState } from 'react'
import Button from '@/app/components/Button';
import ModalNewTask from '../ModalNewTask';

export default function ButtonNewTask() {
    const [showModalNewTask, setShowModalNewTask] = useState(false);


    return (
        <>
            <Button
                color="blue"
                onClick={() => { }}
                quantity="unique"
            >
                Adicionar nova tarefa
            </Button>
            {

                showModalNewTask && <ModalNewTask closeModal={() => { }} />

            }
        </>
    )
}