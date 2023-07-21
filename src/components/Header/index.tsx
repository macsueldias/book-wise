import { ChartLineUp } from "@phosphor-icons/react"
import { ContainerHeader } from "./styles"

export function Header() {
    return (
        <ContainerHeader>
            <h2>
                Início 
                <ChartLineUp size={24} weight="regular" color="#50B2C0" />
            </h2>

            {/* <form>
                <input type="text" placeholder="Buscar livro ou autor"/>
                <button type="submit">
                    <MagnifyingGlass size={16} color="#303F73"/>
                </button>
            </form> */}
        </ContainerHeader>
    )
}