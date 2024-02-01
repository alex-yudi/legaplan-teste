'use client'
import './styles.css'
import TrashIcon from '@/assets/trash.svg'
import Image from 'next/image'
import { ChangeEventHandler, useContext } from 'react'
import ModalDeleteTask from '../ModalDeleteTask/index.'
import { TaskContext } from '@/app/context/TaskContext'


type Props = {
    value: Task;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Task({ value, onChange }: Props) {
    const { handlerToggleModalDeleteTask, showModalDeleteTask, selectTaskToDelete } = useContext(TaskContext)

    const openDeleteModal = () => {
        selectTaskToDelete(value)
        handlerToggleModalDeleteTask()
    }

    return (
        <>
            <div className='container-task'>
                <input
                    type='checkbox'
                    id={value.title}
                    onChange={onChange}
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