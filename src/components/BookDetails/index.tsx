'use client'

import { BookOpen, BookmarkSimple, Check, X } from "@phosphor-icons/react";
import { Assess, Assessment, AssessmentScore, ContainerBookDetails, Details, Divider, FooterInfoBook, GroupButtonAssess, HeaderReview, InfoBook, Note, Review, ReviewBook, Title } from "./styles";
import Link from "next/link";
import { Avatar, Reviewer } from "../Book/styles";
import Image from "next/image";
import * as Portal from '@radix-ui/react-portal';


interface BookDetailsProps {
    status: boolean
}

export function BookDetails({status}: BookDetailsProps ) {
    return (
        <ReviewBook active={status}>
            <ContainerBookDetails>
                <div>
                    <X size={24} weight="regular" />
                </div>
                <InfoBook>
                    <Image src="/images/book-details.png" alt="" width={150} height={210} />
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
                            <p>Computação, educação</p>
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
                <div>
                    <p>Avaliações</p>
                    <Link href="">Avaliar</Link>
                </div>
                <Assess>
                    <HeaderReview>
                        <Avatar>
                            <div>
                                <Image src="/images/avatar.jpg" alt="" width={40} height={40} />
                            </div>
                            <Reviewer>
                                <p>Jaxson Dias</p>
                            </Reviewer>
                        </Avatar>
                        <Image src="/images/rating-empty.png" alt="" width={152} height={28} />
                    </HeaderReview>
                    <textarea rows={10} placeholder="Escreva sua avaliação"/>
                    <GroupButtonAssess>
                        <button>
                            <X />
                        </button>
                        <button>
                            <Check />
                        </button>
                    </GroupButtonAssess>
                </Assess>
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
    )
}