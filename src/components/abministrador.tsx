import {
    useState,
    ChangeEvent,
    useEffect,
    SetStateAction,
    Dispatch
} from "react"
import {
    Btn,
    Registro,
    Container,
    Inputs,
    Label,
    Prueva,
    AñdGastos,
    Listado,
    Presupuesto,
    Restante,
    BtnCerrar,
    Alerta,
    GastosLis,
    List,
    BtnReiniciar
} from "./styled"

interface info {
    datos: {
        nombre: string,
        monto: number
    },
    setModal: Dispatch < SetStateAction < string >>,
    setbienvenido: Dispatch < SetStateAction < string >>
}

const Abministrador = ({datos, setModal, setbienvenido} : info) => {

    const [alert, setAlert] = useState('')
    const [gasto, setGasto] = useState < {
        gasto: string,
        precio: number,
        id: number
    }[] > (JSON.parse(localStorage.getItem("gasto")!) || [])

    const [nuevo, setNuevoGasto] = useState({gasto: '', precio: 0, id: 0})
    const acumulado = gasto.reduce((acc, el) => {
        return acc + Number(el.precio)
    }, 0);

    const total = datos.monto - acumulado

    useEffect(() => {
        localStorage.setItem("gasto", JSON.stringify(gasto))

    }, [gasto])

    const nuevoGasto = (e : ChangeEvent < HTMLInputElement >) => {

        setNuevoGasto({
            ...nuevo,
            [e.target.name]: e.target.value,
            id: Date.now()

        })
    }
    const agregarGasto = (e : any) => {

        e.preventDefault()
        if (total - nuevo.precio < 0) {
            setAlert('Insuficiente')

        } else if (nuevo.gasto === '' || nuevo.precio === 0) {

            setAlert('vacio')
        } else if (isNaN(nuevo.precio) || nuevo.precio < 1) {
            setAlert('NaN')

        } else {
            setGasto([
                ...gasto,
                nuevo
            ])
            e.target.reset()
            setNuevoGasto({gasto: '', precio: 0, id: 0})
        }
        setTimeout(() => {
            setAlert('')
        }, 3000)
    }

    const borrarProducto = (id : number, e : any) => {
        e.preventDefault()
        const nuevoArreglo = gasto.filter(gasto => gasto.id !== id)
        setGasto(nuevoArreglo)
    }

    const resetear = (e : any) => {
        e.preventDefault()
        localStorage.clear()
        setModal('on')
        setbienvenido('Administrador de presupuesto semanal')
    }

    return (

        <Prueva>


            <Registro onSubmit={agregarGasto}>
                <Container>

                    <AñdGastos>
                        <h5>Añade tus gastos</h5>

                        <Label>Gasto</Label><Inputs type='text' autoComplete="off" name='gasto'
                            onChange={nuevoGasto}/>
                        <Label>Precio</Label><Inputs type='number' autoComplete="off" name='precio'
                            onChange={nuevoGasto}/>

                        <Btn>Agregar</Btn>

                    </AñdGastos>
                    <Presupuesto>Presupuesto: $ {
                        datos.monto
                    }</Presupuesto>
                </Container>

            </Registro>
            <Registro>
                <Container>

                    <Listado>

                        <h5>Lista de gastos</h5>

                        <List> {
                            gasto.length < 1 && <h3>Agrega un gasto para comenzar</h3>
                        }
                            {
                            gasto.map((gastoN : {
                                gasto: string,
                                precio: number,
                                id: number
                            }) => {
                                return <GastosLis key={
                                    gastoN.id
                                }>
                                    <div>
                                        <p> {
                                            gastoN.gasto
                                        }:</p>

                                        <p>
                                            $ {
                                            gastoN.precio
                                        } </p>
                                    </div>
                                    &nbsp;
                                    <BtnCerrar onClick={

                                        (e : any) => borrarProducto(gastoN.id, e)
                                    }>x</BtnCerrar>
                                </GastosLis>

                        })
                        }</List>


                    </Listado>
                    <Restante $rango={total}
                        $presupuesto={
                            datos.monto
                    }>Restante: $ {total}</Restante>
                </Container>

            </Registro>
            <BtnReiniciar onClick={
                (e : any) => resetear(e)
            }>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                    <title>Reiniciar</title>
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                </svg>
            </BtnReiniciar>
            {
            alert !== '' && alert === "vacio" ? <Alerta>todos los campos son obligatorios</Alerta> : alert === 'NaN' ? <Alerta>
                ingrese un monto valido</Alerta> : alert === 'Insuficiente' ? <Alerta>Presupuesto insuficinte</Alerta> : total === 0 && <Alerta>Presupuesto agotado</Alerta>
        } </Prueva>
    )
}

export default Abministrador
