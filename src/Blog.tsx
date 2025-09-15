import React from 'react';
import "./App.css";
import './Blog.css';
import { TbCalendarWeekFilled } from 'react-icons/tb';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import GradientText from './React-Bits/GradientText.tsx'

interface BlogCardProps {

    title: string;
    date: string;
    description: string;
    link: string;
}

const Blog_card: React.FC<BlogCardProps> = ({ title, date, description, link }) => {

    return (
        <div className="blog-card">
            <span className="blog-title">{title}</span>
            <span className="blog-date"> <TbCalendarWeekFilled className="blog-icon" /> {date} </span>
            <span className="blog-desc">{description}</span>
            <button className="blog-button">
                <a href={link} target="_blank" rel="noopener noreferrer">Read More <HiOutlineArrowNarrowRight /> </a>
            </button>
        </div>
    );
}


// make this code more modular - put an interface in here so all I need to change is the description, title and date.

function Blog() {

    return (

        <div className="Blog" id="blog">
            <span className="section-heading">My{"\u00A0"}<span className="gradient"> Blog </span> </span>
            {/*<span className="section-sub-heading">My newly launched blog, where you can view my latest thoughts & experiences on the industry.</span> */}


            <span className="blog-coming-soon">
                <GradientText
                    colors={["#e66465", "#9198e5", "#e66465", "#9198e5"]}
                    animationSpeed={5}
                    showBorder={false}
                    className="greeting-title"
                >
                    <span className="blog-coming-soon">
                        This section is currently under construction, so be sure to check back later!
                    </span>
                </GradientText>
            </span>

            <div className="blog-card-container">

                <Blog_card
                    title='Welcome to the New Website!'
                    date='19 June 2025'
                    description='This is my first blogpost, and it coinsides with the launch of this new and improved site. In this blog post ill detail my through process behind this site.'
                    link=''

                />

                <Blog_card
                    title='My Experience with GraphQL'
                    date='23rd June 2025'
                    description='This is my first blogpost, and it coinsides with the launch of this new and improved site. In this blog post ill detail my through process behind this site.'
                    link=''

                />

                <Blog_card
                    title='NextJS - The Future?'
                    date='15th July 2025'
                    description='This is my first blogpost, and it coinsides with the launch of this new and improved site. In this blog post ill detail my through process behind this site.'
                    link=''

                />

            </div>

        </div>

    )
}

export default Blog;