import React from "react";
import { Link } from "react-router-dom";
import nestedComments from "../assets/images/nestedComments.jpg";
import starRating from "../assets/images/starRating.png";

const links = [
  {
    title: "Nested Comments",
    link: "/comment-feature",
    img: nestedComments,
  },
  {
    title: "Star Rating",
    link: "/star-rating",
    img: starRating,
  },
];

const Home = () => {
  return (
    <div className="feature-wrapper">
      <div className="d-flex">
        {links.map((link) => (
          <Link key={link.link} to={link.link}>
            <div className="card">
              <img alt={link.title} src={link.img} className="link-img" />
              <p>{link.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
