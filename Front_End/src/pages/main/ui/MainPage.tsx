import styles from './styles/MainPage.module.css'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <pre>
                &lt;VideoPlayer{'\n'}
                    ref="videoplayer"{'\n'}
                    preload={'{'}this.props.preload{'}\n'}
                    classes={'{'}this.props.classes{'}\n'}
                    videoID={'{'}this.props.videoID{'}\n'}
                    controls="controls"{'\n'}
                /&gt;</pre>
        </div>
    )
}