import React, {useState} from 'react'

const FormAltaTutorial = ({agregarTutorial}) => {
    

    const [nombreTutorial, setNombreTutorial] = useState('')
    const [url, setUrl] = useState('')
    const [tipoTutorial, setTipoTutorial] =  useState('')

    const cambioNombre = (e) => {
        const dato = e.target.value;
        setNombreTutorial(dato)
    }

    const cambioUrl = (e) => {
        const dato = e.target.value;
        setUrl(dato)
    }

    const cambioCombo = (e) => {
        const dato = e.target.value;
        setTipoTutorial(dato)
    }




    const alEnviar = (e) => {
        e.preventDefault();
        if (
            nombreTutorial.length > 3 && 
            tipoTutorial.length > 3 && 
            url.length > 3) {
            agregarTutorial(nombreTutorial, tipoTutorial, url);
            setNombreTutorial('');
            setUrl('')
            setTipoTutorial('')

        }else{
            alert('Verifique que la cantidad de caracteres en cada campo sea mayor a 3')
        }

    }

    return (
        <form onSubmit={alEnviar} autoComplete="off" className="tutorial">
            <label>Nombre</label>
            <input type="text" placeholder="Nombre" value={nombreTutorial} onChange={cambioNombre} className="campo-tutorial"/>
            
            <label>Url:</label>
            <input type="text" placeholder="Url"  value={url} onChange={cambioUrl} className="campo-tutorial"/>
            
            
            <select name="tipoTutorial" value={tipoTutorial} onChange={cambioCombo} className="campo-tutorial">
                <option value=""></option>
                <option value="Programacion">Programacion</option>
                <option value="Matematica">Matematica</option>
                <option value="Clase Grabada">Clase Grabada</option>
            </select>
            <button className="campo-tutorial btn-crear">Crear +</button>
        </form>
    )
}

export default FormAltaTutorial;
