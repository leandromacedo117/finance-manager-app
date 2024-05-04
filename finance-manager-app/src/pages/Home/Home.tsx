import React from 'react';
// styled
import './Home.scss';

const Home = () => {
    return (
        <div className="container-home">
            <div className="Header">
                <h3>Minhas Finances</h3>
                <ul>
                    <li>saldo Atual</li>
                    <li>Entradas de hoje</li>
                    <li>Saidas de hoje</li>
                </ul>
            </div>
            <div className="current-value">
                <p>Saldo atual</p>
                <span>R$ 2000.89</span>
            </div>
            <div className="todo-finance">
                <div>
                    <p>States</p>
                    <span>R$ 599.00</span>
                </div>
                <div>
                    <p>States</p>
                    <span>R$ 599.00</span>
                </div>
                <div>
                    <p>States</p>
                    <span>R$ 599.00</span>
                </div>
            </div>
        </div>
    )
}

export default Home
