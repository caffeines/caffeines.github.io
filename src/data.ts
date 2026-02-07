import moment from 'moment';

// Certificate issuer pictures
// import coursera from '../public/coursera.jpeg'; // Commented out as file does not exist

const openToWork = false;
const jobStartDate = "2019-08-01";

const years = moment(new Date()).diff(moment(jobStartDate, "YYYY-MM-DD"), 'years');
const months = moment(new Date()).diff(moment(jobStartDate, "YYYY-MM-DD"), 'months') % 12;
const exps = months > 5 ? `${years}.5+ years` : `${years}+ years`;

const logo = {
    "durbin": "https://ik.imagekit.io/durbinlms/durbinLogo_Ntbw6oDv8.png?updatedAt=1697138982542",
    "bKash": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAANlBMVEVHcEzhE23iE27iE27iEm7iEm7iE27jEm3iE27iE27iE27iE27jE27iE27jEm/iE27jE27iE26QDA9KAAAAEnRSTlMADYXAlXRVN9D/4qFFZiryHLHH/asuAAAA2UlEQVR4AWKgBmAkpABQC10kQBDCQAAMQYYOwf7/2HVHblu4C1vnw7GZZiJuJCZWMxvPeHGJRho9ngIcjUpyuKsZCDRqweLGXUtDo8byOOGi04RRXIjHFdMMA7AON+26qbIW+pQeV7iQIADEQemTIAuuHjN7hxT60CTjyUfgGH/MCR4ko9IgM2vwnHoURMc06BmA2J44hxza+FuSKx5iOmhwgCNuqk9VacBIHRfRhev6Ubz9ZPUcCs0YQLy4orQQAATTaKkDcLTWIiBKawp02mEwbcVMW03pX843KwsY1vLgjQAAAABJRU5ErkJggg==",
    "tigerIt": "https://tigerit.com/img/ti-logo.png",
}

export interface Project {
    title: string;
    description: string;
    longDescription: string;
    workDescriptions: string[];
    techStack: string[];
    link: string;
    associatedWith?: {
        companyName: string;
        companyLogo: string;
    };
}

export const projects: Project[] = [
    {
        title: 'Card Platform',
        description: 'Engineered RESTful APIs for bKash wallet fund addition and card management.',
        longDescription: 'Lead developer for the bKash Card Platform, responsible for building the RESTful API suite that powers card-to-wallet transactions. By applying SOLID principles and modernizing the tech stack (Java/Go/AWS), I expanded service reach to over 8 million active users.',
        workDescriptions: [
            'Engineered RESTful APIs to streamline the addition of funds to bKash wallets from VISA, Amex, and Master Cards, as well as for card token creation and eﬃcient card management.',
            'Reduced transaction completion time by 40 percent.',
            'Enhanced code maintainability by applying SOLID principles and various design patterns.',
            'Shipped the bKash Add Money and Back to Back transaction (Direct payment from Visa Card to bKash Merchant) to 8+ million users to increase user adoption and engagement.',
            'Designed and implemented a robust Key Management System (KMS) to enhance the security and maintainability of secrets and certificate management across the platform.'
        ],
        techStack: ['Java', 'Go', 'DynamoDB', 'Spring Boot', 'Redis', 'Docker', 'AWS', 'React.js'],
        link: 'https://www.bkash.com/products-services/add-money',
        associatedWith: {
            companyName: "bKash Limited",
            companyLogo: logo.bKash,
        }
    },
    {
        title: 'Intentify',
        description: 'AI-Powered Product Search & Recommendation API.',
        longDescription: 'An intelligent e-commerce search platform that supports natural-language queries (e.g., Italian leather shoes under $200) and returns ranked product recommendations.',
        workDescriptions: [
            'Built an intelligent e-commerce search platform that supports natural-language queries (e.g., Italian leather shoes under $200) and returns ranked product recommendations.',
            'Implemented an LLM-powered query analyzer using Langchain to extract structured intent (keywords, category, price range, rating, brand, origin) and convert it into deterministic search + filter rules.',
            'Designed a hybrid retrieval pipeline: semantic vector similarity search with ChromaDB (OpenAI embeddings) combined with PostgreSQL-backed filtering for precise, scalable results.',
            'Developed a clean REST API with async FastAPI; added tracing/monitoring for LLM operations using LangSmith for debugging and observability.',
            'Delivered a modern Next.js (App Router) frontend for interactive search and browsing, with type-safe integration across the stack.'
        ],
        techStack: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'ChromaDB', 'OpenAI', 'LangChain', 'LangSmith', 'Next.js'],
        link: 'https://github.com/caffeines/Intentify',
    },
    {
        title: 'Notion Todo CLI',
        description: 'A Go-based CLI for managing Notion todos directly from the terminal.',
        longDescription: 'A powerful CLI tool that allows users to add, list, and update Notion todos directly from their terminal. It features a secure local configuration, interactive setup, and fast, ergonomic commands.',
        workDescriptions: [
            'Built a Go-based CLI that lets you add, list, and update Notion todos directly from the terminal (with due dates and status like Todo / In progress / Done).',
            'Implemented secure local config with Notion API integration so users can connect their own Notion database in minutes using an interactive setup (todo guide).',
            'Added fast, ergonomic commands with aliases (todo a, todo l, etc.) and an interactive list view to manage tasks without opening Notion.',
            'Packaged for easy install (Homebrew, install script, go install) and structured the code with clean interfaces for Notion, config, and file services.'
        ],
        techStack: ['Go', 'PromptUI', 'Bubble Tea', 'Cobra', 'Notion API'],
        link: '/notion-todo/index.html',
    },
    {
        title: 'eDoktor',
        description: 'eDoktor is a telemedicine platform that connects patients with doctors',
        longDescription: 'eDoktor is a telemedicine platform that connects patients with doctors. Patients can book appointments with doctors and get a consultation from anywhere. Doctors can manage their appointments, patients, and prescriptions.',
        workDescriptions: [
            'Designed and developed REST APIs for a scalable and secure system using TypeScript and Nest.js.',
            'Implemented a real- time communication system using WebSockets, VoIP Push, and FCM(Firebase Cloud Messaging) for seamless and fast data exchange between the client and server.',
            'Implemented data storage solutions using MongoDB and Redis for high performance and quick retrieval of data.',
            'Worked on scalable system design and implemented horizontal scaling using load-balancing techniques.',
            'Collaborated with front-end developers to integrate APIs with the user interface',
            'Designed and implemented security features such as encryption, authentication, and authorization to ensure the protection of sensitive data',
            'Developed a video calling feature using Zoom Video SDK.',
            'Developed a notification system using WebSocket and FCM.',
            'Developed an online payment system using PortWallet.',
            'Developed analytics APIs for admin, doctors and patients',
            'Developed a system for doctors to manage their appointments, patients, prescriptions.',
        ],
        techStack: ['Node.js', 'TypeScript', 'Nest.js', 'MongoDB', 'Redis', 'WebSockets', 'EC2', 'S3', 'CloudFront', 'Docker'],
        link: 'https://edoktor.rs',
        associatedWith: {
            companyName: "Durbin Labs Ltd.",
            companyLogo: logo.durbin,
        }
    },
    {
        title: 'CommChat',
        description: 'A multiplatform supported video communication application.',
        longDescription: 'CommChat is a multiplatform supported video communication application. It is a video communication application that allows users to communicate with each other using video calls. Users can create a room and invite other users to join the room. Users can also join a room using a room code.',
        workDescriptions: [
            'I worked on backend VoIP call functionalities and third-party API integration.',
            'Developed RESTful APIs using Python\'s Flask.',
            'Improved existing API’s performance.',
            'Monitored and optimized system performance to ensure the high availability of the application.'
        ],
        techStack: ['Python-Flask', 'React.js', 'MQTT', 'Redis', 'Celery', 'PostgreSQL', 'WebRTC'],
        link: 'https://commchat.com',
        associatedWith: {
            companyName: "TigerIT Bangladesh Ltd.",
            companyLogo: logo.tigerIt,
        }
    },
    {
        title: 'RetinaLMS',
        description: 'An admission coaching-centric scalable learning management system.',
        longDescription: 'RetinaLMS is a scalable learning management system, with admission, online payment, book distribution, and an online exam system.',
        workDescriptions: [
            'Developed the entire backend system, maintained this project, and worked on new features.',
            'Developed online exam taking solution with realtime leaderboard using Redis ZSET',
            'Integrated bKash payment gateway.',
            'Monitored and optimized system performance to ensure the high availability of the application.',
        ],
        techStack: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'WebSockets', 'React.js', 'Elastic Beanstalk', 'ELB', 'EC2', 'S3', 'CloudFront', 'SES'],
        link: 'https://retinalms.com',
        associatedWith: {
            companyName: "Durbin Labs Ltd.",
            companyLogo: logo.durbin,
        }
    },
]

export const experiences = [
    {
        companyName: "bKash Limited",
        startDate: "June 2023", endDate: "Present",
        descriptions: [
            "Working on secure backend solutions to support bKash's Visa Add Money feature, designed for scalability.",
        ],
        position: "Senior Engineer, Software Development, Research & Engineering",
        techStack: ["Java", "Spring Boot", "DynamoDB", "Redis", "Maven", "Docker"],
        image: logo.bKash,
    },
    {
        companyName: "Durbin Labs Ltd.",
        startDate: "June 2022", endDate: "May 2023",
        descriptions: [
            "Developed scalable Learning Management Systems and Telemedicine applications with cutting-edge technology",
            "Led a web team in developing and maintaining web applications consisting of 4 developers."
        ],
        position: "Senior Software Engineer",
        techStack: ["Go", "Node.js", "TypeScript", "Nest.js", "Express.js", "WebSockets", "React.js", "MongoDB", "Redis", "Docker", "AWS", "NGINX"],
        image: logo.durbin,
    },
    {
        companyName: "TigerIT Bangladesh Ltd.",
        startDate: "March 2021", endDate: "May 2022",
        descriptions: [
            "Built a modern enterprise video communication cloud platform with cutting edge technology",
        ],
        position: "Software Engineer",
        techStack: ["Python", "Node.js", "Python-Flask", "MQTT", "React.js", "PostgreSQL", "Redis", "Celery", "Twilio", "VoIP"],
        image: logo.tigerIt,
    },
    {
        companyName: "Durbin Labs Ltd.",
        startDate: "September 2019", endDate: "February 2021",
        descriptions: [
            "Built next-generation cloud solutions for the international market.", "Actively involved in full-stack development in cloud platforms using Node.js, Vue.js, and WebRTC."
        ],
        position: "Software Engineer",
        techStack: ["Node.js", "Express.js", "WebSockets", "Vue.js", "MongoDB", "Redis", "React.js", "AWS", "NGINX"],
        image: logo.durbin,
    },
]

export const about = {
    name: "Abu Sadat Md. Sayem",
    jobDescription: "a software developer from Bangladesh. Currently working as a Senior Software Engineer at",
    company: {
        name: "bKash Limited",
        link: "https://www.bkash.com",
    },
    description: `I have ${exps} of scalable software design and development experience. During this time, I have developed applications on different verticals including Fintech, Messaging, Audio/Video streaming, EdTech, HealthTech and so on.`,
    opening: openToWork ? "I'm looking for a backend system development opportunity using Go/Node.js" : "",
}

const issuer = {
    coursera: {
        NAME: "Coursera",
        IMAGE: "/coursera.jpeg",
    },
    udemy: {
        NAME: "Udemy",
        IMAGE: "/udemy.png",
    },
    mongodb: {
        NAME: "MongoDB",
        IMAGE: "/mongodb.png",
    },
    kodekloud: {
        NAME: "KodeKloud",
        IMAGE: "/kodekloud.jpeg",
    }
}

export const moocs = [
    {
        title: "Programming with Google Go",
        issuer: issuer.coursera.NAME,
        issuerImage: issuer.coursera.IMAGE,
        issueDate: "May 26, 2020",
        certLink: "https://www.coursera.org/account/accomplishments/specialization/XKHMLX8S6NAZ",
        skills: ["go"]
    },
    {
        title: "Modern React with Redux [2023 Update]",
        issuer: issuer.udemy.NAME,
        issuerImage: issuer.udemy.IMAGE,
        issueDate: "January 27, 2023",
        certLink: "https://www.udemy.com/certificate/UC-d3139483-b945-4b7f-87d1-fe17a2b8e32f",
        skills: ["react", "redux", "rtk-query", "javascript", "frontend"],
    },
    {
        title: "Docker Training Course for the Absolute Beginner",
        issuer: issuer.kodekloud.NAME,
        issuerImage: issuer.kodekloud.IMAGE,
        issueDate: "January 6, 2023",
        certLink: "https://kodekloud.com/certificate-verification/2D0415206C6D-2D040F29A111-2D040EED5BC5",
        skills: ["docker", "cloud", "devops"],
    },
    {
        title: "MongoDB Indexes",
        issuer: issuer.mongodb.NAME,
        issuerImage: issuer.mongodb.IMAGE,
        issueDate: "January 07, 2023",
        certLink: "https://learn.mongodb.com/c/KQG2oWNtTG-lA6GCyA5dYA",
        skills: ["mongodb", "database", "nosql"],
    },
    {
        title: "MongoDB Atlas Search",
        issuer: issuer.mongodb.NAME,
        issuerImage: issuer.mongodb.IMAGE,
        issueDate: "January 08, 2023",
        certLink: "https://learn.mongodb.com/c/Aw9Tpvy3S3e2aR5ThpWcEQ",
        skills: ["mongodb", "database", "nosql"],
    },
    {
        title: "AWS Fundamentals: Going Cloud-Native",
        issuer: issuer.coursera.NAME,
        issuerImage: issuer.coursera.IMAGE,
        issueDate: "April 17, 2021",
        certLink: "https://coursera.org/share/21ee62d525f77eebc431599978ee539d",
        skills: ["aws", "cloud", "devops"],
    },
]

export const skills = [
    {
        name: "Go",
        level: "expert",
        image: "https://miro.medium.com/max/600/1*i2skbfmDsHayHhqPfwt6pA.png",
        exps: "5 years",
    },
    {
        name: "AWS",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/fbceb94436312b6dacde68d122a5b9c7d11f9524/topics/aws/aws.png",
        exps: "3 years",
    },
    {
        name: "Node.js",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
        exps: "5 years",
    },
    {
        name: "Git",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png",
        exps: "5 years",
    },
    {
        name: "React",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
        exps: "3 years",
    },
    {
        name: "JavaScript",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
        exps: "5 years",
    },
    {
        name: "Express.js",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png",
        exps: "5 years",
    },
    {
        name: "Problem Solving",
        level: "expert",
        image: "https://ik.imagekit.io/durbinlms/9b6ecc_7de29236425e48a5aaa218d8333f47f1~mv2_ddrwU5kkf.jpg?updatedAt=1697138982659",
        exps: "700+ solved",
    },
    {
        name: "Docker",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png",
        exps: "5 years",
    },
    {
        name: "MongoDB",
        level: "expert",
        image: "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress",
        exps: "5 years",
    },
    {
        name: "PostgreSQL",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png",
        exps: "3 years",
    },
    {
        name: "Redis",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redis/redis.png",
        exps: "5 years",
    },
    {
        name: "TypeScript",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
        exps: "2 years",
    },
    {
        name: "DS & Algo",
        level: "expert",
        image: "https://miro.medium.com/max/1400/0*UVG1F-0kLAEWAT3k",
        exps: "6 years",
    },
    {
        name: "Python",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png",
        exps: "3 years",
    },
    {
        name: "Flask",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flask/flask.png",
        exps: "1 year",
    },
    {
        name: "WebSocket",
        level: "expert",
        image: "https://miro.medium.com/v2/resize:fit:1024/0*HdwDWjiZorOC8ZaO",
        exps: "5 year",
    },
    {
        name: "Nginx",
        level: "expert",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbijXWVvQXKVCrVBXU_v3w80VHR-G6RdMLAV59cdqyW5s4G-XHY2s1NIkvrzns9cqKzRg&usqp=CAU",
        exps: "5 years",
    },
    {
        name: "HTML",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
        exps: "5 years",
    },
    {
        name: "CSS",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
        exps: "5 years",
    },
    {
        name: "Linux",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/linux/linux.png",
        exps: "5 years",
    },
    {
        name: "Nest.js",
        level: "expert",
        image: "https://raw.githubusercontent.com/github/explore/37c71fdca4e12086faf8c7009793d2eb588c914e/topics/nestjs/nestjs.png",
        exps: "2 year",
    },

]

export const contacts = {
    email: "mailto:sadat.talks@gmail.com",
    github: "https://github.com/caffeines",
    linkedin: "https://www.linkedin.com/in/sadatsayem/",
    blog: "https://caffeines.medium.com",
    youtube: "https://www.youtube.com/@prepself",
}

export const articles = [
    {
        title: "Automatically Backup a MongoDB Database to DropBox using Github action",
        publishedDate: "30-04-2021",
        readTime: 5,
        tags: ["Database", "MongoDB", "Github Action", "DropBox"],
        shortInfo: "Learn how to automatically backup a MongoDB database to DropBox using Github action.",
        url: "https://caffeines.medium.com/automatically-backup-a-mongodb-database-to-dropbox-using-github-action-4a7bba3be470?source=friends_link&sk=e1c040d8c15be05aa4084f672d15861d"
    },
    {
        title: "Understanding CPU Latency",
        publishedDate: "28-09-2024",
        readTime: 2,
        tags: ["CPU", "Latency", "System Design", "Performance"],
        shortInfo: "CPU latency refers to the time it takes for a processor to handle a specific task or instruction. Let's understand the causes and effects of CPU latency.",
        url: "https://caffeines.medium.com/understanding-cpu-latency-2bfb6d4a01bd?source=friends_link&sk=e9c65e92be88e60df1106b746775b633"
    },
    {
        title: "Understanding Locking: Pessimistic and Optimistic Approaches",
        publishedDate: "09-09-2024",
        readTime: 5,
        tags: ["Database", "Locking", "Concurrency", "System Design", "Performance"],
        shortInfo: "Learn about different types of locking mechanisms and how they work in database systems.",
        url: "https://caffeines.medium.com/understanding-locking-pessimistic-and-optimistic-approaches-7540ea7d7181?source=friends_link&sk=5f606e385904dc6855bcb175e8868faf"
    },
    {
        title: "Git Worktrees: A Powerful Feature for Managing Multiple Working Directories",
        publishedDate: "30-10-2024",
        readTime: 4,
        tags: ["Git", "Github"],
        shortInfo: "Discover how to effectively work with Git Worktree and maximize its features",
        url: "https://caffeines.medium.com/git-worktrees-a-powerful-feature-for-managing-multiple-working-directories-4b62b0172edc?source=friends_link&sk=399ddee5cacbae1e4f2746a19a6bf202"
    }
];
