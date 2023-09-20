import { ChartLineUp, MagnifyingGlass } from "@phosphor-icons/react"
import { ContainerHeader } from "./styles"
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"


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
  
const searchFormSchema = z.object({
    name: z.string(),
})

export type SearchFormData = z.infer<typeof searchFormSchema>

export function Header() {
    const [name, setName] = useState("")

    const { register, handleSubmit } = useForm<SearchFormData>({
            resolver: zodResolver(searchFormSchema)
    })

      const { data: books } = useQuery<BookWithAvgRating[]>(["search", name], async () => {
        const { data } = await api.get("search", {
          params: {
            name,
          }
        });
        return data?.books ?? []
      })

    async function handleSearchBook(data: SearchFormData) {
        setName(data.name)
    }

    console.log(books)

    return (
        <ContainerHeader>
            <h2>
                Início 
                <ChartLineUp size={24} weight="regular" color="#50B2C0" />
            </h2>

            <form onSubmit={handleSubmit(handleSearchBook)}>
                <input type="text" {...register('name')} placeholder="Buscar livro ou autor"/>
                <button type="submit">
                    <MagnifyingGlass size={16} color="#303F73"/>
                </button>
            </form>
        </ContainerHeader>
    )
}