import React from "react";
import "../styles/SingleStyles.css";
import { MdOutlineModeEditOutline, MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Menu from "../components/Menu"

const Single = () => {
  return (
    <div className="singlepost">
      <div className="content">
        <img
          src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
          alt="placeholder"
        />
        <div className="user">
          <img
            src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
            alt="placeholder"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <MdOutlineModeEditOutline
                size={25}
                color="green"
                border-radius="50%"
              />
            </Link>
          </div>
          <div className="delete">
            <MdDeleteForever size={25} color="red" cursor="pointer" />
          </div>
        </div>
        <h1>THIS IS TITLE PLACEHOLDER</h1>
        <p>
          THIS IS PARAGRAPH PLACE HOLDER! BUT…. today you will be learning
          absolutely everything you need to know about how to DESTROY this thing
          once and for all. This blogpost is ~13,000 words long, or about 50
          pages if this were a book, and references north of 180 studies. Take
          your time with it. You will learn a lot, and I’ve tried to answer
          every possible question you might have. With that said, here’s a list
          of everything we will be talking about today.
        </p>
      </div>
        <Menu />
    </div>
  );
};

export default Single;
