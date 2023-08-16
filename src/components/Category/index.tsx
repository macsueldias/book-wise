import { api } from "@/lib/axios"
import { Button, OptionsSearch } from "@/pages/explore/styles"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

type Category = {
    id: string
    name: string
  }

export function Category() {
    const [categorySelected, setCategorySelected] = useState('')
    const [category, setCategory] = useState<Category[]>([])

    const { isLoading, error } = useQuery<Category>(['category'] , async () => {
        const response = await api.get(`/categories`)
        const data = await response.data
        setCategory(data)
        return data
      },
    )

    return (
        <OptionsSearch>
            <Button active={true}>Tudo</Button>
            
            {isLoading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p>Erro...</p>
          ) : (
              category.map((category) => {
                  return (
                  <Button onClick={() => setCategorySelected(category.id)}  key={category.id}>{category.name}</Button>
                  )
              })
          )}
        </OptionsSearch>
    )
}
