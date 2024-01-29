import { ButtonHTMLAttributes, ReactNode } from 'react';
import './styles.css'

type Props = {
    onClick: () => void;
    color: 'blue' | 'gray' | 'red';
    children: ReactNode;
    quantity: 'unique' | 'double'
}

export default function Button({ onClick, color, children, quantity }: Props) {
    return (
        <button
            type='button'
            className={`button-component ${quantity} ${color}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}