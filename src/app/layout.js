import Navbar from './components/Navbar';
import './styles/globals.css';
import { Poppins } from 'next/font/google';

// const poppins = Poppins({
//   weight: ['100', '200', '400', '500', '600', '700', '800'],
//   subsets: ['latin'],
// });

export const metadata = {
  title: 'Plastico',
  description: "The World's first recyclable water bottle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
