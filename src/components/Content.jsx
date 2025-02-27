import styles from './Content.module.css'

export default function Content({title, author, description, genre, publicationYear}) {
    return (
        <div className={styles.book}>
            <h3 className={styles.title}>{title}</h3>
            <h4 className={styles.author}>By: {author}</h4>
            <p className={styles.genre}>{genre}</p>
            <p>{description}</p>
            <p>Published: {publicationYear}</p>
        </div>
    )
}