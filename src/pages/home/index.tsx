import { CaretRight } from "@phosphor-icons/react";

import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { Book } from "@/components/Book";
import { BestBook } from "@/components/BestBook";

import { BestBooks, Books, ContainerMain, ContainerVisitor, ContentVisitor } from "./styles";

export default function Home() {
    return (
        <ContainerVisitor>
            <SideBar user="visitante" />
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