# Trevor Mugulusi — Software Engineering Portfolio

A simple, responsive React portfolio for **Trevor Mugulusi**, Software
Engineering Technology – Artificial Intelligence Co-op student at Centennial
College.

This is a six-page student portfolio built for a web development assignment.
It uses plain CSS, has no UI libraries, and keeps all content in data files so it
is easy to read and grade.

> All content comes from Trevor's resume. Nothing has been invented — no
> fabricated employers, degrees, projects, certifications, or links. Where an
> asset is not supplied, the site shows a clearly labelled placeholder.

---

## Technologies

| Purpose        | Choice                       |
| -------------- | ---------------------------- |
| Framework      | React 19 (JavaScript / JSX)  |
| Build tool     | Vite 8                       |
| Routing        | React Router 7               |
| Styling        | Plain CSS (no framework)     |
| Linting        | oxlint                       |
| Hosting        | Vercel or Netlify            |

The only dependency besides React is `react-router-dom`. The logo, service icons,
and project images are all simple SVGs created for this project.

---

## Pages

| Route         | Page        | Contents                                                            |
| ------------- | ----------- | ------------------------------------------------------------------- |
| `/`           | Home        | Welcome message, title, introduction, mission statement, 2 buttons  |
| `/about`      | About Me    | Photo, paragraph, education, career objective, skills, experience, resume PDF link |
| `/projects`   | Projects    | Four project cards with image, technology, description, role, outcome |
| `/education`  | Education   | Program details, relevant courses, certifications                   |
| `/services`   | Services    | Five simple service cards                                            |
| `/contact`    | Contact Me  | Contact details and the message form                                |

Any other address shows a small "Page not found" message with a link home.

---

## Getting started

Requires **Node.js 18+**.

```bash
npm install     # install dependencies
npm run dev     # start the dev server at http://localhost:5173
npm run build   # create a production build in dist/
npm run preview # preview the production build
npm run lint    # run oxlint
```

---

## Project structure

```
src/
├── assets/icons/          # small SVG icons
│   ├── index.jsx
│   └── registry.jsx       # service name → icon
├── components/
│   ├── ContactForm.jsx    # the contact form
│   ├── Footer.jsx
│   ├── Logo.jsx           # TM circle logo
│   ├── Navbar.jsx
│   ├── PageHeader.jsx
│   ├── ProfileImage.jsx   # photo + placeholder
│   ├── ProjectCard.jsx
│   ├── ScrollToTop.jsx
│   ├── ServiceCard.jsx
│   └── TagList.jsx
├── data/                  # all resume content lives here
│   ├── education.js
│   ├── experience.js
│   ├── navigation.js
│   ├── profile.js
│   ├── projects.js
│   └── services.js
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Services.jsx
│   └── Contact.jsx
├── utils/
│   └── contactValidation.js
├── App.jsx                # routes and page titles
├── main.jsx
└── index.css              # all styling

public/
├── favicon.svg
├── _redirects             # Netlify SPA rewrite
├── images/
│   ├── README.md
│   └── projects/          # four simple project images
└── resume/
    └── README.md
```

### Editing the content

All written content is in `src/data/`. To change a project, a service, a course,
or a contact detail, edit the matching file — the pages update automatically.
Contact details exist only in `src/data/profile.js`.

---

## Files you need to add

Two files are not included, so no personal information is stored in the repo.
The site works without them and shows a clear placeholder.

### 1. Professional photo

Add your photo here:

```
public/images/trevor-mugulusi.jpg
```

Until then the About Me page shows a dashed placeholder telling you where the
file goes. It never shows a made-up likeness. Suggested size: 800 × 1000 px.

### 2. Resume PDF

Add your resume here:

```
public/resume/Trevor_Mugulusi_Resume.pdf
```

The About Me page links to this path with a `download` attribute. To use a
different filename, change `resumePath` in `src/data/profile.js`.

---

## Assignment requirements

- [x] Navigation bar with all six pages, working on desktop and mobile
- [x] Custom "TM" logo placed in the navigation bar
- [x] Home page: welcome message, professional title, introduction, mission
      statement, and links to About Me and Projects
- [x] About Me page: full name, professional image, short paragraph, current
      education, career objective, technical skills, previous experience, and a
      PDF resume link
- [x] Projects page: four projects (three required), each with an image,
      technology, description, role, and outcome
- [x] Education page: institution, program, credential, location, expected
      completion date, GPA, relevant courses, and certifications with dates
- [x] Services page: a short list of five services with small icons
- [x] Contact page: location, phone, email, and a form with First Name, Last
      Name, Contact Number, Email Address, and Message
- [x] Form validation, disabled button while submitting, success message, and a
      redirect to `/` using React Router
- [x] Responsive layout: horizontal nav on desktop, hamburger menu on mobile,
      cards in rows on desktop and one column on mobile
- [x] Semantic HTML, labelled inputs, keyboard navigation, visible focus
      states, and alt text on images
- [x] Page title and meta description in `index.html`
- [x] Only the six required pages — no extra portfolio pages
- [x] GitHub-ready: `.gitignore`, `README.md`, no secrets

---

## Deployment

The project is a static Vite build.

```bash
npm run build     # outputs to dist/
```

**Vercel** — `vercel.json` is included with the SPA rewrite.

**Netlify** — `netlify.toml` and `public/_redirects` send unknown paths to
`index.html`.

**Render / Railway** — use a Static Site: build command `npm run build`, publish
directory `dist`.

> The SPA rewrite is required. Without it, refreshing directly on `/projects`
> returns a 404 even though the links inside the site work.
