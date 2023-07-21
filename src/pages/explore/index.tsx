import { useState } from "react";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";

import { api } from "@/lib/axios";
import { useQueries } from "@tanstack/react-query";

import { BookExplore } from "@/components/BookExplore";
import { SideBar } from "@/components/SideBar";
import { Header } from "@/components/Header";
import { BookDetails } from "@/components/BookDetails";

import { buildNextAuthOptions } from "../api/auth/[...nextauth]";

import { ContainerMain, ContainerVisitor } from "../home/styles";
import { Button, ContainerExplore, OptionsSearch } from "./styles";

type CategoryBook = {
  id: string
  name: string
}

interface BookProps {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  categories: CategoryBook[]
  ratings: number[]
}

interface Rating {
    rate: number
    book_id: string
}

export default function Explore() {
    const [openDetails, setOpenDetails] = useState(false)
    const [books, setBooks] = useState<BookProps[]>([])
    const [ratings, setRatings] = useState<Rating[]>([])

    const [BookQuery, ratingQuery] = useQueries({
      queries: [
        {
          queryKey: ['book'],
          queryFn: () =>
            api
              .get('books')
              .then((res) => setBooks(res.data)),
        },

        {
          queryKey: ['rating'],
          queryFn: () =>
            api
              .get('ratings')
              .then((res) => setRatings(res.data)),
        },
      ],
    })
      
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
                        {books.map((book) => {
                          const rate = ratings.find(rating => rating.book_id === book.id)!.rate
                          return (
                          <button key={book.id} type="button" onClick={() => setOpenDetails(!openDetails)}>
                              <BookExplore 
                                id={book.id}
                                author={book.author} 
                                title={book.name} 
                                image_url={book.cover_url}
                                rate={rate}
                              />
                          </button>
                          )
                        })}
                        
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