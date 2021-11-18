import search from '../../../../../../img/search.png'
// 3 css файлика, бо раніше тут було 3 різних компоненти. Зараз не встиг перекинути в один (ще треба перевірити, чи класи не збігаються)
import d from '../Item/Item.module.css'
import React, { useState } from 'react'
import Item from '../Item/Item'
import Button from '../../../../../../common/button'

const CatalogMain = ({ artState }) => {
  let inputRef = React.createRef()
  let priceRef = React.createRef()
  let weightRef = React.createRef()

  // отримую всі значення цін/ваги для значень інпута, які я передам через мап
  let prices = artState
    .map((goods) => goods.price)
    .sort(function (a, b) {
      return a - b
    })

  let weight = artState
    .map((goods) => goods.weight)
    .sort(function (a, b) {
      return a - b
    })

  // функція для отримання лише унікальних значень
  function getUniqTags(data) {
    let results = []

    data.forEach(function (value) {
      if (results.indexOf(value) === -1) {
        results.push(value)
      }
    })

    return results
  }

  // отримую унікальні значення цін/ваги для інпута
  let uniqPrices = getUniqTags(prices)
  let uniqWeight = getUniqTags(weight)

  // локальні стейти для роботи з полем вводу 1й, з селектом price 2й, з селектом price 3й.
  const [userInputValue, setValue] = useState('')
  let [inputPrice, setInputPrice] = useState(Number)
  const [inputWeight, setInputWeight] = useState(Number)

  console.log(inputPrice)
  console.log(inputWeight)

  // отримую значення, що ввели і одразу їх відправляю у локальний стейт, який через інклудс перегляне, чи введене значення співпадає з тим, яке прийшло
  // у загальному стейті і відмалює лише співпадіння
  let dataChange = () => {
    setValue(inputRef.current.value)
  }

  // ці функціїї "висять" на ОнЧейнджах інпутів і слідкуюит за значеннями інпутів
  let selectDataChange = () => {
    let data = priceRef.current.value
    return data
  }

  let selectWeightChange = () => {
    let data = weightRef.current.value
    return data
  }

  // он клік для кнопки, значення з попеденього етапу передає у локальний стейт, який як і для 1го поля перевіряє що співпало і малює лише співпадіння.

  let handleBtn = (e) => {
    setInputPrice(selectDataChange())
    setInputWeight(selectWeightChange())
  }

  //  функція, про яку було написано вище. Співставляє стейт, який прийшов з інформацією з інпутів.
  const filteredGoods = artState.filter((goods) => {
    return (
      goods.title
        .toLowerCase()
        .trim()
        .includes(userInputValue.toLocaleLowerCase().trim()) ||
      goods.price.toString().trim().includes(userInputValue.trim()) ||
      goods.text
        .toLowerCase()
        .trim()
        .includes(userInputValue.toLocaleLowerCase().trim())
    )
  })

  let filterByPrice = artState.filter((goods) => {
    return goods.price.toString().includes(inputPrice)
  })

  let filterByWeight = artState.filter((goods) => {
    return goods.weight.toString().includes(inputWeight)
  })

  // функція для відмалювання 2х фільтрів

  let filteredDuplicatess = filterByWeight.filter(function (val) {
    return filterByPrice.indexOf(val) != -1
  })

  let duplicates = () => {
    if (filterByPrice.length === 0) {
      return filterByWeight
    } else if (filterByWeight.length === 0) {
      return filterByPrice
    } else {
      return filteredDuplicatess
    }
  }

  return (
    <div className={d.wrapper}>
      <div className={d.filtersBar}>
        <div className={d.set}>
          <div>
            <select
              defaultValue={'Price'}
              ref={priceRef}
              onChange={selectDataChange}
            >
              <option disabled value="Price">
                Price
              </option>

              {uniqPrices.map((goods) => (
                <option key={goods.index} value={goods}>
                  price: {goods} $
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              defaultValue={'Weight'}
              ref={weightRef}
              onChange={selectWeightChange}
            >
              <option disabled value="Weight">
                Weight
              </option>
              {uniqWeight.map((goods) => (
                <option key={goods.index} value={goods}>
                  weight: {goods} g
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={d.btn}>
          <Button text="Apply" onClick={handleBtn} />
        </div>
      </div>
      <div className={d.flex}>
        <input
          className={d.input}
          type="text"
          ref={inputRef}
          onChange={dataChange}
          placeholder={'live search'}
        />
        <img className={d.imgAd} src={search} alt="search-icon" width="16px" />
      </div>
      <div className={d.cardWrapper}>
        {uniqPrices.length > filterByPrice.length + 1 ||
        uniqWeight.length > filterByWeight.length + 1
          ? duplicates().map((items) => <Item key={items.id} {...items} />)
          : filteredGoods.map((items) => <Item key={items.id} {...items} />)}
      </div>
    </div>
  )
}

export default CatalogMain
