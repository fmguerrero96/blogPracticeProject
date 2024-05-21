import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
}
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

export default function CreatePost(){
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');

    const createNewPost = function(e){
        const data = new FormData();
        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('file', )

        e.preventDefault()
        fetch('http://localhost:4000/post',
            method: 'POST', 
            body: 
        )
    };
    
    return(
        <form onSubmit={createNewPost}>
            <input type="text" 
                placeholder="Title"
                value={title} 
                onChange={e => setTitle(e.target.value)} />
            <input type="text" 
                placeholder="Summary"
                value={summary}
                onChange={e =>setSummary(e.target.value)} />
            <input type="file" />
            <ReactQuill theme="snow" 
                value={content} 
                onChange={newValue => setContent(newValue)}
                modules={modules}
                formats={formats} />
            <button style={{marginTop: '5px'}}>Create Post</button>
        </form>
    )
}