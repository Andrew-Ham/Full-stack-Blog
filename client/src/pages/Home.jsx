import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/HomeStyles.css"

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "title",
      desc: "desc",
      img: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
    } ,
    {
      id: 2,
      title: "title",
      desc: "desc",
      img: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
    },
    {
      id: 3,
      title: "title",
      desc: "desc",
      img: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
    },
  ];

  return (
    <div className = "home">
      <div className = "posts">
        {posts.map((post) => (
          <div className = "post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="img" />
            </div>
            <div className="content"> 
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Home