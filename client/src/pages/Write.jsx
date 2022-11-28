import React from 'react'
import "../styles/WriteStyles.css"
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  /* 
   console.log(value) allows you to see in the console that the text editor is working. 
   ReactQuill is a free, open source WYSIWYG editor built for the modern web
  */

  return (
    <div className = "writing">
      <div className="writecontents">
        <input type="text"  placeholder='Title'/>
        <div className="texteditor">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="writemenu">
        <div className="writeitem">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visiblity: </b> Public
          </span>
          <input type="file" name="" id="file"/>
          <label htmlFor="file">Upload File</label>
          <div className="writebuttons">
            <button className = "savedraft">Save as draft</button>
            <button className = "update">Update</button>
          </div>
        </div>
        <div className="writeitem">
          <h1>Category</h1>
          <div className ="category">
            <input type="radio" name = "category" value = "programming" id = "programming"/>
            <label htmlFor="programming">Programming</label>
          </div>
          <div className ="category">
            <input type="radio" name = "category" value = "health" id = "health"/>
            <label htmlFor="health">Health/Lifestyle</label>
          </div>
          <div className ="category">
            <input type="radio" name = "category" value = "skincare" id = "skincare"/>
            <label htmlFor="skincare">Skincare</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write