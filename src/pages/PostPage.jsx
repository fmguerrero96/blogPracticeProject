import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function PostPage() {
    const [postInfo, SetPostInfo] = useState({})
    const {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    SetPostInfo(postInfo)
                })
        })
    }, [])

    if(!postInfo){return ('postPage')}

    return(
        <div className="postPage">
            <div className="image">
                <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
            </div>
            <h1>{postInfo.title}</h1>
            <div dangerouslySetInnerHTML={{__html:postInfo.content}}/>
        </div>
    )
};