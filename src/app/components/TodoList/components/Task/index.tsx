'use client'
import './styles.css'
import TrashIcon from '@/assets/trash.svg'
import Image from 'next/image'
import { ChangeEventHandler, useCallback, useContext, useEffect, useState } from 'react'
import ModalDeleteTask from '../ModalDeleteTask/index.'
import { TaskContext } from '@/app/context/TaskContext'
import { title } from 'process'


type Props = {
    value: Task;
}

export default function Task({ value }: Props) {
    const { handlerToggleModalDeleteTask, showModalDeleteTask, selectTaskToDelete, handleChangeCheckOfTask } = useContext(TaskContext)
    const [localValue, setLocalValue] = useState<Task>({ ...value })

    const openDeleteModal = () => {
        selectTaskToDelete(value.id)
        handlerToggleModalDeleteTask()
    }

    const handleChangeChecked: ChangeEventHandler<HTMLInputElement> = (e) => {
        const newValueOfTask: Task = {
            ...value,
            checked: e.target.checked,
        }
        handleChangeCheckOfTask(newValueOfTask, value.id);
    }

    return (
        <>
            <div className='container-task'>
                <input
                    type='checkbox'
                    id={value.title}
                    onChange={handleChangeChecked}
                    checked={value.checked}
                />
                <label
                    htmlFor={value.title}
                    className={value.checked ? 'checked' : ''}
                >
                    {value.title}
                </label>
                <Image
                    className='icon-delete-task'
                    src={TrashIcon}
                    alt="Excluir task"
                    onClick={openDeleteModal}
                />
            </div>

            {
                showModalDeleteTask &&
                <ModalDeleteTask />
            }
        </>
    )
}