// RootLayout.jsx
import '@styles/globals.css';
import React from 'react';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'prompt-pedia',
  description: 'discover and share ai prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
            <Nav/>
          {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;
