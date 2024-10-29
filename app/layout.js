// app/layout.js
import './globals.css';
import ClientWrapper from './ClientWrapper';

export const metadata = {
  title: 'AI Flashcard',
  description: 'Your flashcard SaaS application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
