import styles from "./InfoItem.module.css";

type CardProps = {
    title: string;
    description: string;
}

export default function InfoItem(props: CardProps) {
    return (
        <>
            <div className={styles["language-importance-item"]}>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </>
    );
}
