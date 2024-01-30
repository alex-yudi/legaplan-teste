import Modal from '@/app/components/Modal'
import './styles.css'
import Button from '@/app/components/Button'

export default function ModalDeleteTask() {
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
                >
                    Cancelar
                </Button>
                <Button
                    color='red'
                    quantity='double'
                    type='submit'
                >
                    Deletar
                </Button>
            </div>
        </Modal>
    )
}