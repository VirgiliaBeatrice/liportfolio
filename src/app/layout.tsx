import './globals.css';
import { Providers } from "./providers";
import AppNavbar from '../components/NavBar';
import SideBar from '../components/sidebar/sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* <AppNavbar />
          <aside>
            <SideBar name="Your Name" biography="Short biography for the left-hand sidebar" links={[]} />
          </aside>
          <main>{children}</main> */}
          <AppNavbar />
          <div className="container mx-auto px-4">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )

}