const demoInterviewReportResponse = {
  success: true,
  message: "Report generated successfully",
  interviewReport: {
    jobDescription:
      "Job Title: MERN Stack Developer (1+ Year Experience)\n\n📍 Location: Remote / Bhopal, India\n🕒 Experience: 1+ Year\n💼 Employment Type: Full-Time\n\nJob Summary\n\nWe are looking for a passionate MERN Stack Developer with at least 1 year of experience in building scalable web applications. The ideal candidate should have strong knowledge of MongoDB, Express.js, React.js, and Node.js, along with experience in developing RESTful APIs and modern user interfaces.\n\nKey Responsibilities\nDevelop and maintain full-stack web applications using MERN stack\nBuild reusable and efficient frontend components using React.js\nDesign and develop RESTful APIs using Node.js and Express.js\nIntegrate MongoDB database and optimize queries\nImplement authentication and authorization (JWT-based)\nCollaborate with designers and other developers\nDebug and fix issues to improve performance\nWrite clean, maintainable, and scalable code\nRequired Skills\nStrong knowledge of JavaScript (ES6+)\nExperience with React.js, Node.js, Express.js\nGood understanding of MongoDB and Mongoose\nFamiliarity with REST APIs\nKnowledge of Git and version control\nUnderstanding of authentication (JWT, sessions)\nPreferred Skills (Good to Have)\nExperience with Redux or state management\nKnowledge of Tailwind CSS / Bootstrap\nBasic understanding of deployment (AWS, Vercel, Netlify)\nFamiliarity with API integration & third-party services\nQualifications\nBachelor’s degree in Computer Science or related field\nOr equivalent practical experience\nWhat We Offer\nOpportunity to work on real-world projects\nLearning and growth environment\nFlexible work culture\nCompetitive salary\n",
    resumeTxt:
      "Harsh Khanagwal\n +91-9818937777 # harshkhanagwall29@gmail.com\nï linkedin.com/in/harshkhanagwal  harshkhanagwal.netlify.app\nExperience\nAnalyst May 2025 – Present\nTata Consultancy Services (TCS) React, JavaScript, HTML, CSS, linux, API\n– Contributed as a Frontend Engineer to an AI-based internal training platform used by 1000+ internal users,\nfocusing on building scalable and reusable UI components using React.\n– Developed responsive and user-friendly interfaces for AI-driven training modules using modern frontend practices,\nensuring cross-browser compatibility and consistent design implementation.\n– Collaborated closely with backend engineers, QA teams, and stakeholders to integrate APIs supporting AI-powered\nfeatures and deliver enhancements aligned with training and business requirements.\nSkills\nProgramming & Development: JavaScript, React.js, MERN Stack (MongoDB, Express, React, Node.js), Java\nCloud & Server Technologies: AWS (EC2, S3, IAM, etc.), Linux Server Operations, Bash Scripting\n(Automation)\nTools: AWS, Git, VS Code, Postman\nProjects\nKodingKaksha-AI – Learning & Coding Platform with AI | MongoDB, Express.js, React.js, Redux Toolkit | Live Demo\n– Engineered a full-stack role-based learning platform with dedicated dashboards for Students, Lecturers, and Admins,\nimplementing structured course publishing workflows, role-restricted create/edit/delete controls, protected routes, and\nserver-side access validation to ensure secure platform operations.\n– Built an integrated coding environment with multi-language execution support, real-time output rendering, standard\ninput handling, and persistent session state to simulate a practical IDE experience within the browser.\n– Integrated an AI-powered assistant and discussion forum to enable real-time doubt resolution, mentor-style conceptual\nguidance, and collaborative learning, enhancing overall platform interactivity.\nCoding Buddy – AI-Based IDE | React.js, Vite, AI Integration, Piston API | Live Demo\n– Developed a web-based IDE using React that executes code in 50+ languages via the Piston API, supporting standard\ninput (stdin) and real-time output rendering.\n– Integrated an AI-powered assistant to deliver mentor-style logic explanations and step-by-step conceptual guidance, with\nlocal state persistence for continuous learning.\nText Evoke-AI – AI-Based Web Application | React.js, REST APIs | Live Demo\n– Developed an AI-powered web application for article generation and text summarization with dynamic API integration\nand real-time content rendering.\n– Built reusable React components with responsive UI design to ensure seamless user interaction and cross-device\ncompatibility.\nEasy C – Custom C Library (Team Project) | C, Technical Documentation | Live Documentation\n– Contributed to the design and implementation of a custom C library offering reusable data structure utilities to improve\nmodularity and code efficiency.\n– Developed structured technical documentation and example-driven guides to streamline library adoption and maintain\nconsistency across the team.\nEducation\nBachelor of Computer Application (BCA) 09/2021 – 06/2024\nShikshapeeth College of Management and Technology, New Delhi Branch: Computer Science\nSenior Secondary (12th) – CBSE 04/2020 – 05/2021\nGovt. Co-ed Sr. Sec. School, New Delhi Coursework: Web Applications, Humanities\n\n-- 1 of 1 --\n\n",
    selfDescription:
      "Motivated MERN Stack Developer with 1 year of hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in developing RESTful APIs, implementing authentication, and optimizing application performance. Passionate about writing clean, scalable code and continuously learning new technologies.\n",
    matchScore: 92,
    technicalQuestions: [
      {
        question:
          "Explain the core components of the MERN stack and how they interact to build a full-stack application.",
        answer:
          "Approach: Define each component (MongoDB, Express, React, Node) and briefly explain its role. Key points to cover: Client-side (React) for UI, Server-side (Node/Express) for API and business logic, Database (MongoDB) for data storage. Interaction via RESTful API calls. Tips to impress: Mention how data flows from UI to API to DB and back, highlighting statelessness of API. Keep it concise.",
        intention:
          "Assess foundational understanding of MERN stack architecture and data flow.",
        _id: "69c26c775a34637a36d11ee5",
      },
      {
        question:
          "Describe how you would implement user authentication and authorization (e.g., JWT-based) in a MERN application.",
        answer:
          "Approach: Outline the steps for both registration/login and subsequent authenticated requests. Key points to cover: User registration (hashing passwords), Login (generating JWT on successful authentication), Storing JWT (client-side), Sending JWT with requests (headers), JWT verification on server-side (middleware), Role-based authorization checks. Tips to impress: Discuss refresh tokens, security considerations for storing tokens (httpOnly cookies), and error handling. Keep it concise.",
        intention:
          "Evaluate practical knowledge of security best practices and implementation details for authentication.",
        _id: "69c26c775a34637a36d11ee6",
      },
      {
        question:
          "You've worked with React.js. How do you manage state in complex React applications, and when would you choose Redux over local component state or Context API?",
        answer:
          "Approach: Explain different state management options and their use cases. Key points to cover: Local state (useState) for component-specific state, Context API for sharing state across a component subtree, Redux/Redux Toolkit for global, complex, and predictable state management. Criteria for choosing: application size, state complexity, need for debugging tools, team size. Tips to impress: Mention the benefits of Redux (centralized store, predictability, dev tools) and when its overhead might not be justified. Keep it concise.",
        intention:
          "Assess understanding of React state management strategies and ability to choose appropriate tools.",
        _id: "69c26c775a34637a36d11ee7",
      },
      {
        question:
          "Given your experience with REST APIs and AI integration, how would you design an API endpoint for an AI-powered text summarization service?",
        answer:
          "Approach: Describe the endpoint's structure and behavior. Key points to cover: HTTP method (POST), URL structure (e.g., /api/summarize), Request body (input text, optional parameters), Response (summarized text, status codes), Error handling, Scalability considerations if applicable. Tips to impress: Mention asynchronous processing if summarization is time-consuming, rate limiting, and potential for versioning the API. Keep it concise.",
        intention:
          "Evaluate API design principles, understanding of REST, and how to integrate external services.",
        _id: "69c26c775a34637a36d11ee8",
      },
      {
        question:
          "You list AWS skills. How would you approach deploying a MERN application to AWS?",
        answer:
          "Approach: Outline the key AWS services and steps involved. Key points to cover: Frontend (React) deployment (S3 for static assets, CloudFront for CDN), Backend (Node/Express) deployment (EC2, Elastic Beanstalk, or containerization with ECS/EKS), Database (MongoDB) setup (EC2 with MongoDB, or Atlas), VPC, Security Groups. Tips to impress: Discuss CI/CD pipelines, load balancing, and environment variables for configuration. Keep it concise.",
        intention:
          "Gauge practical understanding of cloud deployment for full-stack applications.",
        _id: "69c26c775a34637a36d11ee9",
      },
    ],
    behavioralQuestions: [
      {
        question:
          "Tell me about a challenging technical problem you faced in a project and how you overcame it.",
        answer:
          "Approach: Use the STAR method (Situation, Task, Action, Result). Key points to cover: Briefly describe the context, clearly state the problem, detail the steps taken to analyze and solve it, and explain the positive outcome and what was learned. Tips to impress: Focus on your specific actions, collaboration if applicable, and the ultimate resolution. Keep it concise.",
        intention:
          "Assess problem-solving skills, resilience, and learning from challenges.",
        _id: "69c26c775a34637a36d11eea",
      },
      {
        question:
          "Describe a situation where you had to collaborate with backend engineers or other stakeholders to integrate APIs. What was your role, and how did you ensure smooth integration?",
        answer:
          "Approach: Use the STAR method. Key points to cover: Describe the project requiring API integration, your specific responsibilities (e.g., frontend integration, data mapping), communication methods used, challenges faced, and how they were resolved. Tips to impress: Emphasize clear communication, documentation (API specs), testing strategies, and proactive problem-solving. Keep it concise.",
        intention:
          "Evaluate teamwork, communication skills, and understanding of cross-functional collaboration.",
        _id: "69c26c775a34637a36d11eeb",
      },
      {
        question:
          "How do you stay updated with the latest trends and technologies in web development, particularly in the MERN stack?",
        answer:
          "Approach: Outline your methods for continuous learning. Key points to cover: Mention specific resources (blogs, documentation, online courses, conferences, communities), practical application (personal projects), and how you filter relevant information. Tips to impress: Connect your learning to how it benefits your work or problem-solving. Keep it concise.",
        intention:
          "Assess passion for learning, continuous improvement, and self-motivation.",
        _id: "69c26c775a34637a36d11eec",
      },
    ],
    skillGaps: [
      {
        skill: "Mongoose ORM specific knowledge (though MongoDB is covered)",
        severity: "low",
        _id: "69c26c775a34637a36d11eed",
      },
      {
        skill: "Performance optimization for MERN applications (beyond general debugging)",
        severity: "low",
        _id: "69c26c775a34637a36d11eee",
      },
      {
        skill: "Advanced deployment strategies on AWS (e.g., containerization with ECS/EKS)",
        severity: "low",
        _id: "69c26c775a34637a36d11eef",
      },
    ],
    preparationPlan: [
      {
        day: 1,
        focus: "MERN Stack Core & React Deep Dive",
        tasks: [
          "Review MERN architecture: data flow, API interaction, component roles.",
          "Practice React hooks (useState, useEffect, useContext, useRef) and their use cases.",
          "Understand component lifecycle methods and functional component equivalents.",
          "Review Redux Toolkit fundamentals: setup, slices, async thunks.",
        ],
        _id: "69c26c775a34637a36d11ef0",
      },
      {
        day: 2,
        focus: "Node.js, Express & MongoDB",
        tasks: [
          "Reinforce Node.js event loop, asynchronous operations, and module system.",
          "Practice Express.js middleware, routing, and error handling.",
          "Review MongoDB CRUD operations, indexing, and aggregation framework.",
          "Understand Mongoose schema definition, validation, and common queries.",
        ],
        _id: "69c26c775a34637a36d11ef1",
      },
      {
        day: 3,
        focus: "Authentication, API Design & Security",
        tasks: [
          "Detail JWT-based authentication flow (token generation, verification, refresh tokens).",
          "Understand authorization strategies (role-based access control).",
          "Practice designing RESTful APIs: endpoint structure, HTTP methods, status codes.",
          "Review common security vulnerabilities in web applications (XSS, CSRF) and prevention methods.",
        ],
        _id: "69c26c775a34637a36d11ef2",
      },
      {
        day: 4,
        focus: "Deployment, DevOps & System Design Basics",
        tasks: [
          "Outline steps for deploying a MERN app to AWS (S3, CloudFront, EC2/Elastic Beanstalk, RDS/MongoDB Atlas).",
          "Understand CI/CD concepts and basic tools (e.g., GitHub Actions).",
          "Review basic system design principles: scalability, reliability, load balancing.",
          "Prepare to discuss the deployment strategy of your KodingKaksha project.",
        ],
        _id: "69c26c775a34637a36d11ef3",
      },
      {
        day: 5,
        focus: "Projects Review & Behavioral Questions",
        tasks: [
          "Articulate each project's architecture, your specific contributions, and key technical challenges.",
          "Prepare concise STAR method answers for common behavioral questions (teamwork, challenges, learning).",
          "Practice explaining your project's AI integration and API usage clearly.",
          "Review resume to ensure all points can be confidently discussed.",
        ],
        _id: "69c26c775a34637a36d11ef4",
      },
    ],
    _id: "69c26c775a34637a36d11ee4",
    __v: 0,
  },
};

module.exports = demoInterviewReportResponse;
