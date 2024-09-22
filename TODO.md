# Project TODO List

## High Priority
- [x] Make a concrete homepage
- [x] Implement sidebar component
- [x] Implement top navigation component with search bar, Home, Projects, Research, Publications, About, and Contact links
- [x] Integrate sidebar into layout
- [x] Add user profile information to sidebar
- [x] Style main content area
- [x] Create a public folder for static files
- [x] Configure project to use public folder
- [x] Create About page with resume information
- [x] Add resume directory to .gitignore
- [ ] Create a markdown file for each project section
- [ ] Create a markdown file for each publications section
- [ ] Create ProjectCard component for displaying project details
- [ ] Create projectsData.ts file to store project information
- [ ] Update projects/page.tsx to use ProjectCard components
- [ ] Add thumbnail images for each project in the public folder

## Medium Priority
- [ ] Optimize responsive design
- [ ] Implement dark mode toggle
- [ ] Add footer component
- [ ] Add necessary static files (images, documents, etc.) to the public folder
- [ ] Create Projects page
- [ ] Create Research page
- [ ] Implement filtering and sorting options for projects
- [ ] Add pagination or infinite scroll for projects list

## Low Priority
- [ ] Refactor CSS for better maintainability
- [ ] Add animations for smoother transitions
- [ ] Implement internationalization (i18n) support
- [ ] Add downloadable PDF version of resume
- [ ] Add animations for ProjectCard hover effects
- [ ] Implement a lightbox for project images

## Completed
- [x] Create basic layout structure
- [x] Implement AppNavbar component
- [x] Create ProfileSidebar component
- [x] Create About page with Work Experience, Education Experience, and Skill Lists
- [x] Update .gitignore to exclude resume documents

## Notes
- Consider using CSS Grid for layout improvements
- Research best practices for Next.js performance optimization
- The content should be managed in markdown files and rendered with components.
- For each content, there should be a corresponding markdown file and a folder with the same name.
- For each content, there should be a corresponding yml file for metadata.
- The content should be sortable by date, title, or other fields.
- The content should be searchable.
- The content should be filterable.
- The content should be taggable.
- Static files are now stored in the public folder at the root of the project
- Project is configured to use and optimize static assets from the public folder
- ProfileSidebar component created for better code organization
- About page created with resume information in English
- Resume documents in public/documents/resume are now ignored by git

