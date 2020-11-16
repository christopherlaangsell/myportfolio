import React, { useRef } from 'react';
import 'bulma/css/bulma.css';

export default function Search() {
    const searchBar = useRef()

    async function getStock() {
        const symbol = searchBar.current.value.toUpperCase()
        window.location = `/${symbol}`
    }
    return (
        <div className="level">
          <div className="level-left">
            <label className="level-item mr-2">Type a Stock Ticker</label>
            <input ref={searchBar} input="text" className="search level-item mr-2" placeholder="AMD" />
            <button className="button is-rounded level-item" onClick={getStock}>Search</button>
      </div>
        </div>
    )
}
