import React from 'react'
import './styles.css'
import Image from 'next/image'
import logomark from '@/assets/Logomark.svg'
import logotype from '@/assets/Logotype.svg'

export default function Header() {
    return (
        <header className='home-header'>
            <div className='container-header-logo'>
                <Image src={logomark} alt="Logomarca da FocalPoint" />
                <Image src={logotype} alt="Logotipo da FocalPoint" />
            </div>
            <span className='header-text-center'>
                Bem-vindo de volta, Marcus
            </span>
            <span className='text-date-header'>
                Segunda, 22 de dezembro de 2024
            </span>
        </header>
    )
}