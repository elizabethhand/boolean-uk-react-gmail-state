import Header from './components/Header'
import React, { useState } from 'react';

import initialEmails from './data/emails'

import './App.css'

function App() {

  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(true)

  const toggleRead = (email) => {

    setEmails(emails.map(function (item) {
      console.log(`Before: ${email.id}`)
      console.log(item.id)
      if (item.id === email.id) {
        console.log(email.read)
        return { ...email, read: !email.read }
      }
      else {
        console.log("not changed!")
        return item
      }
    }))
  }


  const toggleStar = (email) => {
    setEmails(emails.map(function (item) {
      if (item.id === email.id) {
        console.log(email.read)
        return { ...email, starred: !email.starred }
      }
      else {
        return item
      }
    }))
  }

  const getReadEmails = () => {
    let fileredEmails = emails.filter(email => !email.read)
    console.log(fileredEmails)

  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
          // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
          // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={() => getReadEmails()}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map(email => (
            < li key={email.id} className="email" >
              <input type="checkbox" checked={email.read} onChange={() => toggleRead(email)} />
              <input className="star-checkbox" type="checkbox" checked={email.starred} onChange={() => toggleStar(email)} />
              <p>{email.sender}</p>
              <p className="title">{email.title}</p> </li>

          ))}
        </ul>
      </main>
    </div >
  )
}

export default App
