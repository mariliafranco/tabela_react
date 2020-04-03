import React from 'react';
import UserList from "./components/userList";
import "./App.css";

function App() {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Álbuns</th>
          <th>Posts</th>
          <th>Fotos</th>
        </tr>
      </thead>
      <UserList />
    </table>
  );
}

export default App;
