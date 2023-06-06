'use client'
import Link from "next/link";
import { ContainerSidebar, GroupMenu, ItemMenu, Logo } from "./styles";
import { SignOut, Binoculars, ChartLineUp } from "@phosphor-icons/react";

export function SideBar() {
    return (
            <ContainerSidebar>
                <Logo src="/logo.svg" alt="Logotipo Book Wise" width={128} height={32}/>
                <GroupMenu>
                    <Link href="#" aria-checked>
                        <ItemMenu>
                        <ChartLineUp size={24} weight="regular" /> Inicio        
                        </ItemMenu>
                    </Link>
                    <Link href="#">
                        <ItemMenu>
                        <Binoculars size={24} weight="regular" />Explorar
                        </ItemMenu>
                    </Link>
                </GroupMenu>
                <div>Fazer Login <SignOut size={24} weight="regular" color="#50B2C0" /></div>
        </ContainerSidebar>
    )
}