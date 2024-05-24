import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../Editor';

export default function EditPostPage() {
    const {id} = useParams();
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false)

    const updatePost = function(e){
        e.preventDefault()

    }
    
    if(redirect){
        return(
            <Navigate to={'/'}/>
        )
    }
    
    return(
        <form onSubmit={updatePost}>
            <input type="text" 
                placeholder="Title"
                value={title} 
                onChange={e => setTitle(e.target.value)} />
            <input type="text" 
                placeholder="Summary"
                value={summary}
                onChange={e =>setSummary(e.target.value)} />
            <input type="file" 
                onChange={e => setFiles(e.target.files)} />
            <Editor onChange={setContent} value={content}/>
            <button style={{marginTop: '5px'}}>Create Post</button>
        </form>
    )
}