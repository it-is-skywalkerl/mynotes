import React from 'react'
import {useParams} from 'react-router-dom';
import notes from '../assets/data'

const NotePage = () => {
  let noteId = useParams().id
  let note = notes.find(note => note.id === Number(noteId))
  if(note === undefined) {
    note = {
      id: 404,
      body: "Note not found"
    }
  }
  return (
    <div>
        <p>{note.body}</p>
    </div>
  )
}

export default NotePage