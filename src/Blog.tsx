import React from 'react';
import "./App.css";
import './Blog.css';
import { TbCalendarWeekFilled } from 'react-icons/tb';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


interface BlogCardProps {

    title: string;
    date: string;
    description: string;
    link : string;
}

// make this code more modular - put an interface in here so all I need to change is the description, title and date.

function Blog() {

    return (

        <div className="Blog" id="blog">
            <span className="section-heading">My{"\u00A0"}<span className="gradient"> Blog </span> </span>
            <span className="section-sub-heading">My newly launched blog, where you can view my latest thoughts & experiences on the industry.</span>

            <div className="blog-card-container">

                <div className="blog-card">
                    <span className="blog-title"> Welcome to the New Website!</span>
                    <span className="blog-date"> <TbCalendarWeekFilled className="blog-icon"/> 19 June 2025  </span>
                    <span className="blog-desc">This is my first blogpost, and it coinsides with the launch of this new and improved site. In this blog post i'll detail my through process behind this site.</span>
                     <button className="blog-button">  <a href="https://example.com/blog1" target="_blank" rel="noopener noreferrer">Read More <HiOutlineArrowNarrowRight /> </a> </button>
                </div>

                <div className="blog-card">
                    <span className="blog-title"> My experience with graphQL </span>
                   <span className="blog-date"> <TbCalendarWeekFilled className="blog-icon"/> 19 June 2025  </span>
                    <span className="blog-desc">This is a brief description of the second blog post. It discusses advanced topics in programming.</span>
                     <button className="blog-button"> <a href="https://example.com/blog1" target="_blank" rel="noopener noreferrer">Read More <HiOutlineArrowNarrowRight /> </a> </button>
                </div>

                <div className="blog-card">
                    <span className="blog-title"> NextJS - The Future? </span>
                    <span className="blog-date"><TbCalendarWeekFilled className="blog-icon"/> 19 June 2025  </span>
                    <span className="blog-desc">This is a brief description of the third blog post. It explores new technologies in the industry.</span>
                     <button className="blog-button"> <a href="https://example.com/blog1" target="_blank" rel="noopener noreferrer">Read More <HiOutlineArrowNarrowRight /> </a> </button>
                </div>

            </div>
        
        </div>

    )
}

export default Blog;