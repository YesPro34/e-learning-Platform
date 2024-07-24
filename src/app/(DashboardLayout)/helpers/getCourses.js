import c1 from "../../../../public/images/courses/React.png"
import c2 from "../../../../public/images/courses/next.png"
import c3 from "../../../../public/images/courses/tailwindcss.png"
import c4 from "../../../../public/images/courses/nest.jpeg"
import c5 from "../../../../public/images/courses/dotnet.png"
import c6 from "../../../../public/images/courses/springBoot.jpeg"

export function getCourses(){

    const courses = [
        {
          id: 1,
          img: c1,
          title: "React.js",
          subtitle:
            "A JavaScript library for building user interfaces, primarily used for developing single-page applications.",
          btncolor: "#05b2bd",
          description: "React.js is a powerful and flexible JavaScript library for building user interfaces, particularly single-page applications where you need a fast and interactive user experience. It allows developers to create large web applications that can update and render efficiently in response to data changes."
        },
        {
          id: 2,
          img: c2,
          title: "Next.js",
          subtitle:
            "A React framework that enables server-side rendering and static site generation for building optimized web applications.",
          btncolor: "#05b2bd",
          description: "Next.js is a framework built on top of React that provides infrastructure and simple development experience for server-side rendered (SSR) applications. It also supports static site generation (SSG), making it an excellent choice for building fast, SEO-friendly websites."
        },
        {
          id: 3,
          img: c3,
          title: "Tailwind CSS",
          subtitle:
            "A utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.",
          btncolor: "#05b2bd",
          description: "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. It encourages a utility-first approach, where you style your components using a set of predefined classes."
        },
        {
          id: 4,
          img: c4,
          title: "Nest.js",
          subtitle:
            "A progressive Node.js framework for building efficient, reliable, and scalable server-side applications using TypeScript.",
          btncolor: "#05b2bd",
          description: "Nest.js is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript, and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming)."
        },
        {
          id: 5,
          img: c5,
          title: "ASP.NET",
          subtitle:
            "A framework for building web applications and services with .NET and C#, offering a robust, scalable, and high-performance backend.",
          btncolor: "#05b2bd",
          description: "ASP.NET is a free, cross-platform, open-source framework for building web applications and services with .NET and C#. It provides a robust, scalable, and high-performance framework for developing modern, cloud-based, internet-connected applications."
        },
        {
          id: 6,
          img: c6,
          title: "Spring Boot",
          subtitle:
            "A Java-based framework that simplifies the creation of stand-alone, production-grade Spring applications with minimal configuration.",
          btncolor: "primary.main",
          description: "Spring Boot is an open-source Java-based framework used to create stand-alone, production-grade Spring-based applications. It is designed to simplify the setup and development of new Spring applications, allowing developers to focus on building the business logic without worrying about the configuration details."
        },
      ];

  return courses
}