import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { SignOut, Binoculars, ChartLineUp, User, SignIn } from "@phosphor-icons/react";

import { ContainerSidebar, GroupMenu, ItemMenu, Logo } from "./styles";

interface SidebarProps {
    user: 'visitante' | 'usuario'
}

export function SideBar({user}: SidebarProps) {
    const router = useRouter()
    return (
        <ContainerSidebar>
            <Logo src="/logo.svg" alt="Logotipo Book Wise" width={128} height={32}/>
            <GroupMenu>
                <Link href="/" aria-checked>
                    <ItemMenu>
                    <ChartLineUp size={24} weight="regular" /> Inicio        
                    </ItemMenu>
                </Link>
                <Link href="/explore">
                    <ItemMenu>
                    <Binoculars size={24} weight="regular" />Explorar
                    </ItemMenu>
                </Link>
                <Link href="/profile">
                    <ItemMenu>
                    <User size={24} weight="regular" />Perfil
                    </ItemMenu>
                </Link>
            </GroupMenu>

            {
                user === 'visitante' ?
                <button type="button" onClick={() => router.push('/')}>
                    Fazer Login 
                    <SignIn size={24} weight="regular" color="#50B2C0" />
                </button>
                : 
                <button type="button" onClick={() => signOut()}>
                    Sair
                    <SignOut size={24} weight="regular" color="#50B2C0" />
                </button>
            }
        </ContainerSidebar>
    )
}