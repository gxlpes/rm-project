import Image from 'next/image'
import { useRouter } from 'next/router'
import { BiLinkExternal } from "react-icons/bi"
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"
import styles from "../../../styles/components/characters/Characters.module.css"
import { saveCharacter } from '../../lib/characters'
import { CharacterCard } from '../../types/pages/CharacterCardInterface'

const CharacterCard = ({ character, saved }: CharacterCard) => {
    const router = useRouter();

    return (
        <li key={character.id} className={styles.card}>
            <Image onClick={() => router.push(`/character/${character.id}`)} src={character.image} alt={`${character.name}-image`} width={450} height={800} />
            <div className={styles.container}>
                <div className={styles.icons}>
                    <span onClick={() => saveCharacter(character.id)}>
                        {saved ? <BsBookmarkFill size={20} /> : <BsBookmark size={20} />}
                    </span>
                    <span>
                        <BiLinkExternal size={20} onClick={() => router.push(`/character/${character.id}`)} />
                    </span>
                </div>
                <div className={styles.text}>
                    <h4>{character.name}</h4>
                    <p>Species - {character.species}</p>
                    <p>Origin - {character.origin.name}</p>
                    <p>Last seen in E{String(character.episode).split("/").pop()}</p>
                </div>
            </div>
        </li >
    )
}

export default CharacterCard