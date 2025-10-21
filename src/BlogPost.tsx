import "./App.css";

import { motion } from "motion/react"
import { useParams } from "react-router-dom";

import './Blog-post.css';


import NewSite from './Blog_Posts/New_Site.json';
import Orbit from './Blog_Posts/Orbit.json';
import { TbCalendarWeekFilled } from "react-icons/tb";
import { FaPencil } from "react-icons/fa6";
import Breadcrumbs from "./Breadcrumbs";

//Orbit, OtherPost
export const BlogsArray = [NewSite, Orbit];

function BlogPost() {
    const { slug } = useParams();

    //get the slug from the json file
    const post = BlogsArray.find(
        p => p.slug === slug
    );

    if (!post) return <div> Post not found </div>

    return (

        <motion.div
            className="Blog"
            id="blog"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="page-nav">

                <div className="breadcrumbs">
                    <Breadcrumbs />
                </div>

            </div>

            <div className="blog-post">
                <div className="blog-post-top">
                    <h1 className="blog-post-heading">{post.title}</h1>
                    <h2 className="blog-post-sub-heading">{post.description}</h2>
                    <div className="blog-post-info">
                        <span className="blog-post-date"><TbCalendarWeekFilled style={{ margin: '5px', fontSize: '20px' }} />  {post.date}</span>
                        <span className="blog-post-date"><FaPencil style={{ margin: '5px' }} /> By Daniel Steele </span>

                    </div>
                </div>
                <span className="blog-post-content">{post.paragraph1}</span>
                <span className="blog-post-content">{post.paragraph2}</span>
                <span className="blog-post-content">{post.paragraph3}</span>
                <span className="blog-post-content">{post.paragraph4}</span>
                <span className="blog-post-content">{post.paragraph5}</span>
                <span className="blog-post-content">{post.paragraph6}</span>


            </div>
        </motion.div>

    )
}

export default BlogPost;