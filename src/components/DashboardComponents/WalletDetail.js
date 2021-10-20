import React from 'react'

const WalletDetail = ({wallet}) => {
    console.log(wallet)
    return (
        <div>
            <h1>{wallet.cuenta}</h1>
            <h1>{wallet.descripcion}</h1>
            <h1>{wallet.saldo}</h1>
        </div>
    )
}

export default WalletDetail
