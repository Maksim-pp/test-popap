import { useState } from 'react';
import './App.css';
import { MyModal } from './components/MyModal/MyModal';
import { TextInfo } from './components/textInfo/TextInfo';
import { Form } from './components/Form/Form';

function App() {
  const [visible, setVisible] = useState(false)
  const [text, setText] = useState('')

  return (
    <div className="App" >
      <button className='button'  onClick={()=>setVisible(true)}>Расчет платежей</button>
      <MyModal setVisible={setVisible} visible={visible}>
        <TextInfo setVisible={setVisible}/>
        <Form text={text} setText={setText}/>
        <button className='btnModal'>Добавить</button>
      </MyModal>
    </div>
  );
}

export default App;
