import { ReactNode } from 'react'
import './styles.css'

type Props = {
    children: ReactNode;
    title?: string;
}

export default function Modal({ children, title }: Props) {
    return (
        <div className='overlay-modal'>
            <div className='container-modal'>
                <h1 className='title-modal'>
                    {title}
                </h1>
                {children}
            </div>
        </div >
    )
}