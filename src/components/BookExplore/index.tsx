import Image from "next/image";
import { Book, InfoBook } from "./styles";

export function BookExplore() {
    return (
        <Book>
           <Image src="/images/book.png" alt="" width={64} height={94} />
            <InfoBook>
                <p>A revolução dos bichos <span>George Orwell</span></p>
                <Image src="/images/rating.png" alt="" width={96} height={16} />
            </InfoBook>
        </Book>
    )
}