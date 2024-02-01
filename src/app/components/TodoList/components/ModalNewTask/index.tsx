import Button from '@/app/components/Button'
import './style.css'
import { ChangeEventHandler, FormEventHandler, useContext, useState } from 'react';
import Modal from '@/app/components/Modal';
import { TaskContext } from '@/app/context/TaskContext';


export default function ModalNewTask() {
    const { handlerToggleModalNewTask, handleCreateNewTask } = useContext(TaskContext)


    const [newTask, setNewTask] = useState<string>('');

    const handleNewTask: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        console.log(newTask)
        handlerToggleModalNewTask()
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
                        onClick={handlerToggleModalNewTask}
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