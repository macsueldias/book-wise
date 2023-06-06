import { BookExplore } from "@/components/BookExplore";
import { SideBar } from "@/components/SideBar";
import { Header } from "@/components/Header";
import { ContainerMain, ContainerVisitor } from "../visitor/styles";
import { Button, ContainerExplore, OptionsSearch } from "./styles";
import { BookDetails } from "@/components/BookDetails";
import { useState } from "react";
import Link from "next/link";

export default function Explore() {
    const [openDetails, setOpenDetails] = useState(false)
    return (
        <>
            <ContainerVisitor opacity={openDetails}>
                <SideBar />
                <ContainerMain >
                    <Header />
                    <ContainerExplore>
                        <OptionsSearch>
                            <Button active={true}>Tudo</Button>
                            <Button>Computação</Button>
                            <Button>Educação</Button>
                            <Button>Fantasia</Button>
                            <Button>Ficção Cientifica</Button>
                            <Button>Horror</Button>
                            <Button>HQs</Button>
                            <Button>Suspense</Button>
                        </OptionsSearch>
                        <button type="button" onClick={() => setOpenDetails(!openDetails)}>
                            <BookExplore  />
                        </button>
                        <BookExplore />
                        <BookExplore />
                        <BookExplore />
                        <BookExplore />
                        <BookExplore />
                        <BookExplore />
                        <BookExplore />
                        <BookExplore />
                    </ContainerExplore>
                </ContainerMain>
            </ContainerVisitor>
            <BookDetails status={openDetails} />
        </>
    )
}