import { Metadata } from 'next';
import { dmSans } from './fonts';
import './globals.css';
import { BackToTop, Footer, Navbar } from '@/components/components';

export const metadata: Metadata = {
  title: 'Grilli Restaurant',
  description: 'Discover the best dishes in the world',
}

export default function RootLayout({children} : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body id='top' className={`${dmSans.className} nav-active`}>
        <Navbar/>
        {children}
        <Footer/>
        <BackToTop/>
      </body>
    </html>
  )
}


