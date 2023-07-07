import Head from 'next/head'
import { BookDetails } from '@/components/BookDetails'
import { ContainerAcess, ContainerLogin, ImageIlustration, ModelAccess } from './styles'
import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()
  const {data, status} = useSession()
  
  console.log(data)

  useEffect(() => {
    if(status === 'authenticated') {
      router.push('/explore')
    }
  }, [status, router])

  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContainerLogin>
        <ImageIlustration src="./Image_login.png" />
        <ContainerAcess>
            <h2>Boas vindas!</h2>
            <p>Faça seu login ou acesse como visitante.</p>

            <button type='button' onClick={() => signIn('google')}>
                <ModelAccess>
                    <Image src="./icons/google.svg" alt="" width={32} height={32}/>
                    Entrar com o Google
                </ModelAccess>
            </button>
            <button type='button' onClick={() => signIn('github')}>
                <ModelAccess>
                    <Image src="./icons/github.svg" alt="" width={32} height={32}/>
                    Entrar com o GitHub
                </ModelAccess>
            </button>
            <button type='button' onClick={() => signOut()}>
                <ModelAccess>
                    <Image src="./icons/rocket.svg" alt="" width={32} height={32}/>
                    Acessar como visitante
                </ModelAccess>
            </button>
        </ContainerAcess>
    </ContainerLogin>
      </main>
    </>
  )
}
