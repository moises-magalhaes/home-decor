import React from 'react'
import styles from "./carousel.module.css";

function CarouselContainer(props) {
    return <div className={styles.carousel}>{props.children}</div>;
}
export default CarouselContainer
