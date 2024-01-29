'use client'
import './styles.css'
import TrashIcon from '@/assets/trash.svg'
import Image from 'next/image'

type Props = {
    value: string;
    checked?: boolean;
}

export default function Task({ value, checked }: Props) {

    const handleDeleteTask = () => {
        alert("task deletada")
    }

    return (
        <div className='container-task'>
            <input
                type='checkbox'
                id={value}
                checked={checked}
            />
            <label
                htmlFor={value}
                className={checked ? 'checked' : ''}
            >
                Lavar as mãos
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