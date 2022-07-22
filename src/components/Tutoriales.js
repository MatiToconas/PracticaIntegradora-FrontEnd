import React, {useState, useEffect} from 'react'
import FormAltaTutorial from './FormAltaTutorial';
import Tutorial from './Tutorial';

const Tutoriales = () => {
    
    const [tutoriales, setTutoriales] = useState([]);
    const [algoCambio, setAlgoCambio] = useState([true]);

    useEffect(() => {
        fetch('http://localhost:5000/tutoriales', { method: 'GET' })
        .then( res => res.json() )
        .then( datos => setTutoriales(datos));
    }, [algoCambio]);

    function existeTutorial(nombreTutorial) {
        const t = tutoriales.find(  t => t.nombreTutorial.toLowerCase() === nombreTutorial.toLowerCase())
        return !(t === undefined)
    }

    const agregarTutorial = (a, b, c) => {
        const opciones = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nombreTutorial: a, tipoTutorial:b, url:c, activo: false})
        }
        if(!existeTutorial(a)){
            fetch(`http://localhost:5000/tutoriales`, opciones)
            .then(res => res.json())
            .then(tutorial => setAlgoCambio(!algoCambio))
        }else{
            alert("Ya existe el tutorial que queres crear")
        }

    };

    const borrarTutorial = (idTutorial) => {
        fetch(`http://localhost:5000/tutoriales/${idTutorial}`, {method: 'DELETE'})
        .then(res => res.json())
        .then(tutorial => setAlgoCambio(!algoCambio))
    };

    const cambiarActivo = (idTutorial) => {
        fetch(`http://localhost:5000/tutoriales/${idTutorial}/activar`, {method: 'PUT'})
        .then(res => res.json)
        .then(tutorial => setAlgoCambio(!algoCambio))
    };

    const cambiarTipo = (idTutorial, tipo) => {
        const opciones = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'tipoTutorial': tipo})
        }
        fetch(`http://localhost:5000/tutoriales/${idTutorial}/cambiarTipo`, opciones)
        .then(res => res.json)
        .then(tutorial => setAlgoCambio(!algoCambio))
    };

    return (
        <>
            {tutoriales.map( t => (
                <Tutorial 
                    key={t.idTutorial} 
                    idTutorial={t.idTutorial}
                    nombreTutorial={t.nombreTutorial} 
                    tipoTutorial={t.tipoTutorial} 
                    url={t.url} 
                    activo={t.activo}
                    borrar={borrarTutorial}
                    cambiarActivo={cambiarActivo}
                    cambiarTipo={cambiarTipo}
                />
                    
            ))}
            <FormAltaTutorial agregarTutorial={agregarTutorial} />
        </>
    )
}

export default Tutoriales;