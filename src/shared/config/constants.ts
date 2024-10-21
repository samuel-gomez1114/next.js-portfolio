import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = [ "About", "Experience", "Works"]

// project data
export const projects : ProjectTypes[] = [
    {
        title : "Healthcare Design to code Next.js",
        description : "Converting figma design to website using next js -We implemented features like server-side rendering for improved performance and SEO, as well as create reusable components to maintain consistency across your site. Also, integrating API routes can streamline backend functionality, making your application more robust and interactive",
        tech : [ "React", "CSS", "Nextjs", "Webapp", "Figma", "Embla"],
        code : '#',
        live : 'https://healthcare-design-to-code-nextjs.vercel.app',
        thumnail : "Design.png",
        featured : true
    },

    {
        title : "EcommerceSpectastyle",
        description : "Through this project, we aim to not only learn but also innovate, leveraging the power of the MERN stack to create scalable and efficient solutions. By incorporating cutting-edge warehouse management techniques, we're poised to deliver a comprehensive Ecommerce platform that sets new standards in online retail",
        tech : [ "Node.js", "MongoDB", "React.js", "Express.js", "Mongodb-atlas", "Gssoc24" ],
        live : 'spectastyle.vercel.app',
        code: '#',
        thumnail : "EcommerceMERN.png",
        featured : true
    },

    {
        title : "Bagisto",
        description : "created a customized SEO module that helps boost product visibility and improve search rankings by optimizing meta tags and URLs. It is really helpful to develop an analytics dashboard that gives real-time insights into customer behavior and sales trends, allowing store owners to make better decisions. Plus, considered adding a loyalty rewards program to encourage repeat purchases and keep customers coming back",
        tech : [ "Open-source", "Ecommerce", "Laravel", "Hacktoberfest", "Multi-tenant" ],
        live : 'https://bagisto.com',
        code: '#',
        thumnail : "Bagisto.png",
        featured : true
    },

    {
        title : "Laravel-Crafte",
        description : "Admin panel builder / CRUD generator for Laravel -We implemented features such as dynamic data modeling that allows users to define and modify database schemas through a user-friendly interface. Additionally, we incorporated role-based access control to manage user permissions effectively, ensuring that different users can perform specific actions based on their roles. Finally, adding built-in data validation and export capabilities (like CSV or PDF generation) can enhance the usability and functionality of the admin panel.",
        tech : [ "PHP", "CMS", "Laravel", "CRUD", "Craftable" ],
        live : 'getcraftable.com',
        code: '#',
        thumnail : "Laravel.png",
        featured : true
    },

    {
        title : "ChatBOT",
        description : "implemented a feature that allows users to ask questions or give commands using their voice so that this could make the interaction feel more natural and user-friendly",
        tech : [ "ChatGPT", "VectorDB", "LangChain" ],
        live : 'chatbotui.com',
        code: '#',
        thumnail : "AIChat.png",
        featured : true
    },

    {
        title : "AppWrite",
        description : "Build your entire backend within minutes and scale effortlessly using Appwrite's open-source platform. Add Authentication, Databases, Functions, Storage, and Messaging to your projects using the frameworks and languages of your choice.",
        tech : [ "React", "Android ", "Nextjs", "Self-hosted", "React-Native", "Flutter",],
        live : 'appwrite.io',
        code: '#',
        thumnail : "Appwriting.png",
        featured : true
    },

    {
        title : "Machine-Learning-Projects",
        description : "Showcase a selection of machine learning projects undertaken to understand and master various ML concepts. Each project reflects commitment to applying theoretical knowledge to practical scenarios, demonstrating proficiency in machine learning techniques and tools.",
        tech : [ "python-project", "opencv-projects", "nlp-projects", "ml-project", ],
        code : '#',
        live : 'https://shsarv.github.io/Machine-Learning-Projects/',
        thumnail : "MachineLearning.png"
    },

    {
        title : "Smallstep",
        description : "A private certificate authority (X.509 & SSH) & ACME server for secure automated certificate management, so you can use TLS everywhere & SSO for SSH.",
        tech : [ "React", "Node", "Tailwind CSS", "Firebase" ],
        live : 'https://smallstep.com/certificates',
        code: "#",
        thumnail : "Smallstep.png"
    },

    {
        title : "Vitepress",
        description : "Vite & Vue powered static site generator.",
        tech : [ "React", "Tailwind CSS", "Firebase", "MV3" ],
        live : 'vitepress.dev',
        code: '#',
        thumnail : "Vitepress.png"
    },

    {
        title : "Pointfree",
        description : "The source for www.pointfree.co, a video series on functional programming and the Swift programming language.",
        tech : [ "GSAP", "React", "Tailwind CSS" ],
        live : 'pointfree.co',
        code: "#",
        thumnail : "Pointfree.png"
    },

    {
        title : "Kickstarter",
        description : "Kickstarter for iOS. Bring new ideas to life, anywhere.",
        tech : [ "Next.js", "React", "ChatGPT", "OpenAI" ],
        live : 'https://www.kickstarter.com/mobile',
        code: '#',
        thumnail : "Kickstarter.png"
    },

    {
        title : "SKIA",
        description : "Skia is a complete 2D graphic library for drawing Text, Geometries, and Images.",
        tech : [ "React", "ElevenLabs", "Three.js", "ChatGPT" ],
        live : 'skia.org',
        code: '#',
        thumnail : "Skia.png"
    },
    
    {
        title : "RSpack",
        description : "The fast Rust-based web bundler with webpack-compatible API 🦀️",
        tech : [ "TypeScript", "Rust", "Bundler", "Compiler" ],
        live : 'rspack.dev',
        code: '#',
        thumnail : "RSpack.png"
    },

    {
        title : "MXnet",
        description : "Lightweight, Portable, Flexible Distributed/Mobile Deep Learning with Dynamic, Mutation-aware Dataflow Dep Scheduler; for Python, R, Julia, Scala, Go, Javascript and more",
        tech : [ "MXnet" ],
        live : 'mxnet.apache.org',
        code: 'https://github.com/oleksandrStar/facility-management-system',
        thumnail : "MXnet.png"
    },

    // {
    //     title : "Sales Sensei",
    //     description : "This is a sales assistant chatbot was developed using React, Node.js, Tailwind CSS, Salesforce API and Stripe. I integrated the salesforce API to fetch some business data and implemented the subscription using Stripe.",
    //     tech : [ "React", "Node", "Salesforce", "Stripe" ],
    //     code : 'https://github.com/oleksandrStar/sales-sensei',
    //     live : 'https://sales-sensei-delta.vercel.app/',
    //     thumnail : "salessensei.png"
    // },

    // {
    //     title : "3D Configurator Website",
    //     description : "I developed the 3D configurator website to emulate the room with colors, materials and so on.",
    //     tech : [ "React", "Three.js", "WebGL", "Tailwind CSS" ],
    //     live : 'https://github.com/oleksandrStar',
    //     code: 'https://github.com/oleksandrStar',
    //     thumnail : "3dconf.png"
    // },

    // {
    //     title : "E-Commerce Site",
    //     description : "This is an e-commerce platform was developed using React and Node.js. In this project, I used MongoDB for a database. And I implement the multi filter function to find the suitable products quickly.",
    //     tech : [ "React", "Redux", "Node", "Stripe" ],
    //     code : 'https://github.com/oleksandrStar/my-ecommer',
    //     live : 'https://atem-ecommerce.netlify.app/',
    //     thumnail : "ecommerce.png"
    // },

    // {
    //     title : "Gmail Notifier Chrome Extension",
    //     description : "I develope the gmail alert chrome extension based on MV3 and in this project, I used Gmail API, React and Typescript. When you receive a new gmail, you can get a alert as full screen modal.",
    //     tech : [ "React", "TypeScript", "MV3", "Gmail API" ],
    //     code : 'https://github.com/oleksandrStar/gmail-alert-extension',
    //     live : 'https://github.com/oleksandrStar/gmail-alert-extension',
    //     thumnail : "emailalert.png"
    // }
    
]