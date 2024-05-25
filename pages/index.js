import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>I Drank Water</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to I Drank Water!" />
        <p className="description">
          On this site you can find our privacy policy and support form.
          Thank you for checking out our app :)
        </p>
      </main>

      <Footer />
    </div>
  )
}
