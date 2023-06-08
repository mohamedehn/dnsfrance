import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from '@/components/Main'
import About from '@/components/About'
import Pole from '@/components/Pole'
import { useEffect } from 'react'
import Content from '@/components/Content'
import Experts from '@/components/Experts'
import PoleDefinition from '@/components/PoleDefinition'
import Ges from '@/components/Ges'
import Clients from '@/components/Clients'
import Dns from '@/components/dns'
import JobComponent from '@/components/JobComponent'
import Consulting from '@/components/Consulting'
import Form from '@/components/Form'
import Footer from '@/components/Footer'
import PopUpCookies from '@/components/PopUpCookies'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);

  return (
    <>
      <Head>
        <title>Data Network Solutions</title>
        {/* <meta name="description" content="L'étape la plus importante pour une entreprise, est de passer à la suivante. Votre tremplin vers 
          l’entreprise de demain. Société de conseil et d’ingénierie spécialisée dans la transition digitale & énergétique, ainsi que dans 
          les réseaux de télécommunications" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <meta name="google-site-verification" content="s5rX2JLZ2TEK0Fbrkixj2ZaBNgBXToowmHn5kQqF9PM"/>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></script>
       
        <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          /> */}
      </Head>
      <Main/>
      <PopUpCookies/>
      <About/>
      <Pole/>
      {/* <Experts/> */}
      <PoleDefinition/>
      <Content/>
      <Clients/>
      {/* <Ges/> */}
      <Dns/>
      {/* <Consulting/> */}
      <JobComponent/>
      <Form/>
      <Footer/>
    </>
  )
}
