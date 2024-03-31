import React, { memo } from 'react'

import "./BlogInner.scss"

import heroImg from "../../assets/images/blog-inner-hero.png"
import personImg from "../../assets/images/blog-hero-1.png"

function BlogInner() {
    return (
        <>
            <section id="blog-inner-hero">
                <div className="container hero">
                    <img src={heroImg} alt="" />
                </div>
            </section>
            <section id="breaking">
                <div className="container-mini breaking">
                    <div className="breaking__header">
                        <span>
                            <img src={personImg} alt="" />
                            <h6>Andrew Jonson</h6>
                        </span>
                        <h6>Posted on 27th January 2021</h6>
                    </div>
                    <h1 className="breaking__title">
                        Breaking the code How did we build our Figma plugin
                    </h1>
                    <p className="breaking__body__1">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
                    <p className="breaking__body__2">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
                    <p className="breaking__body__3">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice.</p>
                    <h2 className="breaking__title__2">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h2>
                    <p className="breaking__body__4">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
                    <p className="breaking__body__5">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice.</p>
                </div>
            </section>
        </>
    )
}

export default memo(BlogInner)