// pages/_app.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/styles/globals.css'; // Assuming you have Tailwind or custom global styles

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
