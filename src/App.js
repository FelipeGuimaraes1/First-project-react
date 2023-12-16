import React, { useState, useRef } from "react";
import axios from "axios";
import People from "./Assets/people.svg";
import Arrow from "./Assets/arrow.svg";
import Trash from "./Assets/trash.svg";
import {
  Container,
  Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    // const { data: newUser } = await axios.post("http://localhost:3001/users", {
    //   name: inputName.current.value,
    //   age: inputAge.current.value,
    // });

    // setUsers([...users, newUser]);

    const { data: showUsers } = await axios.get("http://localhost:3001/users");
    setUsers(showUsers);
  }

  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome:</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade:</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="arrow" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App;
