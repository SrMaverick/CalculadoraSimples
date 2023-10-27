import React, {useState} from "react"
import styled from "styled-components"
import homer from "./assets/homer.png"

const Main = styled.main`
text-align: center;
margin-top: 15vh;
font-family: bold, cursive;
`

const H1 = styled.h1`
font-size: 35px;
`

const H2 = styled.h2`
border: solid;
border-radius: 10px;
height: 5vh;
width: 20vw;
margin-left: 39vw;
`

const Btn = styled.button`
width: 10vw;
height: 8vh;
border-radius: 20px;
color: yellow;
font-size: 30px;
background-color: black;
margin: 10px;
cursor: pointer;
`
const Img = styled.img`
width: 20vw;
`
const Input = styled.input`
text-align: center;
border-color: black;
border-radius: 10px;
margin: 2px;
`
function App(){

  const [primeiroValor, setPrimeiroValor] = useState()
  const [segundoValor, setSegundoValor] = useState()
  const [resultado, setResultado] = useState()

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value))
  }

  const capturandoSegundoValor = (e) =>{
    setSegundoValor(Number(e.target.value))
  }

  const soma = () =>{
    setResultado (primeiroValor + segundoValor)
  }

  const divisao = () =>{
    setResultado (primeiroValor / segundoValor)
  }

  const multiplicacao = () =>{
    setResultado (primeiroValor * segundoValor)
  }

  const subtracao = () =>{
    setResultado (primeiroValor - segundoValor)
  }

  return(
    <Main>
      <H1>CALCULADORA</H1>
      <H2>{resultado}</H2>
      <Input placeholder="Digite o Primeiro Valor" onChange={capturandoPrimeiroValor}/>
      <Input placeholder="Digite o Segundo Valor" onChange={capturandoSegundoValor}/>
      <div>
      <Btn onClick={divisao}>/</Btn>
      <Btn onClick={multiplicacao}>*</Btn>
      <Btn onClick={subtracao}>-</Btn>
      <Btn onClick={soma}>+</Btn>
      </div>
      <Img src={homer} alt="Homer_Simpson" />
    </Main>
  )
}
export default App