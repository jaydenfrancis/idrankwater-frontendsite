import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>I Drank Water</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to I Drank Water!" />
        <div className="description">
          <p>
            On this site you can find our privacy policy and support form.
            Thank you for checking out our app :)
          </p>
          <div className="button-container">
            <a href="/privacy-policy" className="button">
              <FontAwesomeIcon icon={faShieldAlt} />
              Privacy Policy
            </a>
            <a href="https://forms.gle/bEeoGk6bQAWaBvJq8" className="button">
              <FontAwesomeIcon icon={faEnvelope} />
              Support Form
            </a>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .description {
          text-align: center;
          line-height: 1.5;
          font-size: 1.5rem;
          max-width: 600px;
        }

        .button-container {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .button {
          display: flex;
          align-items: center;
          background-color: #0070f3;
          border: none;
          color: white;
          padding: 1rem 2rem;
          margin: 0 1rem;
          text-align: center;
          text-decoration: none;
          font-size: 1rem;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }

        .button:hover {
          background-color: #0051c7;
        }

        .button svg {
          margin-right: 0.5rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
