'use client'
import './styles.css'
import TrashIcon from '@/assets/trash.svg'
import Image from 'next/image'
import { ChangeEventHandler } from 'react'

type task = {
    title: string;
    checked: boolean;
}

type Props = {
    value: task;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Task({ value, onChange }: Props) {

    const handleDeleteTask = () => {
        alert("task deletada")
    }

    return (
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
                onClick={handleDeleteTask}
            />
        </div>
    )
}