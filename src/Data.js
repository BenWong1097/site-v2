const Data = {
    NavList: ['About', 'Experience', 'Projects', 'Contact'],
    Skills: [
        {
            color: "rgb(112, 139, 38)",
            list: [
                'Python', 
                'C++', 
                'Javascript', 
                'Ruby', 
                'Lua', 
                'HTML/CSS'
            ]
        },
        {
            color: "rgb(60, 58, 207)",
            list: [
                'Next.js', 
                'Docker', 
                'Redis',
                'Rails', 
                'Angular', 
                'React', 
                'AWS', 
                'Git'
            ]
        }
    ],
    About: [
        "I’m currently a Software Engineer at Duo Security, working on zero-trust technology.",
        "I’m based in Houston, Texas so you already know I’m a big foodie as well. I'd say I'm a pretty impulsive and open-minded person. I'm always open to explore the unknown and learn from it.",
        "I love programming in order to solve problems that are pervasive, but have a particular interest in web security and game development."
    ],
    Experience : [
        {
            employer: 'Epic Systems',
            role: 'Software Developer',
            from: 'Aug 2020',
            to: 'Mar 2020',
            details: [
                'Designed and implemented projects that streamline and automate core workflows for users in the healthcare industry with future enhancements and scalability in mind',
                'Coordinated and led meetings with international customers to gather requirements and feedback for high-demand projects',
                'Utilized practices such as asynchronous patterns in javascript, DRY, automated unit testing, and usability design reviews'
        ]},
        {
            employer: 'Texas A&M College of Architecture',
            role: 'Web Developer',
            from: 'Feb 2018',
            to: 'May 2020',
            details: [
                'Refactored client websites to work with Cascade CMS using Velocity, Javascript, and HTML/CSS, streamlining deployment of site changes',
                'Initiated documentation efforts for Cascade and Django framework utilized by existing code, reducing on-boarding training times',
                'Commenced work on unit testing coverage using Pytest-Django, assisting with regression testing on the existing web infrastructure applied by the college'
        ]},
        {
            employer: 'Sabre Corporation',
            role: 'Software Developer Intern',
            from: 'May 2019',
            to: 'Aug 2019',
            details: [
                'Investigated the current flight pathing algorithm and eliminated observed redundant effort, improving performance in targeted edge cases',
                'Implemented validation of data values for the flight scheduling service through the use of regex expressions',
                'Developed a business case that targeted a novel market with technical and financial analysis with a React web application as a proof-of-concept'
        ]},
        {
            employer: 'Tokio Marine HCC',
            role: 'Application Development Intern',
            from: 'May 2018',
            to: 'Aug 2018',
            details: [
                'Implemented a notification system for group subscriptions supporting many-to-many relationships using the .NET Framework, reducing storage complexity from the preexisting architecture that was in place',
                'Developed a .NET web application that provides authorized users an intuitive interface to modify their subscriptions to notification groups, removing the need to contact a DBA for each revision'
        ]},
    ],
    Projects: [
        {
            name: "AutoBar",
            description: "A device that concocts drinks! Intended to reduce the burden during rush hours at bars, AutoBar allows users to place their orders online and wait for their drinks to be made.",
            tech: ['Ruby', 'Rails', 'Twilio API', 'RPi'],
            tags: ['Collaboration', 'Web App', 'Hardware'],
            github: 'https://github.com/autobar/autobar-app',
            demo: ''
        },
        {
            name: "TA Application System",
            description: "Formerly a process done by the department head over the course of a semester, this web application allows for prospective teaching assistants and professors to be matched up with the click of a button!",
            tech: ['Ruby', 'Rails', 'Google OAuth'],
            tags: ['Collaboration', 'Web App'],
            github: 'https://github.com/WinterIsMissing/TAMatch',
            demo: 'http://tiny.cc/Taas'
        },
        {
            name: "BMO",
            description: "BMO and be more! With the intentions to find a cheap solution to a real problem, we created a device that scans physical documents and outputs the contents to a braille interface.",
            tech: ['Python', 'RPi', 'Tesseract'],
            tags: ['Collaboration', 'Tool', 'OCR', 'Hardware'],
            github: 'https://github.com/BenWong1097/BMO',
            demo: ''
        },
        {
            name: "Untitled Zombie Game 3",
            description: "It's dark. Play with your friends in this web game and avoid being infected! Or be a zombie and bite some brainy humans. Literally can't play this alone, by the way. Intended to be a same-room game, the game is fun with some random yelling!",
            tech: ['Typescript', ],
            tags: ['Collaboration', 'Web Game'],
            github: 'https://github.com/SaltyQuetzals/csce-315-team-2',
            demo: 'http://tiny.cc/uz3'
        },
        {
            name: "Course Scheduler",
            description: "An intuitive web application designed to assist students in planning their classes. No more of that spreadsheet life!",
            tech: ['Angular', 'NodeJS', 'Firebase', 'Google OAuth', 'AWS RDS'],
            tags: ['Web App'],
            github: '',
            demo: 'https://open-edu-tamu.herokuapp.com/'
        },
        {
            name: "Meal Time!",
            description: "A web-based 2D platformer, fight it out with a friend in this food-filled battlefield. A mini-project made for funsies with my sis. :)",
            tech: ['CreateJS'],
            tags: ['Web Game'],
            github: 'https://github.com/BenWong1097/MealTime',
            demo: 'https://mealtimethegame.herokuapp.com/'
        },
        {
            name: "Shroom Lab!",
            description: "Embody your inner mad scientist as you infiltrate a lab in search of the coveted giant shroom. Made during a 48-hour game jam!",
            tech: ['Angular', 'NodeJS', 'Firebase', 'Google OAuth'],
            tags: ['Web Game', 'Game Jam', 'Chillennium 2017'],
            github: 'https://github.com/BenWong1097/Chillennium2017ShroomLab',
            demo: 'https://shroomlab.herokuapp.com/'
        },
        {
            name: "Fiverr Buyer Request Notifier",
            description: "Utilizes a web driver and notifies sellers when a new potential customer posts a request. Conceived in the year of 2017 so it probably doesn't work, but it's still neat!",
            tech: ['Selenium', 'Python'],
            tags: ['Tool'],
            github: 'https://github.com/BenWong1097/Fiverr-Buyer-Request-Notifier',
            demo: ''
        },
        {
            name: "Life of Joe",
            description: "What's with all the bombs and bulls? No idea! Just jam it out to the catchy tune and have some fun with Joe in this rhythm runner as he flashes some moves! Made during my first 48-hour game jam!",
            tech: ['Game Maker Language (GML)'],
            tags: ['Game', 'Game Jam', 'Chillennium 2016'],
            github: '',
            demo: 'https://sgda1.itch.io/life-of-joe'
        }
    ],
    Contact: {
        email: "ben.wong.jamin@gmail.com",
        github: "https://github.com/BenWong1097",
        linkedin: "https://www.linkedin.com/in/bwong1097/"
    }
}

export default Data;