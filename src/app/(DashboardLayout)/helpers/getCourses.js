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
import c18 from "../../../../public/images/courses/laravel-php-framework.png"
import c19 from "../../../../public/images/courses/neo4j.png"
import c20 from "../../../../public/images/courses/cassandra.png"
import c21 from "../../../../public/images/courses/redis.jpg"
import c22 from "../../../../public/images/courses/elasticSearch.jpeg"
import c23 from "../../../../public/images/courses/java.png"
import c24 from "../../../../public/images/courses/ccharp.jpg"
import c25 from "../../../../public/images/courses/Kotlin.png"
import c26 from "../../../../public/images/courses/dart.jpg"
import c27 from "../../../../public/images/courses/swift.png"
import c28 from "../../../../public/images/courses/rust.jpg"
import c29 from "../../../../public/images/courses/go.png"
import c30 from "../../../../public/images/courses/C++.jpg"
import c31 from "../../../../public/images/courses/reactive-native.png"
import c32 from "../../../../public/images/courses/ionic.png"
import c33 from "../../../../public/images/courses/flutter.png"
import c34 from "../../../../public/images/courses/firebase.png"
import c35 from "../../../../public/images/courses/prisma.jpg"
import c36 from "../../../../public/images/courses/ML.jpeg"
import c37 from "../../../../public/images/courses/dl.png"
import c38 from "../../../../public/images/courses/NLP.jpg"
import c39 from "../../../../public/images/courses/maths.png"

export function getCourses(){

  const courses = [
    {
      id: "PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza",
      img: c1,
      type: "front-end",
      title: "React.js",
      subtitle: "A JavaScript library for building user interfaces, primarily used for developing single-page applications.",
      btncolor: "#05b2bd",
      description: "React.js is a powerful and flexible JavaScript library for building user interfaces, particularly single-page applications where you need a fast and interactive user experience. It allows developers to create large web applications that can update and render efficiently in response to data changes."
    },
    {
      id: "PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH",
      img: c2,
      type: "front-end",
      title: "Next.js",
      subtitle: "A React framework that enables server-side rendering and static site generation for building optimized web applications.",
      btncolor: "#000",
      description: "Next.js is a framework built on top of React that provides infrastructure and a simple development experience for server-side rendered (SSR) applications. It also supports static site generation (SSG), making it an excellent choice for building fast, SEO-friendly websites."
    },
    {
      id: "PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw",
      img: c3,
      type: "front-end",
      title: "Tailwind CSS",
      subtitle: "A utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.",
      btncolor: "#46acb3",
      description: "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. It encourages a utility-first approach, where you style your components using a set of predefined classes."
    },
    {
      id: "PL0Zuz27SZ-6MexSAh5x1R3rU6Mg2zYBVr",
      img: c4,
      type: "back-end",
      title: "Nest.js",
      subtitle: "A progressive Node.js framework for building efficient, reliable, and scalable server-side applications using TypeScript.",
      btncolor: "#e1214d",
      description: "Nest.js is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript, and combines elements of OOP (Object-Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming)."
    },
    {
      id: "PLp_RsiLZjwQQ7CxVhnM4G8i5veEClNPfX",
      img: c5,
      type: "back-end",
      title: "ASP.NET",
      subtitle: "A framework for building web applications and services with .NET and C#, offering a robust, scalable, and high-performance backend.",
      btncolor: "#4a29bf",
      description: "ASP.NET is a free, cross-platform, open-source framework for building web applications and services with .NET and C#. It provides a robust, scalable, and high-performance framework for developing modern, cloud-based, internet-connected applications."
    },
    {
      id: "PLsyeobzWxl7qbKoSgR5ub6jolI8-ocxCF",
      img: c6,
      type: "back-end",
      title: "Spring Boot",
      subtitle: "A Java-based framework that simplifies the creation of stand-alone, production-grade Spring applications with minimal configuration.",
      btncolor: "#6cb33e",
      description: "Spring Boot is an open-source Java-based framework used to create stand-alone, production-grade Spring-based applications. It is designed to simplify the setup and development of new Spring applications, allowing developers to focus on building the business logic without worrying about the configuration details."
    },
    {
      id: "PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR",
      img: c7,
      type: "front-end",
      title: "Bootstrap",
      subtitle: "A popular open-source front-end framework for developing responsive, mobile-first web pages.",
      btncolor: "#563d7c",
      description: "Bootstrap is an open-source front-end framework that helps developers create responsive, mobile-first web pages. It includes a wide range of HTML, CSS, and JavaScript-based design templates for typography, forms, buttons, and navigation, making it easier to develop web projects quickly and efficiently."
    },
    {
      id: "PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo",
      img: c8,
      type: "front-end",
      title: "CSS",
      subtitle: "A style sheet language used for describing the presentation of a document written in HTML or XML.",
      btncolor: "#264de4",
      description: "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML. It allows you to control the layout, color, fonts, and overall appearance of web pages, providing a more engaging user experience."
    },
    {
      id: "PLZPZq0r_RZOOxqHgOzPyCzIl4AJjXbCYt",
      img: c9,
      type: "front-end",
      title: "HTML5",
      subtitle: "The latest version of the standard markup language for creating web pages.",
      btncolor: "#e34c26",
      description: "HTML5 is the latest version of the HTML standard, which is used for structuring and presenting content on the World Wide Web. It introduces new elements, attributes, and behaviors, enabling developers to build more diverse and powerful websites and applications."
    },
    {
      id: "PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1",
      img: c10,
      type: "programming-langauge",
      title: "JavaScript",
      subtitle: "A versatile, high-level programming language primarily used for web development.",
      btncolor: "#f0db4f",
      description: "JavaScript is a versatile, high-level programming language that is widely used for creating interactive and dynamic web pages. It allows developers to implement complex features such as animations, form validation, and asynchronous data loading, making web applications more engaging and user-friendly."
    },
    {
      id: "PL4cUxeGkcC9jxJX7vojNVK-o8ubDZEcNb",
      img: c11,
      type: "front-end",
      title: "Sass",
      subtitle: "A preprocessor scripting language that is interpreted or compiled into CSS.",
      btncolor: "#cf649a",
      description: "Sass (Syntactically Awesome Stylesheets) is a preprocessor scripting language that extends CSS by adding features such as variables, nested rules, and mixins. It helps to make CSS more maintainable and organized, and allows for easier styling of web projects."
    },
    {
      id: "PL8p2I9GklV47eNpoo4Fr6fkags72a8F0v",
      img: c12,
      type: "front-end",
      title: "Angular",
      subtitle: "A platform for building mobile and desktop web applications using TypeScript and other modern web technologies.",
      btncolor: "#dd1b16",
      description: "Angular is a platform for building mobile and desktop web applications using TypeScript and other modern web technologies. It provides a comprehensive set of tools and libraries for building, testing, and deploying single-page applications, making it a popular choice among developers."
    },
    {
      id: "PLZPZq0r_RZONbmOn3EsHac5u5_-Rue3ne",
      img: c13,
      type: "database",
      title: "MongoDB",
      subtitle: "A NoSQL database for storing data in a flexible, JSON-like format.",
      btncolor: "#47A248",
      description: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is known for its scalability, flexibility, and ease of use, making it a popular choice for modern applications that require fast and dynamic data handling."
    },
    {
      id: "PLZPZq0r_RZOMskz6MdsMOgxzheIyjo-BZ",
      img: c14,
      type: "database",
      title: "MySQL",
      subtitle: "A relational database management system based on SQL (Structured Query Language).",
      btncolor: "#00758F",
      description: "MySQL is a popular open-source relational database management system that uses SQL (Structured Query Language) for managing and manipulating data. It is widely used in web applications to store and manage structured data."
    },
    {
      id: "PLZPZq0r_RZOO6bGTY9jbLOyF_x6tgwcuB",
      img: c15,
      type: "programming-langauge",
      title: "PHP",
      subtitle: "A popular server-side scripting language especially suited for web development.",
      btncolor: "#787CB5",
      description: "PHP is a widely-used open-source scripting language especially suited for web development. It can be embedded into HTML and is used to manage dynamic content, databases, session tracking, and more."
    },
    {
      id: "PLTjRvDozrdlxj5wgH4qkvwSOdHLOCx10f",
      img: c16,
      type: "programming-langauge",
      title: "Python",
      subtitle: "A high-level, interpreted programming language known for its readability and versatility.",
      btncolor: "#3776AB",
      description: "Python is a high-level, interpreted programming language known for its readability and versatility. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming, and is widely used in web development, data analysis, artificial intelligence, and more."
    },
    {
      id: "PL3VM-unCzF8jX-GoazLPcbi7M0wJux8F-",
      img: c17,
      type: "front-end",
      title: "Vue.js",
      subtitle: "A progressive JavaScript framework for building user interfaces and single-page applications.",
      btncolor: "#4FC08D",
      description: "Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications. It is designed to be incrementally adoptable and can also function as a web application framework capable of powering advanced single-page applications."
    },
    {
      id: "PL3VM-unCzF8hy47mt9-chowaHNjfkuEVz",
      img: c18,
      type: "back-end",
      title: "Laravel",
      subtitle: "A PHP framework for building modern web applications with an expressive, elegant syntax.",
      btncolor: "#FF2D20",
      description: "Laravel is a PHP framework that offers an expressive, elegant syntax for building modern web applications. It simplifies common tasks such as routing, authentication, and caching, allowing developers to focus on building robust, feature-rich applications quickly and efficiently."
    },
    {
      id: "PL6UwySlcwEYJ9BKIiCk2bMfd_JKXwDPQJ",
      img: c19,
      type: "database",
      title: "neo4j",
      subtitle: "A graph database management system that uses graph structures with nodes, edges, and properties to represent and store data.",
      btncolor: "#008cc1",
      description: "Neo4j is a graph database management system that provides an efficient way to manage highly interconnected data. It allows you to model complex relationships between data points, making it ideal for applications like social networks, recommendation systems, and fraud detection."
    },
    {
      id: "PL2g2h-wyI4SqCdxdiyi8enEyWvACcUa9R",
      img: c20,
      type: "database",
      title: "Apache Cassandra",
      subtitle: "A distributed NoSQL database designed to handle large amounts of data across many commodity servers.",
      btncolor: "#1287b1",
      description: "Apache Cassandra is a highly scalable and distributed NoSQL database known for its ability to handle massive amounts of data across multiple servers without any single point of failure. It offers high availability and fault tolerance, making it ideal for mission-critical applications."
    },
    {
      id: "PL4cUxeGkcC9h3V2eqhi8rRdIDJshP-b4P",
      img: c21,
      type: "database",
      title: "Redis",
      subtitle: "An in-memory data structure store, used as a database, cache, and message broker.",
      btncolor: "#dc382d",
      description: "Redis is an open-source, in-memory data structure store that can be used as a database, cache, and message broker. It supports various data structures like strings, hashes, lists, sets, and more, offering high performance and low latency for data access."
    },
    {
      id: "PL_mJOmq4zsHZYAyK606y7wjQtC0aoE6Es",
      img: c22,
      type: "database",
      title: "ElasticSearch",
      subtitle: "A distributed, RESTful search and analytics engine capable of solving a growing number of use cases.",
      btncolor: "#005571",
      description: "ElasticSearch is a distributed, RESTful search and analytics engine built on Apache Lucene. It is designed for horizontal scalability, reliability, and real-time search and analytics. It is widely used for log and event data analysis, full-text search, and more."
    },
    {
      id: "PLZPZq0r_RZOMhCAyywfnYLlrjiVOkdAI1",
      img: c23,
      type: "programming-langauge",
      title: "Java",
      subtitle: "A versatile and widely-used programming language known for its portability across platforms.",
      btncolor: "#007396",
      description: "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is widely used for building enterprise-scale applications, Android apps, and more, offering strong portability across different platforms."
    },
    {
      id: "PL82C6-O4XrHfoN_Y4MwGvJz5BntiL0z0D",
      img: c24,
      type: "programming-langauge",
      title: "C#",
      subtitle: "A modern, object-oriented programming language developed by Microsoft.",
      btncolor: "#68217a",
      description: "C# is a versatile and modern programming language developed by Microsoft. It is part of the .NET framework and is widely used for developing desktop applications, web applications, and games. C# combines the power of C++ with the ease of Visual Basic."
    },
    {
      id: "PLsyeobzWxl7rooJFZhc3qPLwVROovGCfh",
      img: c25,
      type: "programming-langauge",
      title: "Kotlin",
      subtitle: "A statically typed programming language for modern multiplatform applications.",
      btncolor: "#0095D5",
      description: "Kotlin is a modern, statically typed programming language that is fully interoperable with Java. It is widely used for Android app development, web development, and more. Kotlin's concise syntax and expressive features make it a popular choice for developers seeking a modern alternative to Java."
    },
    {
      id: "PL4cUxeGkcC9iVGY3ppchN9kIauln8IiEh",
      img: c26,
      type: "programming-langauge",
      title: "Dart",
      subtitle: "A client-optimized language for fast apps on any platform, developed by Google.",
      btncolor: "#0175C2",
      description: "Dart is a client-optimized programming language for developing fast apps on any platform. It is the primary language used for building Flutter apps, offering a rich set of features for both front-end and back-end development. Dart's strong typing and modern syntax make it a powerful tool for developers."
    },
    {
      id: "PLwvDm4VfkdpiLvzZFJI6rVIBtdolrJBVB",
      img: c27,
      type: "programming-langauge",
      title: "Swift",
      subtitle: "A powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS.",
      btncolor: "#FA7343",
      description: "Swift is a powerful and intuitive programming language developed by Apple for building apps for iOS, macOS, watchOS, and tvOS. It offers modern features, such as type safety and security, and is designed to be easy to learn and use. Swift provides a fast, efficient, and expressive way to develop software."
    },
    {
      id: "PLzMcBGfZo4-nyLTlSRBvo0zjSnCnqjHYQ",
      img: c28,
      type: "programming-langauge",
      title: "Rust",
      subtitle: "A systems programming language that focuses on safety, performance, and concurrency.",
      btncolor: "#DEA584",
      description: "Rust is a systems programming language that prioritizes safety, performance, and concurrency. It eliminates many of the common bugs found in other languages by providing strong memory safety guarantees. Rust is ideal for developing high-performance applications that require low-level control and concurrency."
    },
    {
      id: "PL4cUxeGkcC9gC88BEo9czgyS72A3doDeM",
      img: c29,
      type: "programming-langauge",
      title: "Go",
      subtitle: "An open-source programming language that makes it easy to build simple, reliable, and efficient software.",
      btncolor: "#00ADD8",
      description: "Go, also known as Golang, is an open-source programming language developed by Google. It is designed for simplicity, efficiency, and reliability. Go's strong concurrency model and easy-to-read syntax make it ideal for developing scalable web applications, cloud services, and more."
    },
    {
      id: "PLLAZ4kZ9dFpOSzRXG05goZMgsvXwDDL6g",
      img: c30,
      type: "programming-langauge",
      title: "C++",
      subtitle: "A general-purpose programming language known for its performance and use in system/software development.",
      btncolor: "#00599C",
      description: "C++ is a general-purpose programming language known for its performance and efficiency. It is widely used in system/software development, game development, and applications requiring high performance. C++ offers a rich set of features, including object-oriented, generic, and functional programming capabilities."
    },
    {
      id: "PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ",
      img: c31,
      type: "mobile",
      title: "React Native",
      subtitle: "A general-purpose programming language known for its performance and use in system/software development.",
      btncolor: "#00599C",
      description: "C++ is a general-purpose programming language known for its performance and efficiency. It is widely used in system/software development, game development, and applications requiring high performance. C++ offers a rich set of features, including object-oriented, generic, and functional programming capabilities."
    },
    {
      id: "PLNFwX8PVq5q5t6aN4kpNmcpN9cBRazjmu",
      img: c32,
      type: "mobile",
      title: "ionic",
      subtitle: "A general-purpose programming language known for its performance and use in system/software development.",
      btncolor: "#00599C",
      description: "C++ is a general-purpose programming language known for its performance and efficiency. It is widely used in system/software development, game development, and applications requiring high performance. C++ offers a rich set of features, including object-oriented, generic, and functional programming capabilities."
    },
    {
      id: "PLzMcBGfZo4-knQWGK2IC49Q_5AnQrFpzv",
      img: c33,
      type: "mobile",
      title: "Flutter",
      subtitle: "A general-purpose programming language known for its performance and use in system/software development.",
      btncolor: "#00599C",
      description: "C++ is a general-purpose programming language known for its performance and efficiency. It is widely used in system/software development, game development, and applications requiring high performance. C++ offers a rich set of features, including object-oriented, generic, and functional programming capabilities."
    },
    {
      id: "PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb",
      img: c34,
      type: "back-end",
      title: "Firebase",
      subtitle: "A general-purpose programming language known for its performance and use in system/software development.",
      btncolor: "#00599C",
      description: "C++ is a general-purpose programming language known for its performance and efficiency. It is widely used in system/software development, game development, and applications requiring high performance. C++ offers a rich set of features, including object-oriented, generic, and functional programming capabilities."
    },
    {
      id: "PLCUHV2O6IfLCjT5z-lwXemcgcJAz5r0PL",
      img: c35,
      type: "back-end",
      title: "Prisma",
      subtitle: "A general-purpose programming language known for its performance and use in system/software development.",
      btncolor: "#00599C",
      description: "C++ is a general-purpose programming language known for its performance and efficiency. It is widely used in system/software development, game development, and applications requiring high performance. C++ offers a rich set of features, including object-oriented, generic, and functional programming capabilities."
    },
    {
      id: "PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw",
      img: c36,
      type: "ai",
      title: "Machine Learning",
      subtitle: "A general-purpose programming language known for its performance and use in system/software development.",
      btncolor: "#00599C",
      description: "C++ is a general-purpose programming language known for its performance and efficiency. It is widely used in system/software development, game development, and applications requiring high performance. C++ offers a rich set of features, including object-oriented, generic, and functional programming capabilities."
    },
    {
      id: "PLeo1K3hjS3uu7CxAacxVndI4bE_o3BDtO",
      img: c37,
      type: "ai",
      title: "Deep Learning",
      subtitle: "A general-purpose programming language known for its performance and use in system/software development.",
      btncolor: "#00599C",
      description: "C++ is a general-purpose programming language known for its performance and efficiency. It is widely used in system/software development, game development, and applications requiring high performance. C++ offers a rich set of features, including object-oriented, generic, and functional programming capabilities."
    },
    {
      id: "PLeo1K3hjS3uuvuAXhYjV2lMEShq2UYSwX",
      img: c38,
      type: "ai",
      title: "Natural Language Processing",
      subtitle: "A general-purpose programming language known for its performance and use in system/software development.",
      btncolor: "#00599C",
      description: "C++ is a general-purpose programming language known for its performance and efficiency. It is widely used in system/software development, game development, and applications requiring high performance. C++ offers a rich set of features, including object-oriented, generic, and functional programming capabilities."
    },
    {
      id: "PLeo1K3hjS3uuKaU2nBDwr6zrSOTzNCs0l",
      img: c39,
      type: "ai",
      title: "Maths and Statistics",
      subtitle: "A general-purpose programming language known for its performance and use in system/software development.",
      btncolor: "#00599C",
      description: "C++ is a general-purpose programming language known for its performance and efficiency. It is widely used in system/software development, game development, and applications requiring high performance. C++ offers a rich set of features, including object-oriented, generic, and functional programming capabilities."
    }
    
  ];
  
  
  

  return courses
}