import { FaReact, FaCss3Alt,  FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import Project1 from "../assets/project1.png"
import Project2 from "../assets/project2.png"
import Project3 from "../assets/project3.png"

export const Skills = [
    {
        id: 0,
        tech: "React JS",
        icon: <FaReact />,
    },
    {
        id: 1,
        tech: "HTML",
        icon: <FaHtml5 />,
    },
    {
        id: 2,
        tech: "CSS",
        icon: <FaCss3Alt />,
    },
    {
        id: 3,
        tech: "Javascript",
        icon: <SiJavascript />,
    },
];

export const projectDetails = [
    {
        id:0,
        project_name: "Apple E-Commerce",
        project_desc:"Welcome to the Apple Ecommerce Site.Our site is the perfect destination for Apple enthusiasts who want to shop for the latest iPhones, iPads, MacBooks and other Apple products.We offer competitive pricing and a wide variety of products, including the latest releases and most popular accessories.Our easy-to-use interface allows you to browse and purchase your favorite Apple products from the comfort of your own home.",
        tech_stack: ['HTML' , 'CSS' , 'JavaScript'],
        project_img: Project1,
        project_url: "https://apple-e-commerce-clone.netlify.app",
        reverse: false,
    },
    {
        id:1,
        project_name: "Classic Car Collection",
        project_desc:"Welcome to Our Classic Car Collection.Our collection features some of the most beautiful classic cars from all over the world. We have a wide variety of makes and models, from American muscle cars to British luxury vehicles. Our collection is available to view online through our website, allowing visitors to browse our incredible selection from the comfort of their own home.",
        tech_stack: ['HTML' , 'CSS' , 'JavaScript'],
        project_img: Project2,
        project_url: "https://car-collection-site.netlify.app",
        reverse: true,
    },
    {
        id:2,
        project_name: "Amazone Clone",
        project_desc:"An Amazon clone app typically includes features such as product listings, shopping carts, checkout, and payment processing. for making this application i used React library and some other npm packages like 'react-multi-carousel' for adding carousel , 'react-currency-format' and for hosting this site i used Firebase plateform. ",
        tech_stack: ['HTML' , 'CSS' , 'JavaScript' , 'react'],
        project_img: Project3,
        project_url: "https://clone-bb877.firebaseapp.com",
        reverse: false,
    }

]

export const NavLink = [
    {
        id:0 ,
        name:'Home' ,
        href: "Home",
    },
    {
        id:1 ,
        name:'My skills' ,
        href: "Skills",
    },
    {
        id:2 ,
        name:'Projects' ,
        href: "Projects",
    },
    {
        id:3,
        name:'Contact' ,
        href: "Contact",
    }
]
