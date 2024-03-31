import About from "../pages/about/About"
import Careers from "../pages/careers/Careers"
import Services from "../pages/services/Services"
import Blog from "../pages/blog/Blog"
import Contact from "../pages/contact/Contact"
import Privacy from "../pages/privacy/Privacy"



export const ROUTERS = [
    {
        id: 1,
        title: "About Us",
        url: "/about",
        element: <About />
    },
    {
        id: 2,
        title: "Careers",
        url: "/careers",
        element: <Careers />
    },
    {
        id: 3,
        title: "Services",
        url: "/services",
        element: <Services />
    },
    {
        id: 4,
        title: "Blog",
        url: "/blog",
        element: <Blog />
    },
    {
        id: 5,
        title: "Contact Us",
        url: "/contact",
        element: <Contact />
    },
    {
        id: 6,
        title: "Clone project",
        url: "/privacy",
        element: <Privacy />
    },
]