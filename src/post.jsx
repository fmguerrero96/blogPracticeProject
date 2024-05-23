import { format } from "date-fns"
import { Link } from "react-router-dom"

export default function Post ({title, cover, summary, createdAt, author, _id}) {  
    return(
        <div className="post">
          <div className="image">
            <Link to={`/post/${_id}`}>
              <img src={'http://localhost:4000/'+cover} alt="" />
            </Link>
          </div>
          <div className="texts">
            <Link to={`/post/${_id}`}>
              <h2>{title}</h2>
            </Link>
            <p className="info">
              <a className='author' href="">{author.username}</a>
              <time>{format(createdAt, 'MMM d, yyyy HH:mm') }</time>
            </p>
            <p className='summary'>
              {summary}
            </p>
          </div>
        </div>
    )
}