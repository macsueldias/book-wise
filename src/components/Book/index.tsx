import Image from "next/image";
import Link from "next/link";

import { 
    Avatar, 
    ContainerBook, 
    ContentBook, 
    DescriptionBook, 
    HeaderBook, 
    InfoBook, 
    Reviewer 
} from "./styles";

export function Book() {
    return (
        <ContainerBook>
            <HeaderBook>
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
            </HeaderBook>
            <ContentBook>
                <Image src="/images/book.png" alt="" width={108} height={152} />
                <InfoBook>
                    <p>O Hobbit</p>
                    <span>J.R.R. Tolkien</span>
                    <DescriptionBook>
                        Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh... <Link href="#">ver mais</Link>
                    </DescriptionBook>
                </InfoBook>
            </ContentBook>
        </ContainerBook>
    )
}