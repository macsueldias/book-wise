import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";

import { api } from "@/lib/axios";
import { QueryClient, useQueries } from "@tanstack/react-query";

import { BookExplore } from "@/components/BookExplore";
import { SideBar } from "@/components/SideBar";
import { Header } from "@/components/Header";
import { BookDetails } from "@/components/BookDetails";

import { buildNextAuthOptions } from "../api/auth/[...nextauth]";

import { ContainerMain, ContainerVisitor } from "../home/styles";
import { Button, ContainerExplore, OptionsSearch } from "./styles";

type Category = {
  id: string
  name: string
}

type Rating = {
    rate: number
    book_id: string
}

type Books = {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  categories: Category[]
  ratings: Rating[]
}

type BookCategory = {
  bookId: string
  categoryId: string
}

interface ExploreProps {
  books: Books[]
  amountBook: number
}


export default function Explore() {
    const [openDetails, setOpenDetails] = useState(false)
    const [books, setBooks] = useState<Books[]>([])
    const [ratings, setRatings] = useState<Rating[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [categorySelected, setCategorySelected] = useState('c9f22067-4978-4a24-84a1-7d37f343dfc2')
    const queryClient = new QueryClient()

    const [BookQuery, ratingQuery] = useQueries({
      queries: [
        {
          queryKey: ['book', categorySelected],
          queryFn: () =>
            api
              .get('books', {
                params: {
                  category: categorySelected,
                }
              })
              .then((res) => setBooks(res.data)), 
        },

        {
          queryKey: ['rating'],
          queryFn: () =>
            api
              .get('ratings')
              .then((res) => setRatings(res.data)),
        },

        {
          queryKey: ['categories'],
          queryFn: () =>
            api
              .get('categories')
              .then((res) => setCategories(res.data)),
        },
      ],
    })   


    useEffect(() => {
      queryClient.invalidateQueries({
        queryKey: [categorySelected],
        exact: true,
      })
    },[categorySelected])

         
    return (
        <>
            <ContainerVisitor opacity={openDetails}>
                <SideBar user="usuario"/>
                <ContainerMain >
                    <Header />
                    <ContainerExplore>
                        <OptionsSearch>
                            <Button active={true}>Tudo</Button>
                            {/* <Button onClick={() => handleFilterCategoryBook("Computação")}>Computação</Button> */}
                            {categories.map((category) => {
                              return (
                                <Button onClick={() => setCategorySelected(category.id)}  key={category.id}>{category.name}</Button>
                              )
                            })}
                            {/* <Button>Educação</Button>
                            <Button>Ficção Cientifica</Button>
                            <Button>Horror</Button>
                            <Button>HQs</Button>
                            <Button>Suspense</Button> */}
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