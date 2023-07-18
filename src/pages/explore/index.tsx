import { BookExplore } from "@/components/BookExplore";
import { SideBar } from "@/components/SideBar";
import { Header } from "@/components/Header";
import { ContainerMain, ContainerVisitor } from "../home/styles";
import { Button, ContainerExplore, OptionsSearch } from "./styles";
import { BookDetails } from "@/components/BookDetails";
import { useState } from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../api/auth/[...nextauth]";

export default function Explore() {
    const [openDetails, setOpenDetails] = useState(false)
    return (
        <>
            <ContainerVisitor opacity={openDetails}>
                <SideBar user="usuario"/>
                <ContainerMain >
                    <Header />
                    <ContainerExplore>
                        <OptionsSearch>
                            <Button active={true}>Tudo</Button>
                            <Button>Computação</Button>
                            <Button>Educação</Button>
                            <Button>Fantasia</Button>
                            <Button>Ficção Cientifica</Button>
                            <Button>Horror</Button>
                            <Button>HQs</Button>
                            <Button>Suspense</Button>
                        </OptionsSearch>
                        <button type="button" onClick={() => setOpenDetails(!openDetails)}>
                            <BookExplore  />
                        </button>
                        <BookExplore />
                        <BookExplore />
                        <BookExplore />
                        <BookExplore />
                        <BookExplore />
                        <BookExplore />
                        <BookExplore />
                        <BookExplore />
                    </ContainerExplore>
                </ContainerMain>
            </ContainerVisitor>
            <BookDetails status={openDetails} />
        </>
    )
}

// Apenas usuários logados poderão acessar a página
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const session = await getServerSession(
      req,
      res,
      buildNextAuthOptions(req, res),
    )
  
    if (!session) {
      return {
        redirect: {
          permanent: true,
          destination: '/',
        },
      }
    }
  
    return {
      props: {},
    }
  }