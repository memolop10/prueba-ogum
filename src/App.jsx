import SelectInputForm from './components/SelectInputForm'
import InputForm from './components/InputForm';
import SelectFormation from './components/SelectFormation';

import {Provider} from 'react-redux'
import generateStore from './redux/store'
import './App.css';

function App() {

  const store = generateStore();

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <Provider store={store}>
      <form onSubmit={ handleSubmit } className="p-4">
        <h1 className="text-center text-primary"> ¡ÚNETE A NUESTRO EQUIPO! </h1>
        <h3 className="d-block">Nombre Completo</h3>

        <div className="row"> 
          <div className="col-md-6">
            <InputForm placeholder="Nombre(s)"/> 
          </div>
          <div className="col-md-6">
            <InputForm 
              placeholder="Apellido(s)"/> 
          </div>
        </div>

        <h3 className="d-block mt-3">Datos</h3>
        <div className="row"> 
          <div className="col-md-2">
            <InputForm placeholder="Edad"/>  
          </div>
          <div className="col-md-4">
            <SelectInputForm textValue="Genero"/>
          </div>
          <div className="col-md-6">
            <InputForm 
              placeholder="Ciudad"/> 
          </div>
        </div>

        <h3>Formación</h3>
        <div className="row"> 
            <div className="col-md-6">
              <SelectFormation textValue="Estudios"/>
            </div>
            <div className="col-md-6">
              <SelectInputForm textValue="Disponibilidad de Horario"/>
            </div>
        </div>

        <h3>Deporte Pasión</h3>
        <div className="row"> 
            <div className="col-md-4">
              <SelectInputForm textValue="Deporte Practicado"/>
            </div>
            <div className="col-md-4">
              <SelectInputForm textValue="Deporte Practicado"/>
            </div>
            <div className="col-md-4">
              <SelectInputForm textValue="Deporte Practicado"/>
            </div>
        </div>
        
      </form>
    </Provider>
  );
}

export default App;
