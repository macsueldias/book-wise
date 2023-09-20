import { useState, useEffect } from "react";
import Image from "next/image";

import { Assess, Assessment, AssessmentScore, ContainerBookDetails, Details, Divider, FooterInfoBook, GroupButtonAssess, HeaderReview, InfoBook, Note, Review, ReviewBook, TextAssess, Title } from "./styles";

import { BookOpen, BookmarkSimple, Check, X } from "@phosphor-icons/react";

import { Avatar, Reviewer } from "../Book/styles";
import { RatingStars } from "../RatingStars";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { parseCookies } from "nookies";

type Category = {
    id: string
    name: string
}
  
type Rating = {
    rate: number
    book_id: string
}
  
type BookProps = {
    id: string
    name: string
    author: string
    summary: string
    cover_url: string
    total_pages: number
    categories: Category[]
    ratings: Rating[]
}

interface BookDetailsProps {
    status: boolean
    book: BookProps
    setStatus: (value: boolean) => void
}

interface RatingsProps {
    id: string
    rate: number
    description: string
    created_at: Date
    bookId: string
    userId: string
}

const testimonialFormSchema = z.object({
    description: z.string(),
})

export type TestimonialFormData = z.infer<typeof testimonialFormSchema>


export function BookDetails({status, setStatus, book}: BookDetailsProps ) {
    const [ratings, setRatings] = useState<RatingsProps[]>([{} as RatingsProps])
    const [currentRate, setCurrentRate] = useState(0);
    const [countCharAssess, setCountCharAssess] = useState('')
    const [openTestimonial, setOpenTestimonial] = useState(false)
    const [testimonial, setTestimonial] = useState("")

    const id = book.id

    const cookies = parseCookies()
    const userId = cookies['@ignitecall:userId']

    const queryClient = useQueryClient();

    const { data: rating } = useQuery(['ratings', id], async () => {
        const {data} = await api.get("ratings", {
          params: {
            id,
          }
        });
        return data
    }, {
        enabled: !!ratings,
        onSuccess(data) {
            setRatings(data)
        }
    })

    const { data: books } = useQuery<Category[]>(["booksWithCategory", id], async () => {
        const { data } = await api.get("bookcategory", {
            params: {
            category: id
            }
        });
        return data?.books ?? []
    })

    function handleOpenTestimonial() {
        setOpenTestimonial(!openTestimonial)
    }

    const { mutateAsync: handleRate } = useMutation(async () => {
        await api.post(`/testimonial`, {
          id,
          description: testimonial,
          rate: currentRate,
          userId, 
        })
      }, {
        onSuccess: () => {
          queryClient.invalidateQueries(['book', id])
          queryClient.invalidateQueries(['books'])
        }
      })

    const lengthComment = countCharAssess.split('').length

    const image = book.cover_url && book.cover_url.replace("public/", "http://localhost:3000/")

    const {
        register,
        handleSubmit,
        reset,
      } = useForm<TestimonialFormData>({
        resolver: zodResolver(testimonialFormSchema),
      })

    async function handleSendTestimonial(data: TestimonialFormData) {
        setTestimonial(data.description)
        await handleRate()
        reset()
      }   

            
        function handleResetTestimonial() {
            reset()
            setCurrentRate(0)
        }



    return (
        <ReviewBook active={status}>
            <ContainerBookDetails>
                <div>
                    <X size={24} className="btn-close" weight="regular" onClick={() => setStatus(!status)}/>
                </div>
                <InfoBook>
                    <Image src={image} alt="" width={150} height={210} />
                    <Details>
                        <Title>
                            <h3>{book.name}</h3>
                            <span>{book.author}</span>
                        </Title>
                        <AssessmentScore>
                            <RatingStars rating={5} size="lg" />
                            <span>
                                {rating && rating.length > 0 && rating.length} 
                                {rating && rating.length > 1 ? "avaliações" : "avaliação"}
                            </span>
                        </AssessmentScore>
                    </Details>
                </InfoBook>
                <Divider />
                <FooterInfoBook>
                    <div>
                        <span>
                            <BookmarkSimple size={24} color="#50B2C0" />
                        </span>
                        <div>
                            <h5>Categoria</h5>
                            {books && books.map((category, i) => {
                                return(
                                    <span key={category.id}>
                                       {i > 0 && " | "} {category.name} 
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <span>
                            <BookOpen size={24} color="#50B2C0" />
                        </span>
                        <div>
                            <h5>Páginas</h5>
                            <p>{book.total_pages}</p>
                        </div>
                    </div>
                </FooterInfoBook>
            </ContainerBookDetails>
            <Assessment>
                <div>
                    <p>Avaliações</p>
                    <button type="button" onClick={() => handleOpenTestimonial()}>Avaliar</button>
                </div>
                {openTestimonial && (
                <Assess>
                    <HeaderReview>
                        <Avatar>
                            <div>
                                <Image src="/images/avatar.jpg" alt="" width={40} height={40} />
                            </div>
                            <Reviewer>
                                <p></p>
                            </Reviewer>
                        </Avatar>
                        <div>
                            <RatingStars size="lg" rating={currentRate} setRating={setCurrentRate} /> 
                        </div>
                    </HeaderReview>
                    <form onSubmit={handleSubmit(handleSendTestimonial)}>
                        <TextAssess>
                            <textarea 
                                id="comment" 
                                rows={4} 
                                placeholder="Escreva sua avaliação" 
                                maxLength={300}
                                {...register('description')}    
                                onChange={(e) => setCountCharAssess(e.target.value)}
                            />
                            <span className="counterAssess">{lengthComment}/300</span>
                        </TextAssess>

                        <GroupButtonAssess>
                            <button type="button" onClick={() => handleResetTestimonial()}>
                                <X size={16} color="#8381D9" />
                            </button>
                            <button type="submit">
                                <Check size={16} color="#50B2C0" />
                            </button>
                        </GroupButtonAssess>
                    </form>
                </Assess>
                )}
                {ratings.map((rating) => {
                    return (
                        <Review key={rating.id}>
                            <HeaderReview>
                                <Avatar>
                                    <div>
                                        <Image src="/images/avatar.jpg" alt="" width={40} height={40} />
                                    </div>
                                    <Reviewer>
                                        <p>Jaxson Dias</p>
                                        <span>Hoje</span>
                                    </Reviewer>
                                </Avatar>
                                <RatingStars rating={rating.rate} />
                            </HeaderReview>
                            <Note>
                                {rating.description}
                            </Note>
                        </Review>
                    )
                })}
            </Assessment>
        </ReviewBook>
    )
}