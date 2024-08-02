import { Inter, Carter_One } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar";
import { ThemeProvider } from './context/ThemeContext'; // Assurez-vous que le chemin est correct

const inter = Inter({ subsets: ['latin'] });
const carterOne = Carter_One({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: "Jenifer Asnath L.",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <div className="lg:grid lg:grid-cols-12 lg:gap-4 min-h-screen ">
            <aside className="col-span-1 lg:col-span-2 lg:my-0 p-6">
              <SideBar />
            </aside>
            <main className={`col-span-12 lg:col-span-12 ${carterOne.className} lg:w-[80%] mx-auto lg:flex lg:flex-col lg:justify-center lg:items-center`}>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}