
import { useState } from 'react';
// import { data } from '../../Practica/src/data';
import './App.css';
import { User } from './components/User';
import { data } from './data.js'


export const App = () => {

  const [age, setAge] = useState(1)
  const [country, setCountry] = useState()

  const renderCount = () => {
    switch (country) {
      case 1:
        let arr7 = data.filter((el) => {
          return el.age < 18 && el.country === 'Kyrgyzstan';
        })

        return arr7.map((el, id) => {
          return <User data={el} key={id} />
        })

        case 2:
          let arr8 = data.filter((el) => {
            return el.age < 18 && el.country === 'USA'
          })

          return arr8.map((el, id) => {
            return <User data={el} key={id} />
          })
         default:
           let arr = data.filter((el, id) => {
             return el.age < 18
           })
           return arr.map((el, id) => {
             return <User data={el} key={id} />
           })
    }
  }


  const renderUsers = () => {

    switch (age) {
      case 1:
        return (
          <>
          <div>
            <button className='btn1' onClick={() => setCountry(1)}>Kyrgyz people</button>
            <button className='btn1' onClick={() => setCountry(2)}>Foreign people</button>
            <div>{renderCount()}</div>
          </div>
          </>
        )

        case 2:
          let arr1 = data.filter((el) => {
            return el.age > 18 && el.age < 25;
          })
          return arr1.map((el, id) => {
            return <User data={el} key={id} />
          })

          case 3:
            let arr2 = data.filter((el) => {
               return el.age > 24;
            })
            return arr2.map((el, id) => {
              return <User data={el} key={id} />
            })

            case 4:
              return data.map((el, id) => {
                return <User data={el} key={id} />
              })

              default:
                return ''
    }
  }

  return (
    <div className="App">
      <div className='btn-group'>
        <button className='btn' onClick={() => setAge(1)}>меньше 18</button>
        <button className='btn' onClick={() => setAge(2)}>от 18 до 24</button>
        <button className='btn' onClick={() => setAge(3)}>от 24 до 50</button>
        <button className='btn' onClick={() => setAge(4)}>Все участники</button>
      </div>
      <div className="container">{renderUsers()}</div>
    </div>
  )
}