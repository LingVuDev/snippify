import React, { FC, PropsWithChildren } from 'react'
import '@/styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'snippify',
  description: 'Discover & Share useful code snippets',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          {children}
        </main>
      </body>
      </html>
  )
}

export default RootLayout;
