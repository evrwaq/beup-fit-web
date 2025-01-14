export const metadata = {
  title: 'BeUp Fit',
  description: 'Be Fit. BeUp Fit.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
