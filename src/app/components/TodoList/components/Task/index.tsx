'use client'
import './styles.css'
import TrashIcon from '@/assets/trash.svg'
import Image from 'next/image'
import { ChangeEventHandler, useContext, useState } from 'react'
import ModalDeleteTask from '../ModalDeleteTask/index.'
import { TaskContext } from '@/app/context/TaskContext'

type task = {
    title: string;
    checked: boolean;
}

type Props = {
    value: task;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Task({ value, onChange }: Props) {
    const { handlerToggleModalDeleteTask, showModalDeleteTask } = useContext(TaskContext)

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
                    onClick={handlerToggleModalDeleteTask}
                />
            </div>

            {
                showModalDeleteTask &&
                <ModalDeleteTask />
            }
        </>
    )
}