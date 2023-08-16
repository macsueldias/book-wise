import Image from "next/image";

import { RatingStars } from "../RatingStars";
import { Book, InfoBook } from "./styles";

interface BookExploreProps {
    id: string
    title: string
    author: string
    image_url: string
    // rate: number
}

export function BookExplore({id, title, author, image_url}: BookExploreProps) {

    const image = image_url.replace("public/", "http://localhost:3000/")

    return (
        <Book>
           <Image src={image} alt="" width={64} height={94} quality={100}/>
            <InfoBook>
                <p>
                    {title}  
                    <span>{author}</span>
                </p>
                {/* <RatingStars rating={rate} /> */}
            </InfoBook>
        </Book>
    )
}