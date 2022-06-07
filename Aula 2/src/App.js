import React from 'react'
import Button from './Button';

const buttonA = <button>Histórico de clientes</button>
const buttonB = <button>Cadastrar clientes</button>
const hasCustomer = true;
const App = ()=>{
const renderShowHistory = ()=>(
    <div>
        Clique o botão abaixo para visualizar o histórico dos clientes
        <br/>
        {buttonA}
    </div>
)

const renderAddCustomer = () => (
    <div>
        Clique abaixo para cadastrar o cliente
        <br/>
        {buttonB}
    </div>
)

const showCustomer = () => {
    if (!hasCustomer)return null
    return (
        <div>
            <h1>Nome do Cliente: Charlie Mendes</h1>
        </div>
    )
}

    return (
        <div>
             <p>Digital Innovation One</p>
             <p>Bem vindo a nossa aula!</p>
             valor da variavel hasCustomer{!!hasCustomer}
             {hasCustomer ? renderShowHistory() : renderAddCustomer()}
             <div>
                 {showCustomer()}
             </div>
    </div>
    
    );
}
export default App;