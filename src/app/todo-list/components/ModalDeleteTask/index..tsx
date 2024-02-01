import Modal from '@/app/components/Modal'
import './styles.css'
import Button from '@/app/components/Button'
import { useContext } from 'react'
import { TaskContext } from '@/app/context/TaskContext'

export default function ModalDeleteTask() {
    const { handlerToggleModalDeleteTask, handleDeleteTask } = useContext(TaskContext)

    const deleteTask = () => {
        handleDeleteTask()
    }

    return (
        <Modal
            title='Deletar tarefa'
        >
            <p className='text-delete-new-task'>
                Tem certeza que você deseja deletar essa tarefa?
            </p>

            <div className='container-buttons-delete-task'>
                <Button
                    color='gray'
                    quantity='double'
                    onClick={handlerToggleModalDeleteTask}
                >
                    Cancelar
                </Button>
                <Button
                    color='red'
                    quantity='double'
                    onClick={deleteTask}
                >
                    Deletar
                </Button>
            </div>
        </Modal>
    )
}