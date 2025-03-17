import React, { useState } from 'react'
import styles from './Form.module.scss'

export const Form = ({text, setText}) => {
    
    const [result, setResult]= useState('')
    const [error, setError] = useState(false)

    const [selectBtn, setSelectBtn] = useState(12)
    const countMonth = [12, 24, 36, 48]

    const [selectDate, setSelectDate] = useState('в месяц')
    const dates = ['в год', 'в месяц']

    const [showResult, setShowResult] = useState(false)

    let tag = selectBtn

        
    const resultChange = (e) => {
        e.preventDefault()
        setShowResult(true)
        if(text.length > 0) {
            if(selectDate === 'в месяц'){
                setResult(text / tag)
            } else if (selectDate === 'в год') {
                setResult(text / tag * 12)
            }
            setText('')
            setError(false)
        } else {
            setError(true)
            setShowResult(false)
        }
    }


    return (
    <div className={styles.form}>
        <form action="" className={styles.form__content}>
            <strong htmlFor="" className={styles.form__content_label}>Ваша сумма кредита</strong>
            <input  type='number' name='text' placeholder='Введите данные' className={styles.form__content_input} value={text} onChange={(e)=>setText(e.target.value)} required/>
            {
                error && <div style={{color: '#EA0029'}}>Поле обязательно для заполнения</div>
            }
            <button onClick={resultChange} className={styles.form__content_button}>Рассчитать</button>
        </form>
        <div className={styles.tag}>
            <div className={styles.tagTitle}>Количество месяцев?</div>
            <div className={styles.tagBtns}>
                {
                    countMonth.map(btn => (
                        <div 
                            onClick={()=> setSelectBtn(btn)}
                            key={btn} 
                            className={selectBtn === btn ? [styles.active, styles.btn].join(' ') : styles.btn} 
                        >
                            {btn}
                        </div>
                    ))
                }
            </div>
        </div>
        {
            showResult && 
            <div className={styles.result}>
                <div className={styles.result__title}>Итого ваш платеж по кредиту:</div>
                <div className={styles.result__btns}>
                    {
                        dates.map(date => (
                            <div 
                                onClick={()=>setSelectDate(date)}
                                key={date} 
                                className={ selectDate === date ? [styles.active, styles.btn].join(' ') : styles.btn} 
                            >
                                {date}
                            </div>
                        ))
                    }
                </div>
                <div className={styles.result__text}>{result} рублей</div>
            </div>
        }
        
    </div>
  )
}
