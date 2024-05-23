import { format } from "date-fns"

export default function Post ({title, cover, summary, createdAt, author}) {  
    return(
        <div className="post">
          <div className="image">
            <img src={'http://localhost:4000/'+cover} alt="" />
          </div>
          <div className="texts">
            <h2>{title}</h2>
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