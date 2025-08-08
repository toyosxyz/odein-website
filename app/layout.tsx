import '../styles/globals.css'
import '../styles/article.css'
import '../styles/InfiniteSlider.css'
import { Loader } from '../components/ui/Loader'

export const metadata = {
  title: 'Odein',
  description: 'The Shopify Agency',
  icons: {
    icon: '/favicon.jpg',
  },
  verification: {
    google: '4zt3qJFqK3GsLY5ReAkOKhk7yVjw2LkWOWvo-IpdmGE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
} 