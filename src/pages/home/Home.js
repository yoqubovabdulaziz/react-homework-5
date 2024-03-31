import React, { memo } from 'react'
import "./Home.scss"

import { Link } from 'react-router-dom'

import heroImg from "../../assets/images/home-hero.png"

import PositionCard from '../../components/position-card/PositionCard'
import { NEWS_CARD, POSITION_CARD } from '../../static'
import NewsCard from '../../components/news-card/NewsCard'

function Home() {
    return (
        <>
            <section id="hero">
                <div className="container hero">
                    <div className="hero__left">
                        <h1 className="hero__title">We hired people who are very passionate about what they do</h1>
                        <p className="hero__body">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw.</p>
                        <Link className='hero__link'>View Positions</Link>
                    </div>
                    <div className="hero__right">
                        <img className='hero__right__img' src={heroImg} alt="" />
                        <div className='hero__right__hover'></div>
                    </div>
                </div>
            </section>
            <section id="position">
                <div className="container position">
                    <h1 className="position__title">See our open positions </h1>
                    <div className="position__row">
                        {
                            POSITION_CARD?.map((
                                { id, title, body, linkContent, url }) =>
                                <PositionCard
                                    key={id}
                                    title={title}
                                    body={body}
                                    linkContent={linkContent}
                                    url={url} />)
                        }

                    </div>
                </div>
            </section>
            <section id="news">
                <div className="container news">
                    <h1 className="news__title">Latest Blog & News</h1>
                    <div className="news__row">
                        {
                            NEWS_CARD?.map(({ id, title, image }) =>
                                <NewsCard
                                    key={id}
                                    title={title}
                                    image={image} />)
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Home)