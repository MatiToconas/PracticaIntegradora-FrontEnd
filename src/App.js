import Tutoriales from './components/Tutoriales';

function App() {
  
  return (<>
  <div className="encabezado">
      <a href="www.unpaz.edu.ar"><img src="https://unpaz.edu.ar/sites/default/files/unpaz_logo_2020.png" alt="logo unpaz" className="logo"/></a>
      <h1 className="titulo">Tutoriales de la Unpaz</h1>
  </div>
  <div className="main">
    <Tutoriales />
  </div>
   
   </>
  );
}

export default App;
