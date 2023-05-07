import { useContext } from 'react';
import { ClientContext } from '../../context/ClientContext';

const Index = () => {
const {isLoggedIn} = useContext(ClientContext);
console.log("is a user available?", isLoggedIn);
  return (
    <h1>Dashboard</h1>
  );
}

export default Index