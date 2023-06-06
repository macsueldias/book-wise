import Image from "next/image";
import { InfoBook } from "../Book/styles";
import { ContainerBestBook } from "./styles";

export function BestBook() {
    return (
        <ContainerBestBook>
            <Image src="/images/book.png" alt="" width={64} height={94} />
            <InfoBook>
                <p>A revolução dos bichos</p>
                <span>George Orwell</span>
                <Image src="/images/rating.png" alt="" width={96} height={16} />
            </InfoBook>
        </ContainerBestBook>
    )
}