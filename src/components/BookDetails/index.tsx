'use client'

import { BookOpen, BookmarkSimple } from "@phosphor-icons/react";
import { Assessment, AssessmentScore, ContainerBookDetails, Details, Divider, FooterInfoBook, HeaderReview, InfoBook, Note, Review, ReviewBook, Title } from "./styles";
import Link from "next/link";
import { Avatar, Reviewer } from "../Book/styles";
import Image from "next/image";
import * as Portal from '@radix-ui/react-portal';


interface BookDetailsProps {
    status: boolean
}

export function BookDetails({status}: BookDetailsProps ) {
    return (
        <>
            {status && (
                    <ReviewBook>
                        <ContainerBookDetails>
                            <InfoBook>
                                <Image src="/images/book.png" alt="" width={171} height={242} />
                                <Details>
                                    <Title>
                                        <h3>14 Hábitos de Desenvolvedores Altamente Produtivos</h3>
                                        <span>Zeno Rocha</span>
                                    </Title>
                                    <AssessmentScore>
                                        <Image src="/images/rating.png" alt="" width={116} height={20} />
                                        <span>3 avaliações</span>
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
                                        <span>Computação, educação</span>
                                    </div>
                                </div>
                                <div>
                                    <span>
                                        <BookOpen size={24} color="#50B2C0" />
                                    </span>
                                    <div>
                                        <h5>Páginas</h5>
                                        <p>160</p>
                                    </div>
                                </div>
                            </FooterInfoBook>
                        </ContainerBookDetails>
                        <Assessment>
                            <p>Avaliações <Link href="">Avaliar</Link></p>
                            <Review>
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
                                    <Image src="/images/rating.png" alt="" width={96} height={16} />
                                </HeaderReview>
                                <Note>
                                    Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget
                                </Note>
                            </Review>
                            <Review>
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
                                    <Image src="/images/rating.png" alt="" width={96} height={16} />
                                </HeaderReview>
                                <Note>
                                    Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget
                                </Note>
                            </Review>
                        </Assessment>
                    </ReviewBook>
                
            )}
        </>
    )
}