import logo from "./logo.svg";
import "./App.css";
import listContacts from "./contacts.json";
import React, { useState } from "react";

//const { contacts } =

export default function App() {
  const contacts = listContacts.slice(0, 5);
  const [famous, setFamous] = useState(contacts);

  function randomFamous() {
    let random = listContacts[Math.floor(Math.random() * listContacts.length)];
    let exists = false;

    for (let i = 0; i < famous.length; i++) {
      if (famous.includes(random)) {
        exists = true;
      }
    }
    if (!exists) {
      setFamous(famous.concat([random]));
    }
  }


  const sortName = () => {
    const arrFamous = [...famous]
    const sortedFamous = arrFamous.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    setFamous(sortedFamous)
  }

  const sortPopularity = () => {
    const arrPopularity = [... famous]
    const sortedPopularity = arrPopularity.sort((a, b) =>{
      return b.popularity - a.popularity})
      setFamous(sortedPopularity)
  }

  const deleteFamous = (id) => {
    const deletedFamous = famous.filter(a => a.id !== id)
    setFamous(deletedFamous)
  }

  

  return (
    <div className="App">
      <button onClick={randomFamous}>Add Random Contact</button>
      <button onClick={sortName}>Check them alphabetically</button>
      <button onClick={sortPopularity}>Check them by popularity</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {famous.map((contact) => (
            <tr key={contact._id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt="picture"
                  width="100px"
                  height="100px"
                />
              </td>
              <td>
                <h3>{contact.name}</h3>
              </td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar && <td>&#127942;</td>}</td>
              <td>{contact.wonEmmy && <td>&#127942;</td>}</td>
              <td><button className="delete-btn" onClick={() => deleteFamous(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
