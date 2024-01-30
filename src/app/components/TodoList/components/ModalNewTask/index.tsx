import Button from '@/app/components/Button'
import './style.css'
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import Modal from '@/app/components/Modal';

type Props = {
    closeModal: () => void;
}

export default function ModalNewTask({ closeModal }: Props) {
    const [newTask, setNewTask] = useState<string>('');

    const handleNewTask: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        closeModal()
    }

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewTask(e.target.value)
    }

    return (
        <Modal
            title='Nova Tarefa'
        >
            <form onSubmit={handleNewTask} className='form-new-task'>
                <label htmlFor="new-task">
                    Título
                </label>
                <input type="text" id='new-task' placeholder='Digite' onChange={handleOnChange} />

                <div className='container-buttons-new-task'>
                    <Button
                        color='gray'
                        onClick={closeModal}
                        quantity='double'
                    >
                        Cancelar
                    </Button>
                    <Button
                        color='blue'
                        quantity='double'
                        type='submit'
                    >
                        Adicionar
                    </Button>
                </div>
            </form>
        </Modal>
    )
}