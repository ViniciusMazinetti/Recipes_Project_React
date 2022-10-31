import {
  Container, TextField, Button
} from '@mui/material'

import {useState} from 'react'
import { useAuth } from '../../contexts/LoginContext';


function LoginPage() {
  
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();

  const {signIn} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      await signIn(email, password)
    } catch (error) {
      console.log('um erro aconteceu')
    }
   
  }
  
  return (
    <Container>

      <form onSubmit={handleSubmit} >
        <TextField variant="outlined" autoFocus type="text" label="Email" id="email" fullWidth required onChange={(e) => setEmail(e.target.value)} />
        <TextField variant="outlined" autoFocus type="text" label="Password" id="password" fullWidth required onChange={(e) => setPassword(e.target.value)} />
      
        <Button type="submit"> 
          Login
        </Button>
      </form>

      

    </Container>    
  );
}

export default LoginPage;