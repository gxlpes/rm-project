import styles from "../styles/pages/About.module.css"

const About = () => {
    return (
        <main className={styles.container}>
            <h3>About</h3>
            <p className={styles.description}>Here, you can find information about all of your favorite characters from the show, including Rick, Morty, and all of their friends and foes. Not only can you browse through character profiles and learn more about their backstories and personalities, but you can also save your favorite characters to your own personal list. </p>
            <p className={styles.description}> This way, you can easily keep track of your favorite characters and refer back to their profiles whenever you want. Whether you&apos;re a die-hard fan of the show or just looking for some fun facts about your favorite characters, our website has something for everyone.</p>
        </main>
    )
}

export default About;