import c1 from "../../../../public/images/courses/React.png"
import c2 from "../../../../public/images/courses/next.png"
import c3 from "../../../../public/images/courses/tailwindcss.png"
import c4 from "../../../../public/images/courses/nest.jpeg"
import c5 from "../../../../public/images/courses/dotnet.png"
import c6 from "../../../../public/images/courses/springBoot.jpeg"
import c7 from "../../../../public/images/courses/Bootstrap.png"
import c8 from "../../../../public/images/courses/CSS.png"
import c9 from "../../../../public/images/courses/html5.png"
import c10 from "../../../../public/images/courses/js.jpg"
import c11 from "../../../../public/images/courses/Sass.png"
import c12 from "../../../../public/images/courses/angular-logo.jpg"
import c13 from "../../../../public/images/courses/mongoDB.png"
import c14 from "../../../../public/images/courses/mysql.jpg"
import c15 from "../../../../public/images/courses/php.png"
import c16 from "../../../../public/images/courses/python.jpg"
import c17 from "../../../../public/images/courses/vue.jpg"

export function getCourses(){

  const courses = [
    {
      id: "PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza",
      img: c1,
      title: "React.js",
      subtitle: "A JavaScript library for building user interfaces, primarily used for developing single-page applications.",
      btncolor: "#05b2bd",
      description: "React.js is a powerful and flexible JavaScript library for building user interfaces, particularly single-page applications where you need a fast and interactive user experience. It allows developers to create large web applications that can update and render efficiently in response to data changes."
    },
    {
      id: "PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH",
      img: c2,
      title: "Next.js",
      subtitle: "A React framework that enables server-side rendering and static site generation for building optimized web applications.",
      btncolor: "#000",
      description: "Next.js is a framework built on top of React that provides infrastructure and a simple development experience for server-side rendered (SSR) applications. It also supports static site generation (SSG), making it an excellent choice for building fast, SEO-friendly websites."
    },
    {
      id: "PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw",
      img: c3,
      title: "Tailwind CSS",
      subtitle: "A utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.",
      btncolor: "#46acb3",
      description: "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. It encourages a utility-first approach, where you style your components using a set of predefined classes."
    },
    {
      id: "PL0Zuz27SZ-6MexSAh5x1R3rU6Mg2zYBVr",
      img: c4,
      title: "Nest.js",
      subtitle: "A progressive Node.js framework for building efficient, reliable, and scalable server-side applications using TypeScript.",
      btncolor: "#e1214d",
      description: "Nest.js is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript, and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming)."
    },
    {
      id: "PLp_RsiLZjwQQ7CxVhnM4G8i5veEClNPfX",
      img: c5,
      title: "ASP.NET",
      subtitle: "A framework for building web applications and services with .NET and C#, offering a robust, scalable, and high-performance backend.",
      btncolor: "#4a29bf",
      description: "ASP.NET is a free, cross-platform, open-source framework for building web applications and services with .NET and C#. It provides a robust, scalable, and high-performance framework for developing modern, cloud-based, internet-connected applications."
    },
    {
      id: "PLsyeobzWxl7qbKoSgR5ub6jolI8-ocxCF",
      img: c6,
      title: "Spring Boot",
      subtitle: "A Java-based framework that simplifies the creation of stand-alone, production-grade Spring applications with minimal configuration.",
      btncolor: "#6cb33e",
      description: "Spring Boot is an open-source Java-based framework used to create stand-alone, production-grade Spring-based applications. It is designed to simplify the setup and development of new Spring applications, allowing developers to focus on building the business logic without worrying about the configuration details."
    },
    {
      id: "PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR",
      img: c7,
      title: "Bootstrap",
      subtitle: "A popular open-source front-end framework for developing responsive, mobile-first web pages.",
      btncolor: "#563d7c",
      description: "Bootstrap is an open-source front-end framework that helps developers create responsive, mobile-first web pages. It includes a wide range of HTML, CSS, and JavaScript-based design templates for typography, forms, buttons, and navigation, making it easier to develop web projects quickly and efficiently."
    },
    {
      id: "PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo",
      img: c8,
      title: "CSS",
      subtitle: "A style sheet language used for describing the presentation of a document written in HTML or XML.",
      btncolor: "#264de4",
      description: "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML. It allows you to control the layout, color, fonts, and overall appearance of web pages, providing a more engaging user experience."
    },
    {
      id: "PLZPZq0r_RZOOxqHgOzPyCzIl4AJjXbCYt",
      img: c9,
      title: "HTML5",
      subtitle: "The latest version of the standard markup language for creating web pages.",
      btncolor: "#e34c26",
      description: "HTML5 is the latest version of the HTML standard, which is used for structuring and presenting content on the World Wide Web. It introduces new elements, attributes, and behaviors, enabling developers to build more diverse and powerful websites and applications."
    },
    {
      id: "PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1",
      img: c10,
      title: "JavaScript",
      subtitle: "A versatile, high-level programming language primarily used for web development.",
      btncolor: "#f0db4f",
      description: "JavaScript is a versatile, high-level programming language that is widely used for creating interactive and dynamic web pages. It allows developers to implement complex features such as animations, form validation, and asynchronous data loading, making web applications more engaging and user-friendly."
    },
    {
      id: "PL4cUxeGkcC9jxJX7vojNVK-o8ubDZEcNb",
      img: c11,
      title: "Sass",
      subtitle: "A preprocessor scripting language that is interpreted or compiled into CSS.",
      btncolor: "#cf649a",
      description: "Sass (Syntactically Awesome Stylesheets) is a preprocessor scripting language that extends CSS by adding features such as variables, nested rules, and mixins. It helps to make CSS more maintainable and organized, and allows for easier styling of web projects."
    },
    {
      id: "PL8p2I9GklV47eNpoo4Fr6fkags72a8F0v",
      img: c12,
      title: "Angular",
      subtitle: "A platform for building mobile and desktop web applications using TypeScript and other modern web technologies.",
      btncolor: "#dd1b16",
      description: "Angular is a platform for building mobile and desktop web applications using TypeScript and other modern web technologies. It provides a comprehensive set of tools and libraries for building, testing, and deploying single-page applications, making it a popular choice among developers."
    },
    {
      id: "PL3VM-unCzF8hy47mt9-chowaHNjfkuEVz",
      img: c13,
      title: "MongoDB",
      subtitle: "A PHP framework for building modern web applications with an expressive, elegant syntax.",
      btncolor: "#ff2d20",
      description: "Laravel is a PHP framework that offers an expressive, elegant syntax for building modern web applications. It simplifies common tasks such as routing, authentication, and caching, allowing developers to focus on building robust, feature-rich applications quickly and efficiently."
    },
    {
      id: "PL3VM-unCzF8hy47mt9-chowaHNjfkuEVz",
      img: c14,
      title: "Mysql",
      subtitle: "A PHP framework for building modern web applications with an expressive, elegant syntax.",
      btncolor: "#ff2d20",
      description: "Laravel is a PHP framework that offers an expressive, elegant syntax for building modern web applications. It simplifies common tasks such as routing, authentication, and caching, allowing developers to focus on building robust, feature-rich applications quickly and efficiently."
    },
    {
      id: "PL3VM-unCzF8hy47mt9-chowaHNjfkuEVz",
      img: c15,
      title: "Php",
      subtitle: "A PHP framework for building modern web applications with an expressive, elegant syntax.",
      btncolor: "#ff2d20",
      description: "Laravel is a PHP framework that offers an expressive, elegant syntax for building modern web applications. It simplifies common tasks such as routing, authentication, and caching, allowing developers to focus on building robust, feature-rich applications quickly and efficiently."
    },
    {
      id: "PL3VM-unCzF8hy47mt9-chowaHNjfkuEVz",
      img: c16,
      title: "Python",
      subtitle: "A PHP framework for building modern web applications with an expressive, elegant syntax.",
      btncolor: "#ff2d20",
      description: "Laravel is a PHP framework that offers an expressive, elegant syntax for building modern web applications. It simplifies common tasks such as routing, authentication, and caching, allowing developers to focus on building robust, feature-rich applications quickly and efficiently."
    },
    {
      id: "PL3VM-unCzF8hy47mt9-chowaHNjfkuEVz",
      img: c17,
      title: "Vue.js",
      subtitle: "A PHP framework for building modern web applications with an expressive, elegant syntax.",
      btncolor: "#ff2d20",
      description: "Laravel is a PHP framework that offers an expressive, elegant syntax for building modern web applications. It simplifies common tasks such as routing, authentication, and caching, allowing developers to focus on building robust, feature-rich applications quickly and efficiently."
    }
  ];
  

  return courses
}