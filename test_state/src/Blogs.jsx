// updated Blogs.jsx component after util 
import { formatDate } from "./dateUtils";

const Blog = ({title, content, date}) => {
    return(
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>published on: {formatDate(date)}</p>
        </div>
    )
}

export default Blog;


