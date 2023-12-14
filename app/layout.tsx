import type { Metadata } from 'next';
import { dmSans } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Grilli Restaurant',
  description: 'Discover the best dishes in the world',
}

export default function RootLayout({children} : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${dmSans.className}`}>
        {children}
      </body>
    </html>
  )
}