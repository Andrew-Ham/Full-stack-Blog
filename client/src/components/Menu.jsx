import React from 'react'
import "../styles/MenuStyles.css"

const Menu = () => {
    const posts = [
        {
          id: 1,
          title: "THIS IS PLACEHOLDER TITLE ASDASDAJSDASDALJDSA JASIDJIASJD ",
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
    <div className = "menu">
        <h1>Recommended</h1>
        {posts.map((post) => (
            <div className = "menupost" key = {post.id}>
                <img src = {post.img} alt = "postimage" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu