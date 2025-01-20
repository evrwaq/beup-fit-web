import { UserProvider } from '@/context/UserContext'
import { Poppins } from 'next/font/google'

export const metadata = {
  title: 'BeUp Fit',
  description: 'Be Fit. BeUp Fit.',
}

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  )
}
