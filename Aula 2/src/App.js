import React from 'react'
//import Button from './Button';

const showEvent = (e) => {
console.log("Botão clicado")
console.log(e)
}

const Button = <button onClick={showEvent}>Mostrar evento</button>

const App = ()=>{
    consthandleChange = (e) => {
        const {value} = e.target
        console.log(value)
    }

  return(
    <div>
    <p>Familia</p>
    <input onChange={handleChange}/>
    {Button}
</div>
  )
}

export default App;

/* aula 3.2 Listas e chaves

const membros = [
    {
        id: 1,
        nome: 'Eduardo Paulo Sant Ana',
        habilidades: ['programação', 'eletrica']
    },
    {
        id:2,
        nome:'Monique Maiara Mendes Nascimento',
        habilidades:['organizada','radiologia']
    },
    {
        id: 3,
        nome: 'Charlie Mendes Nascimento Paulo Sant Ana',
        habilidades:['Estudante','carinhoso']
    },
    {
        id: 4,
        nome:'Luana Mendes nascimento Paulo Sant Ana',
        habilidades:['bagunceira', 'carinhosa']
    }
]

const App = () => {
    const renderMembros = (membros, index) =>{
        return(
            <div key={`membro-${membros.id}`}>
                <li >{membros.nome}</li>
                {membros.habilidades.map(renderHabilidades)}
            </div>           
        )        
    }

    renderHabilidades = (habilidade, index) => {
        return (
            <div style={{paddingLeft:'30px'}} key={`habilidade-${index}`}>
                <li >{habilidade}</li>
            </div>
    
        )
    }
 return(
     <div>
         <p>Familia</p>
         <ul>
             {membros.map(renderMembros)}
         </ul>
     </div>
 )

}

*/

/** ///////////////////////////////////////////////////////////////////////////////////////// **/



/*
Aula 3.1 condicional

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
}*/




