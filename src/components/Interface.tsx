import {
    UI,
    Modal,
    ContainerForm,
    Label,
    Btn,
    Alerta,
    Inputs
} from "./styled"
import {useEffect, useState} from 'react'
import Abministrador from "./abministrador"


const Interface = () => {

    const [modal, setModal] = useState(localStorage.getItem("modal") || 'on')
    const [datos, setDatos] = useState(JSON.parse(localStorage.getItem("datos")!) || {
        nombre: '',
        monto: 0
    })
    const [alert, setAlert] = useState('')
    const [bienvenido, setbienvenido] = useState(JSON.parse(localStorage.getItem("bienvenido")!) || 'Administrador de presupuesto semanal')

    useEffect(() => {

        localStorage.setItem("modal", modal)
        localStorage.setItem("datos", JSON.stringify(datos))
        localStorage.setItem("bienvenido", JSON.stringify(bienvenido))

    }, [bienvenido])


    const agg = (e : any) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })

    }
    const validacion = () => {
        localStorage.setItem("datos", JSON.stringify({
            ...datos
        }))
        if (datos.nombre === '' || datos.monto === 0) {

            setAlert('vacio')
        } else if (isNaN(datos.monto) || datos.monto < 1) {
            setAlert('NaN')

        } else {
            setModal('of')

            setbienvenido(`¡Bienvenido, ${
                datos.nombre
            }!`)
        }
        setTimeout(() => {
            setAlert('')
        }, 3000)

    }


    return (

        <UI>
            <h3>{bienvenido}</h3>

            {
            modal === 'on' ? <Modal>
                <ContainerForm>
                    <Label>
                        Nombre:
                    </Label>

                    <Inputs type='text' placeholder="Ingresa tu nombre" name='nombre'
                        onChange={agg}
                        autoComplete='off'/>
                    <Label>
                        Presupuesto:
                    </Label>
                    <Inputs type='number' placeholder="Ingresa el monto" name='monto'
                        onChange={agg}
                        autoComplete='off'/>
                    <Btn onClick={validacion}>Ingresar</Btn>
                </ContainerForm>
                {
                alert !== '' && alert === "vacio" ? <Alerta>todos los campos son obligatorios</Alerta> : alert === 'NaN' && <Alerta>
                    ingrese un monto valido</Alerta>
            } </Modal> : <Abministrador datos={datos}
                setModal={setModal}
                setbienvenido={setbienvenido}/>
        } </UI>
    )
}

export default Interface
