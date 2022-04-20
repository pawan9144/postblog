import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "../stylling/blogs.css";
import axios from "axios";
import { REACT_APP } from "../services/env.config";
import { useSelector,useDispatch} from "react-redux";
import { setProducts } from "../redux/actions/productsActions";


const Blogs = () => {

  const products = useSelector((state)=>state.allProducts.products)
  console.log(">>>>>>>>>>>>>",products);
  const dispatch = useDispatch()



  useEffect(() => {
    viewPost();
  }, []);

  // const [ispost, setpost] = useState([]);

  const viewPost = async() =>{
    try {
      await axios.get(`${REACT_APP}/api/postblog/getblog`)
      .then(res => { 
        console.log(res.data.blog.blogImage)
        if(res.status === 200){
          // setpost(res.data.blog);
          dispatch(setProducts(res.data.blog))

        }
  
      })
    } catch (error) { throw error;}
  }



  const onDelete = async (id) => {


  }


  return (
    <div className="blog__page">
      <h1><Link to="/addblogs">Add blogs</Link></h1>
  
      <div className="blogs" >
      {products.map((item,index)=>(
        <Link to={`/showblog/${item._id}`}>
 <div className="blog">
 
            <img src={item.blogImage} />
            <img src={`/upload/${item.blogImage}`} />
            <div>
              <h3 className="sourceName">
              
                <p>{item.blogTitle}</p>
              </h3>
           
              <p>{item.Description}</p>
            </div>
            <button ><Link to={`/edit/${item._id}`}>Edit</Link></button> <button onClick={() => onDelete(item.id)}>Delete</button>
          </div>
        </Link>

     ))}
    
      </div>
    </div>
  );
};

export default Blogs;

