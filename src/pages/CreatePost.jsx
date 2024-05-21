import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

export default function CreatePost(){
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    
    return(
        <form>
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