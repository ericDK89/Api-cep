import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Cep() {

    const [api, setApi] = useState([])
    const [cep, setCep] = useState('')

    const cepApi = async () => {
        let url = `https://cep.awesomeapi.com.br/:format/${cep}`
        try {
            const res = await axios.get(url)
                return setApi(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        cepApi()
    })

    const handleInput = (event) => {
        setCep(event.target.value)
    }

  return (
    <div>
        <form>
            <input value={cep} onChange={handleInput} />
        </form>
        <ul>
            <li> {api.address} </li>
            <li> {api.state} </li>
            <li> {api.district} </li>
        </ul>
    </div>
  )
}
