import styled, {createGlobalStyle } from 'styled-components'

export const EstiloGLobal = createGlobalStyle`

*{
   
    margin:0px;
    box-sizing: content-box ;
    font-family:'Roboto';
    color: #FFFFFF;
    h5{
        width: 100%;
    font-size: 20px;
    text-align: center;
    }
    body{
        background: url(https://1.bp.blogspot.com/-zEjZtydyYwg/YaZcc3S16tI/AAAAAAAAGl0/VtE-5FwCYrkTdp5oHJ8sVsYekZvTVFtZQCLcBGAsYHQ/s16000/yoututosjeffreyq56iu7e56uje.png) ;
        background-size: cover;
    }
}

`

export const UI = styled.div`
text-align: center;



h3 {
    color: #003d6c;
    font-size: 50px;
    padding: 20px;
}

`
export const Modal = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw ;
`

export const ContainerForm = styled.div`
    border-radius: 5px;
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 500px;
    height: 300px;
    justify-content: space-evenly;
    padding: 20px;
    backdrop-filter: blur(3px);
    background-color: #003d77;
    box-shadow: 0px 0px 20px  #2276d078;
    margin-top:70px;

`

export const Inputs = styled.input`
    
    background: none;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 250px;
    background-color: #ffffff42;
    color: white;
    font-size: large;
    text-align: center;
    margin-bottom:12px ;
    &::placeholder{
        color: white;
    }
`

export const Label = styled.label`
font-size:25px ;


`
export const Btn = styled.button`
border: none;
padding: 10px 50px;
border-radius: 20px;
    background-color: #044271;
    box-shadow: 0px 0px 10px #4a7dab;



&:active{
    background-color: #ffffff75;
}
`

export const Alerta = styled.div`
position: fixed ;
top: 83px ;
border-radius: 5px ;
backdrop-filter:blur(5px) ;
padding: 20px 60px;
    background: linear-gradient(45deg,#e4121296,#831f1fab);
    border-bottom: 1px solid;
    border-left: 1px solid;
`
export const Registro = styled.form`
 border-radius: 5px;
 backdrop-filter: blur(5px);
 width:380px ;
 height: 400px;
 box-shadow: 0px 0px 20px #abbaff;
 margin:  30px 90px 0px;
 background-color: #003d77;
`

export const Container= styled.div`
padding: 30px;

`
export const Prueva = styled.div`
display: flex;
    justify-content: center;
`

export const AñdGastos = styled.div`
display: flex;
flex-direction:column ;
align-items: baseline;
width: 50%;
padding: 20px;
    gap: 10px;

    button{
        margin: 10px auto;
       width: 180px;
    }
`

export const Listado = styled.div`

h5{
    margin: 20px 0px ;
}
 h3 {
    color: #ffffff;
    font-size: 30px;
 }
`
export const Presupuesto = styled.div`
    border-radius: 5px;
    background-color: #186c18ed;
    padding: 16px;
    width: 284px;
    display: flex;
`

export const Restante = styled(Presupuesto)`
position: relative;
top: 18px;
background-color: ${({$rango, $presupuesto})=> {
    if(( $presupuesto/ 4 ) >= $rango ){ return '#ff0f0f87' }else if(( $presupuesto/ 2 ) >= $rango ){ return '#f1ff009e' }

}} ;

`

export const BtnCerrar = styled.button`
border: none;
border-radius: 18px;
background-color: #ff0f0f87;
display: flex;
align-items: baseline;

`
export const GastosLis = styled(Presupuesto)`
width: 280px;
display: flex;
justify-content: space-between;
margin-bottom: 10px;
background-color: #ffffff3b;
div{
    display: flex;
    width: 85%;
    justify-content: space-between;
    & > :nth-child(2){
        background-color: #003d6c;
    padding: 0px 15px;
    border-radius: 18px;
    }
}
`
export const List = styled.div`
height:250px;
overflow: overlay;
&::-webkit-scrollbar {
    -webkit-appearance: none;

}
&::-webkit-scrollbar:vertical {
    width:5px;
}
&::-webkit-scrollbar-thumb {

    background-color: #ffffff8c;
    border-radius: 10px;
 
}
`


export const BtnReiniciar = styled.button`
position: fixed;
    bottom: 20px;
    left: 90%;
    background-color: #ff0f0f;
    border: none;
    border-radius: 90px;
    padding: 8px 10px;

    svg{
        transform:translateY(1px) ;
    }
    &:active{
        background-color:#ed5a5a;
    }
`