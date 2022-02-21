import scroll from '../images/portfolioImages/infinite_scroll.png'
import inPicture from '../images/portfolioImages/pictureInPicture.png'
import quote from '../images/portfolioImages/quote_generator.png'
import oldSite from '../images/portfolioImages/thisSite.png'
import yhm from '../images/portfolioImages/YHM.PNG'
import newSite from '../images/portfolioImages/newSite.png'


export const portfolioData =[
    {
        image: newSite,
        title: "Portfolio Site",
        description: "This site and all projects were deployed using AWS and update using TravisCI",
        tools: "React, Canvas, AWS, TravisCI",
        link: ""
    },
    {
        image: quote,
        title: "Quote Generator",
        description: "Pulls from Fit Quotes API to render random quotes. Allows you to tweet a quote that you like using a Twitter query string.",
        tools: "React, Twitter Query, Fit API, AWS",
        link: "/projects/quote_generator"
    },
    {
        image: scroll,
        title: "Infinite Scroll",
        description: "The goal for this project is to mimic social media scrolling. It uses the Unsplash API to pull the photos and descrptions. Unfortunately, the Unsplash API limits free users to 50 requests per hour.",
        tools: "React, Unsplash API, AWS",
        link: "/projects/infinite_scroll"
    },
    {
        image: inPicture,
        title: "Picture In Picture",
        description: "The goal of this project is to mimic screen sharing typically found in conference call apps.",
        tools: "Reac, AWS",
        link: "/projects/in_picture"
    },
    {
        image: yhm,
        title: "Your Harmonius Mind",
        description: "My first site in which you can find various information about the goals and researching involving Your Harmonius Mind. ",
        tools: "Docker, React, AWS BeanStalk, SQLite, Strapi, Google/Facbook API",
        link: ""
    }
]