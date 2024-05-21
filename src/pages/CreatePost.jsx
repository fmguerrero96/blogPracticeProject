import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

export default function CreatePost(){
    const [value, setValue] = useState('');
    return(
        <form>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Summary" />
            <input type="file" />
            <ReactQuill theme="snow" value={value} onChange={setValue} />;
        </form>
    )
}