'use client'
import { ButtonHTMLAttributes, ReactNode } from 'react';
import './styles.css'

type Props = {
    onClick?: () => void;
    color: 'blue' | 'gray' | 'red';
    children: ReactNode;
    quantity: 'unique' | 'double'
    type?: 'button' | 'submit'
}

export default function Button({ onClick, color, children, quantity, type }: Props) {
    return (
        <button
            type={type ? type : 'button'}
            className={`button-component ${quantity} ${color}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}