 import styles from './banner.module.css';
 
 const Banner = (props) => {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            <span className={styles.title1}>Review</span>
            <span className={styles.title2}>Labs</span>
        </h1>
        <p className={styles.subTitle}>Discover what people think about all products!</p>
        <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button>
    </div>
    );
 };

 export default Banner