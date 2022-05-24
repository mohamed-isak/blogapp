
import BlogList from "./BlogList";
import useFetch from "./useFetch";

  

const Home = ()=>{

    const {data:blogs,isPending,error} = useFetch("http://localhost:8000/blogs"); 

      /* function handleDelete(id) {
           const removeEle = blogs.filter((blog) => blog.id!==id)
           setBlog(removeEle);  
       } */
    return (
        <div className="home">
       { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {blogs && <BlogList blogs={blogs} title="Recent Blogs"/> }
        {  /*  <BlogList blogs={blogs.filter((blog)=> blog.author ==="yoshi")} title="Yoshi Blogs"/> */}
        </div>

    );
}

export default Home;