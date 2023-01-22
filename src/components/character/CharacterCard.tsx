import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from "../../../styles/pages/List.module.css"
import { CharacterCard } from '../../types/pages/CharacterCardInterface'

const CharacterCard = ({ character }: CharacterCard) => {
    const router = useRouter();
    return (
        <li key={character.id} className={styles.card} onClick={() => router.push(`/character/${character.id}`)}>
            <Image src={character.image} alt={`${character.name}-image`} width={250} height={350} />
            <div className={styles.container}>
                <h4>{character.name}</h4>
                <p>Species - {character.species}</p>
                <p>Origin - {character.origin.name}</p>
                <p>Last seen in E{String(character.episode).split("/").pop()}</p>
            </div>
        </li>
    )
}

export default CharacterCard