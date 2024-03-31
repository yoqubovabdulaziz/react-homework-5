import React from 'react'
import "./Careers.scss"
import Input from '../../components/input/Input'
import { INPUTS } from '../../static'

function Careers() {
    return (
        <>
            <section id="career-hero">
                <div className="container hero">
                    <h1 className="hero__title">Testing Engineer</h1>
                    <div className="hero__header">
                        <div className="hero__header__left">
                            <h6>Job Discription</h6>
                            <p>Remote, India , 4 to 5 Years Of Experience Department: Website Design 5 Positions Available.</p>
                        </div>
                        <div className="hero__header__right">
                            <h6>Salary</h6>
                            <p>$30000 Per Anum </p>
                        </div>
                    </div>
                    <div className="hero__box">
                        <div className="hero__box__left">
                            <h3>Details</h3>
                            <h3>Requirements</h3>
                            <h3>Responsibilities</h3>
                        </div>
                        <div className="hero__box__right">
                            <p className='hero__box__body__1'>Design & Create highly engaging industry-related content in both photo, gif & video format
                                Publish Posts on various social media channels
                                Promote content on social networks and monitor engagement (e.g. comments and shares)
                                Research industry-related topics
                                Editing audio and sound design on projects
                                Engage in opportunities to develop original content and concepts for web and mobile
                                Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.
                            </p>
                            <p className="hero__box__body__2">Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="apply">
                <div className="container apply">
                    <h1 className="apply__title">Apply Now</h1>
                    <form>
                        <div className="apply__row">
                            {
                                INPUTS.map((el, inx) => <Input key={inx} title={el} />)
                            }
                        </div>
                        <div className="text__area">
                            <textarea defaultValue="Why do you thing you are good fit for Ether?" name="" id="" cols="1" rows="6"></textarea>
                        </div>
                        <button type='button'>Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Careers