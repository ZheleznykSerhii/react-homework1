import axios from 'axios'

import React, { useEffect, useState } from 'react'

const instance = axios.create({
  baseURL: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/',
})

const ExchangeComponent = (props) => {
  let calenderRef = React.createRef()

  let reportDate = props.KursByUser

  let dataChange = () => {
    let data = calenderRef.current.value
    props.updateKursData(data)
  }

  let addKursData = () => {
    props.addKursData()
  }

  const [exchRates, setRates] = useState([])

  useEffect(() => {
    instance.get(`exchange?date=${reportDate}&json`).then((res) => {
      setRates(res.data)
    })
  }, [reportDate])

  const keys = Object.values(exchRates)
  let a = []
  let b = []
  let c = []

  for (const key of keys) {
    if (key.r030 === 840) {
      a.push(key)
    } else if (key.r030 === 643) {
      a.push(key)
    } else if (key.r030 === 978) {
      a.push(key)
    } else if (key.r030 === 959) {
      c.push(key)
    } else if (key.r030 === 961) {
      c.push(key)
    } else if (key.r030 === 962) {
      c.push(key)
    } else if (key.r030 === 964) {
      c.push(key)
    } else {
      b.push(key)
    }
  }
  console.log(a)

  return (
    <div className="wrapper">
      <div className="clear0px"></div>
      <div className="flex">
        <span className="input">
          <button onClick={addKursData}>Запросити курс на дату</button>
        </span>
        <input type="date" ref={calenderRef} onChange={dataChange}></input>
      </div>
      <table className="table">
        <thead>
          <h3 className="">Тільки важливі валюти</h3>
          <tr>
            <th scope="col">Код валюти</th>
            <th scope="col">Назва валюти</th>
            <th scope="col">Курс</th>
            <th scope="col">Абривіатура</th>
            <th scope="col">Дата</th>
          </tr>
        </thead>
        <tbody>
          {a.map((item) => (
            <tr key={item.r030}>
              <th scope="row">{item.r030}</th>
              <td>{item.txt}</td>
              <td>{item.rate}</td>
              <td>{item.cc}</td>
              <td>{item.exchangedate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="table">
        <thead>
          <h3 className="">Тільки метали</h3>
          <tr>
            <th scope="col">Код валюти</th>
            <th scope="col">Назва валюти</th>
            <th scope="col">Курс</th>
            <th scope="col">Абривіатура</th>
            <th scope="col">Дата</th>
          </tr>
        </thead>
        <tbody>
          {c.map((item) => (
            <tr key={item.r030}>
              <th scope="row">{item.r030}</th>
              <td>{item.txt}</td>
              <td>{item.rate}</td>
              <td>{item.cc}</td>
              <td>{item.exchangedate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="table">
        <thead>
          <h3 className="">Інші валюти</h3>
          <tr>
            <th scope="col">Код валюти</th>
            <th scope="col">Назва валюти</th>
            <th scope="col">Курс</th>
            <th scope="col">Абривіатура</th>
            <th scope="col">Дата</th>
          </tr>
        </thead>
        <tbody>
          {b.map((item) => (
            <tr key={item.r030}>
              <th scope="row">{item.r030}</th>
              <td>{item.txt}</td>
              <td>{item.rate}</td>
              <td>{item.cc}</td>
              <td>{item.exchangedate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExchangeComponent
