"use client"

import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { BestBooks, Books, ContainerMain, ContainerVisitor, ContentVisitor } from "./styles";
import { Book } from "@/components/Book";
import { CaretRight } from "@phosphor-icons/react";
import { BestBook } from "@/components/BestBook";

export default function Visitor() {
    return (
        <ContainerVisitor>
            <SideBar />
            <ContainerMain>
                <Header />
                <ContentVisitor>
                    <Books>
                        <p>Avaliações mais recentes</p>
                        <Book />
                        <Book />
                        <Book />
                        <Book />
                        <Book />
                        <Book />
                    </Books>
                    <BestBooks>
                        <p>Livros populares 
                            <a href="#">
                                Ver todos <CaretRight size={16} color="#8381D9"/>
                            </a>
                        </p>
                        <BestBook />
                        <BestBook />
                        <BestBook />
                        <BestBook />
                        <BestBook />
                        <BestBook />
                    </BestBooks>
                </ContentVisitor>
            </ContainerMain>
        </ContainerVisitor>
    )
}