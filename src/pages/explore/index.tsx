import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";

import { api } from "@/lib/axios";
import { QueryClient, useQueries, useQuery } from "@tanstack/react-query";

import { BookExplore } from "@/components/BookExplore";
import { SideBar } from "@/components/SideBar";
import { Header } from "@/components/Header";
import { BookDetails } from "@/components/BookDetails";

import { buildNextAuthOptions } from "../api/auth/[...nextauth]";

import { ContainerMain, ContainerVisitor } from "../home/styles";
import { Button, ContainerExplore, OptionsSearch } from "./styles";
import { Category } from "@/components/Category";

type Category = {
  id: string
  name: string
}

type Rating = {
    rate: number
    book_id: string
}

type Book = {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  categories: Category[]
  ratings: Rating[]
}

type BookWithAvgRating = Book & {
  avgRating: number
  alreadyRead: boolean
}


export default function Explore() {
    const [openDetails, setOpenDetails] = useState(false)
    const [search, setSearch] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [bookSelected, setBookSelected] = useState({} as Book)

    const { data: categories } = useQuery<Category[]>(["categories"], async () => {
      const { data } = await api.get("categories");
      return data?.categories ?? []
    })
  
    const { data: books } = useQuery<BookWithAvgRating[]>(["books", selectedCategory], async () => {
      const { data } = await api.get("books", {
        params: {
          category: selectedCategory
        }
      });
      return data?.books ?? []
    })


    const filteredBooks = books?.filter((book) => {
      return book.name.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase())
    })

    function handleOpenDetails(book: Book) {
      if(!book) {
        return null
      } else {
        setOpenDetails(!openDetails)
        setBookSelected(book)
      }
    }
         
    return (
        <>
            <ContainerVisitor opacity={openDetails}>
                <SideBar user="usuario"/>
                <ContainerMain >
                  <Header />
                  <ContainerExplore>
                    <OptionsSearch>
                      <Button active={true} onClick={() => setSelectedCategory(null)}>Tudo</Button>
                      
                      {categories?.map((category) => (
                        <Button 
                          active={selectedCategory === category.id} onClick={() => setSelectedCategory(category.id)}
                          key={category.id}>{category.name}
                        </Button>
                      ))}
                    </OptionsSearch>
                    {filteredBooks?.map((book) => (
                      <button key={book.id} type="button" onClick={() => handleOpenDetails(book)}>
                          <BookExplore 
                            id={book.id}
                            author={book.author} 
                            title={book.name} 
                            image_url={book.cover_url}
                            // rate={rate}
                          />
                      </button>
                    ))}
                  </ContainerExplore>
                </ContainerMain>
            </ContainerVisitor>
            <BookDetails book={bookSelected} status={openDetails} setStatus={setOpenDetails} />
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