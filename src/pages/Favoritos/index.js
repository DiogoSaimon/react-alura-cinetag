import Card from "components/Card";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import Banner from "components/Banner";
import { useFavoritoContext } from "contextos/Favoritos";

const Favoritos = () => {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem="favoritos"></Banner>
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;