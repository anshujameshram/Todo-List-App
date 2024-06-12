import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "./App.css"
import Todo from './components/Todo'
import InlineComponent from './components/InlineComponent'
import OutlineComponent from './components/OutlineComponent'
import Header from './components/Header'
// import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      {/* <Form/> */}
      <Header/>
      <Todo />
      {/* <InlineComponent/>
      <OutlineComponent/> */}


    </div>
  )
}

export default App
