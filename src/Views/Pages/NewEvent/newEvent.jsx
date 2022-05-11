import React, {useState} from 'react';
import Modal from 'react-modal';
import Datetime from 'react-datetime';
import styles from './newEvent.module.scss'

const NewEvent = ({isOpen, onClose, onEventAdded}) => {
    const [title, setTitle] = useState('')
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())

    const onSubmit = (event) => {
        event.preventDefault()

        onEventAdded({
            title,
            start,
            end
        })
        onClose()
    }

    return (
        <Modal 
        style={{
            overlay: {
              position: 'fixed',
              top: '65%',
              left: '75%',
              right: 0,
              bottom: 0,
            },
            content: {
              marginBottom: 'auto',
              position: 'absolute',
              top: '0px',
              left: '0px',
              right: '0px',
              bottom: '0px',
              border: '1px solid #ccc',
              background: 'rgb(61, 74, 94)',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '15px',
              outline: 'none',
              padding: '0px'
            }
          }}
         isOpen={isOpen} onRequestClose={onClose}>
            <form className={styles.form_horizontal}  onSubmit={onSubmit}>
                <input className={styles.input} placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                <div className={styles.date}>
                    <label>Start Date</label>
                    <Datetime value={start} onChange={date => setStart(date)} />
                </div>
                <div  className={styles.date}>
                    <label>End Date</label>
                    <Datetime value={end} onChange={date => setEnd(date)} />
                </div>

                <button className={styles.button}>Add Event</button>
                
            </form>
        </Modal>
    )
}

export default NewEvent;