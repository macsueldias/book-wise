import { GetServerSideProps } from "next";
import {useState} from 'react'
import Image from "next/image";
import { getServerSession } from "next-auth";
import { BookOpen, BookmarkSimple, Books, MagnifyingGlass, UserList } from "@phosphor-icons/react";
import { compareAsc, format, parse } from 'date-fns'

import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { RatingStars } from "@/components/RatingStars";
import { Avatar } from "@/components/Book/styles";

import { buildNextAuthOptions } from "../api/auth/[...nextauth]";

import { ContainerMain } from "../home/styles";
import { ContainerProfile, ContentBook, ContentBooks, ContentProfile, Divider, HeaderBook, InfoBook, InfoBooks, InfoProfile, InfoUser, Note } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { parseCookies } from "nookies";

interface UserProps {
    avatar_url: string
    created_at: string
    email: string
    id: string
    name: string
    username: string | null
}


export default function Profile() {
    const [user, setUser] = useState<UserProps>({} as UserProps)
    const [data, setData] = useState('')

    const cookies = parseCookies()
    const id = cookies['@ignitecall:userId']

    const { isLoading, error } = useQuery(['profile'], async () => {
        const {data} = await api.get("/profile", {
          params: {
            id,
          }
        });
        return data
    }, {
        enabled: !!user,
        onSuccess(data) {
            setUser(data)
            setData(data.created_at)
        }
    })



    return (
        <ContainerProfile>
            <SideBar user="usuario"/>
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
                    {isLoading ? (<p>Carregando...</p>) : error ? (<p>Erro..</p>) : (
                        <InfoProfile>
                            <InfoUser>
                                <Avatar>
                                    <div>
                                        <Image src={user.avatar_url} alt="" width={72} height={72} />
                                    </div>
                                </Avatar>
                                <h3>{user.name}</h3>
                                <span>membro desde {new Date(user.created_at).getFullYear()}</span>
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
                    )}
                </ContentProfile>
            </ContainerMain>
        </ContainerProfile>
    )
}


// Apenas usuários logados poderão acessar a página
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const session = await getServerSession(
      req,
      res,
      buildNextAuthOptions(req, res),
    )
  
    if (!session) {
      return {
        redirect: {
          permanent: true,
          destination: '/',
        },
      }
    }
  
    return {
      props: {},
    }
  }