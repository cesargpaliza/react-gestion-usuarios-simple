import { useState } from 'react';

import Card from './components/Card';
import Container from './components/Container';
import UserForm from './components/UserForm';

import './App.css'

function App() {

  const [usuarios, setUsuarios] = useState([])


  const submit = usuario => {
    setUsuarios([
      ...usuarios,
      usuario,
    ])
  }
  
  return (
    <>    
    <Container>
      <h1>Gestión de Usuarios</h1>
      <Card>
        <div style={{padding: 30}}>
          <UserForm submit={submit} />
        </div>
      </Card>
      <Card>
        <ul>
          { usuarios.map( x =>
              <li>{`${x.name} ${x.lastname}: ${x.email}`}</li>
          )}
        </ul>
      </Card>
    </Container>
    </>
    
  );
}

export default App;
