import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { ContainerMain } from "../visitor/styles";
import { ContainerProfile, ContentBook, ContentBooks, ContentProfile, Divider, HeaderBook, InfoBook, InfoBooks, InfoProfile, InfoUser, Note } from "./styles";
import { BookOpen, BookmarkSimple, Books, MagnifyingGlass, UserList } from "@phosphor-icons/react";
import Image from "next/image";
import { RatingStars } from "@/components/RatingStars";
import { Avatar } from "@/components/Book/styles";


export default function Profile() {
    return (
        <ContainerProfile>
            <SideBar />
            <ContainerMain>
                <Header />
                <form>
                    <input type="text" placeholder="Buscar livro ou autor"/>
                    <button type="submit">
                        <MagnifyingGlass size={16} color="#303F73"/>
                    </button>
                </form>
                <ContentProfile>
                    <ContentBooks>
                        <ContentBook>
                            <HeaderBook>
                                <Image src="/images/book.png" alt="" width={98} height={134} />
                                <InfoBook>
                                    <div>
                                        <h3>Entendendo Algoritmos</h3>
                                        <span>Aditya Bhargava</span>
                                    </div>
                                    <RatingStars rating={5} />
                                </InfoBook>
                            </HeaderBook>
                            <Note>
                                Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.
                                Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque.
                            </Note>
                        </ContentBook>
                        <ContentBook>
                            <HeaderBook>
                                <Image src="/images/book.png" alt="" width={98} height={134} />
                                <InfoBook>
                                    <div>
                                        <h3>Entendendo Algoritmos</h3>
                                        <span>Aditya Bhargava</span>
                                    </div>
                                    <RatingStars rating={5} />
                                </InfoBook>
                            </HeaderBook>
                            <Note>
                                Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.
                                Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque.
                            </Note>
                        </ContentBook>
                        <ContentBook>
                            <HeaderBook>
                                <Image src="/images/book.png" alt="" width={98} height={134} />
                                <InfoBook>
                                    <div>
                                        <h3>Entendendo Algoritmos</h3>
                                        <span>Aditya Bhargava</span>
                                    </div>
                                    <RatingStars rating={5} />
                                </InfoBook>
                            </HeaderBook>
                            <Note>
                                Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.
                                Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque.
                            </Note>
                        </ContentBook>
                        <ContentBook>
                            <HeaderBook>
                                <Image src="/images/book.png" alt="" width={98} height={134} />
                                <InfoBook>
                                    <div>
                                        <h3>Entendendo Algoritmos</h3>
                                        <span>Aditya Bhargava</span>
                                    </div>
                                    <RatingStars rating={5} />
                                </InfoBook>
                            </HeaderBook>
                            <Note>
                                Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.
                                Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque.
                            </Note>
                        </ContentBook>
                        <ContentBook>
                            <HeaderBook>
                                <Image src="/images/book.png" alt="" width={98} height={134} />
                                <InfoBook>
                                    <div>
                                        <h3>Entendendo Algoritmos</h3>
                                        <span>Aditya Bhargava</span>
                                    </div>
                                    <RatingStars rating={5} />
                                </InfoBook>
                            </HeaderBook>
                            <Note>
                                Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.
                                Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque.
                            </Note>
                        </ContentBook>
                    </ContentBooks>
                    <InfoProfile>
                        <InfoUser>
                            <Avatar>
                                <div>
                                    <Image src="/images/avatar.jpg" alt="" width={72} height={72} />
                                </div>
                            </Avatar>
                            <h3>Cristofer Rosser</h3>
                            <span>membro desde 2019</span>
                        </InfoUser>
                        <Divider />
                        <InfoBooks>
                            <div>
                                <span>
                                    <BookOpen size={24} color="#50B2C0" />
                                </span>
                                <div>
                                    <h5>3888</h5>
                                    <span>Páginas Lidas</span>
                                </div>
                            </div>
                            <div>
                                <span>
                                    <Books size={24} color="#50B2C0" />
                                </span>
                                <div>
                                    <h5>3888</h5>
                                    <span>Páginas Lidas</span>
                                </div>
                            </div>
                            <div>
                                <span>
                                    <UserList size={24} color="#50B2C0" />
                                </span>
                                <div>
                                    <h5>3888</h5>
                                    <span>Páginas Lidas</span>
                                </div>
                            </div>
                            <div>
                                <span>
                                    <BookmarkSimple size={24} color="#50B2C0" />
                                </span>
                                <div>
                                    <h5>3888</h5>
                                    <span>Páginas Lidas</span>
                                </div>
                            </div>
                        </InfoBooks>
                    </InfoProfile>
                </ContentProfile>
            </ContainerMain>
        </ContainerProfile>
    )
}