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

    const { data: categories } = useQuery<Category[]>(["categories"], async () => {
      const { data } = await api.get("categories");
      return data?.categories ?? []
    })
  
    const { data: books } = useQuery<BookWithAvgRating[]>(["books", selectedCategory], async () => {
      const { data } = await api.get("/books", {
        params: {
          category: selectedCategory
        }
      });
      return data?.books ?? []
    })


    const filteredBooks = books?.filter((book) => {
      return book.name.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase())
    })
         
    return (
        <>
            <ContainerVisitor opacity={openDetails}>
                <SideBar user="usuario"/>
                <ContainerMain >
                    <Header />
                    <ContainerExplore>
                    <OptionsSearch>
                      <Button active={true} onClick={() => setSelectedCategory(null)}>Tudo</Button>
                      
                      {categories?.map((category, i) => (
                        <Button 
                          active={selectedCategory === category.id} onClick={() => setSelectedCategory(category.id)}
                          key={category.id}>{category.name}
                        </Button>
                      ))}
                    </OptionsSearch>
                    {filteredBooks?.map((book) => (
                      <button key={book.id} type="button" onClick={() => setOpenDetails(!openDetails)}>
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