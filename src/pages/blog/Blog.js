import React, { memo } from 'react'

import "./Blog.scss"

import personImg from "../../assets/images/blog-hero-1.png"
import blogRightImg from "../../assets/images/blog-hero-right.png"

import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { NEWS_CARD } from '../../static';
import NewsCard from '../../components/news-card/NewsCard';

function Blog() {
    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="home">
                        <div className="home-left">
                            <div className="home-left-person">
                                <img src={personImg} alt="" />
                                <p className="text home-left-person-text">Andrew Jonson</p>
                                <p className="text home-left-person-list">
                                    Posted on 27th January 2021
                                </p>
                            </div>
                            <h1 className="home-title">
                                Our internal process and longerm vision
                            </h1>
                            <p className="home-text">
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                                The Maker is a decentralized. We aim to attain the
                            </p>
                            <div className="home-left-link">
                                <Link to="/blog-inner">
                                    Read More
                                    <HiArrowLongRight />
                                </Link>
                            </div>
                        </div>
                        <div className="home-right">
                            <img src={blogRightImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="posts">
                <div className="container posts">
                    <h1 className="posts__title">All posts</h1>
                    <div className="posts__row">
                        {
                            NEWS_CARD?.map(el => <NewsCard
                                key={el.id}
                                title={el.title}
                                image={el.image} />
                            )
                        }
                        {
                            NEWS_CARD?.map(el => <NewsCard
                                key={el.id}
                                title={el.title}
                                image={el.image} />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Blog)