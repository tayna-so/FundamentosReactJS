import { HandsClapping, TrashSimple } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/tayna-so.png" />

            <div className={styles.commentBox}>
                 <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Tayna Sousa</strong>
                            <time title='11 de Maio às 08:13h' dateTime="2023-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <TrashSimple size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabens!</p>
                 </div>

                <footer>
                    <button>
                        <HandsClapping />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}