import React from 'react'
import styles from './MyModal.module.scss'

export const MyModal = ({setVisible, visible, children}) => {

    let classes = [styles.MyModal]
    if(visible) {
        classes.push(styles.active)
    }

  return (
    <div className={classes.join(' ')} onClick={()=>setVisible(false)}>
        <div className={styles.MyModalContent} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}
