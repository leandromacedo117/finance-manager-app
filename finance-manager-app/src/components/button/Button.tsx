import React from 'react';
import './Button.css';

type ButtonProps = {
    nameProps: string;
    onSubmit?: () => void; // Adicionando propriedade opcional para onClick
}

const Button: React.FC<ButtonProps> = ({ nameProps, onSubmit: onSubmit }) => {
    return (
        <button
            type="submit"
            className='Button-components'
            onSubmit={onSubmit} // Utilize onClick em vez de onSubmit
        >
            {nameProps}
        </button>
    );
}

export default Button;
