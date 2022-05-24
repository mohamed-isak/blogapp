import { useParams } from 'react-router';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';
const BlogDetail = () => {
   
    const {id} = useParams();
    const history = useHistory();
    const {data: blog, error, isPending} =
     useFetch("http://localhost:8000/blogs/" + id);

    const handleDelete = () => {
       fetch('http://localhost:8000/blogs/'+blog.id,{
           method: 'DELETE',

       }).then(() =>{
           history.push('/');
       })
    }
     
    
      
    return ( 
        <div className="blog-details">
            <h2>Blog Details</h2>
            {isPending && (
               <div className="loading">Loading......</div>
            )}
            {error && (
                <div className="err">{error}</div>
            )}
            {
                blog && (
                    <article>
                       <h2>{blog.title}</h2> 
                       <p>{blog.body}</p>
                    </article>
                )
            }
           <button onClick={handleDelete}>Delete</button>
      
        </div>
     );
}
 
export default BlogDetail;