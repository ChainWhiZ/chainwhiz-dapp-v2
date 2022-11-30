import { useState } from 'react';
import styles from './category.module.scss';
import { categories } from 'data';

export default function Category() {

    const [tag, setTag] = useState('All');

    return (
        <div className={styles.category__wrapper}>
            <div className={styles.category}>
                {categories.map((category, index) => (
                    <div className={tag === category ? styles.category__select : styles.category__text} key={index} onClick={()=>setTag(category)}>
                        {category}   
                    </div>
                ))}
            </div>
        </div>
    )
}