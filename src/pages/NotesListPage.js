import React from 'react'
import notes from '../assets/data'
import ListItem from '../components/ListItem'


const NotesListPage = () => {
  // // one extra long task is being formed due to this for loop
  // for (let i = 0; i < 100000000; i++) {
  //   let num = 5;
  // }
  return (
    <div>
        <div className='notes-list'>
            {notes.map((note, index) => (
                <ListItem note = {note} key = {index} />
            ))}
        </div>
    </div>
  )
}

export default NotesListPage