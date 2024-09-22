# My Portfolio Site

Welcome to my personal portfolio website! This site showcases my skills, projects, and professional experience as a researcher and developer.

## About This Site

This portfolio is built using modern web technologies to provide a smooth and responsive user experience:

- **Framework**: [Next.js](https://nextjs.org/) for server-side rendering and optimal performance
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for a clean, customizable design
- **Language**: TypeScript for type-safe development

## Features

- **Home Page**: An introduction to who I am and what I do
- **Dashboard**: An overview of my skills and current projects
- **About**: Detailed information about my background and experience
- **Edit**: A section for managing site content (for admin use)
- **Responsive Design**: Looks great on both desktop and mobile devices
- **Custom Components**: Including a ProfileSidebar for easy navigation

## Project Structure

The site is organized as follows:

- `src/app/`: Main pages and layouts
  - `page.tsx`: Home page
  - `dashboard/page.tsx`: Dashboard page
  - `about/page.tsx`: About page
  - `edit/page.tsx`: Edit page (admin only)
  - `layout.tsx`: Main layout component
- `src/components/`: Reusable UI components
- `src/api/`: API-related functionality
- `tailwind.config.ts`: Tailwind CSS configuration

## Getting Started

To run this site locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

Feel free to fork this project and customize it for your own portfolio:

1. Update the content in `src/app/` to reflect your personal information
2. Modify the components in `src/components/` to match your design preferences
3. Adjust the `tailwind.config.ts` file to customize the overall look and feel

## Deployment

This site is optimized for deployment on [Vercel](https://vercel.com/), but can be hosted on any platform that supports Next.js applications.

## Contact

If you have any questions or would like to connect, please reach out through the contact information provided on the site.

## License

This project is open source and available under the [MIT License](LICENSE).
