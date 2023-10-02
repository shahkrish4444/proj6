import React, { cloneElement } from 'react'
import { useState } from 'react';

const CommentForm = ({ data, setData }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  //  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    if (title != "" && text != "") {
      e.preventDefault();
      setData([...data, { title, text }]);
      setTitle('');
      setText('');
    }
    else{
    alert('Please fill the comment')
    }
    // setRating(0);
  };

  return (
    <>
      <center>
        <br />
        <form onSubmit={handleSubmit}>

          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <br />
          <br />

          <label>
            Text:
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
          </label>

          <br />
          <br />
          <button>Submit</button>
        </form>
      </center>
    </>
  )
}

export default CommentForm;