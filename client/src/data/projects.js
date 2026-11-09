/**
 * The four academic projects listed on the resume. The assignment requires at
 * least three; all four are included. No GitHub or live demo links are shown
 * because none are listed on the resume.
 */
export const projectList = [
  {
    id: 'csharp-object-oriented-applications',
    title: 'C# Object-Oriented Applications',
    image: '/images/projects/csharp-object-oriented.svg',
    imageAlt: 'Simple illustration of a code editor window.',
    technologies: ['C#', '.NET'],
    description:
      'Built C# applications using classes, inheritance, polymorphism, interfaces, exceptions and collections. I also created Windows Forms programs with user input validation, file handling and event-driven features.',
    role:
      'Sole developer — I designed the class hierarchy, built the Windows Forms interface, and implemented input validation and file handling.',
    outcome:
      'Demonstrates object-oriented design, defensive programming with exceptions, and event-driven desktop development.',
  },
  {
    id: 'database-development',
    title: 'Database Development',
    image: '/images/projects/database-development.svg',
    imageAlt: 'Simple illustration of a relational database.',
    technologies: ['Oracle SQL', 'SQL Developer'],
    description:
      'Created relational database structures using tables, keys, constraints and relationships, and wrote and debugged SQL queries to retrieve, join and update data while maintaining data integrity.',
    role:
      'Sole developer — I created the schema, defined keys and constraints, and wrote and tested the queries in SQL Developer.',
    outcome:
      'Demonstrates relational database design, SQL query writing and debugging, and maintaining data integrity.',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    image: '/images/projects/web-development.svg',
    imageAlt: 'Simple illustration of a web page in a browser window.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AJAX', 'jQuery'],
    description:
      'Built interactive web pages with HTML, CSS and JavaScript, including dynamic content and user interaction. I used AJAX and jQuery to load external data and update page content without a full page reload.',
    role:
      'Sole developer — I built the page structure, wrote the styles, added interactive behaviour, and integrated AJAX requests with jQuery.',
    outcome:
      'Demonstrates front-end page building, dynamic content updates with AJAX and jQuery, and interactive user interfaces.',
  },
  {
    id: 'linux-automation',
    title: 'Linux Automation',
    image: '/images/projects/linux-automation.svg',
    imageAlt: 'Simple illustration of a terminal window.',
    technologies: ['Linux', 'Bash', 'MySQL'],
    description:
      'Created Bash scripts for system tasks, user input and data conversions. I configured Linux services and firewall rules, and performed MySQL backup and scheduled automation tasks.',
    role:
      'Sole developer — I wrote and tested the scripts, configured services and firewall rules, and scheduled the MySQL backup job.',
    outcome:
      'Demonstrates Bash scripting, Linux service and firewall configuration, and scheduled database backups.',
  },
]
