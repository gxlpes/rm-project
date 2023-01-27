import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from "../../../styles/pages/List.module.css"
import { CharacterCard } from '../../types/pages/CharacterCardInterface'
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"
import { BiLinkExternal } from "react-icons/bi"
import { useState } from 'react'

const CharacterCard = ({ character }: CharacterCard) => {
    const router = useRouter();
    const [idsToSave, setIdsToSave] = useState<any>([]);
    console.log(idsToSave);

    return (
        <li key={character.id} className={styles.card}>
            <Image onClick={() => router.push(`/character/${character.id}`)} src={character.image} alt={`${character.name}-image`} width={250} height={350} />
            <div className={styles.container}>
                <div className={styles.icons}>
                    <span onClick={idsToSave?.includes(character.id) ? () => setIdsToSave((prev: any) => prev.filter((id: any) => { return id !== character.id })) : () => setIdsToSave((prev: any) => [...prev, character.id])}>
                        {idsToSave?.includes(character.id) ? <BsBookmarkFill size={20} /> : <BsBookmark size={20} />}
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
        </li>
    )
}

export default CharacterCard