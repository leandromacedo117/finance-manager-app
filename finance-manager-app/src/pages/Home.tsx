import React from 'react'

const Home = () => {
    return (
        <div className='Home'>
            <h4>My Finances</h4>
            <div>
                <p>Saldo atual</p>
                <span>R$ 3000</span>
            </div>
            <select>
                <option value="All finances">All finances</option>
                <option value="Prevent">Prevent</option>
                <option value="payment done">Done</option>
            </select>
            <div className="finance">
                <p>States</p>
                <span>R$ 50</span>
            </div>
        </div>
    )
}

export default Home
