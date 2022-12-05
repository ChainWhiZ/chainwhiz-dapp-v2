import { useState } from 'react';
import { categories } from 'data';
import { CategoryWrapper, CategoryContent, CategorySelect, CategoryText } from './category.styled';

export default function Category() {

    const [tag, setTag] = useState('All');

    return (
        <CategoryWrapper>
            <CategoryContent>
                {categories.map((category, index) => {
                    return tag ===category ? <CategorySelect key={index} onClick={()=>setTag(category)}>{category}</CategorySelect> : <CategoryText key={index} onClick={()=>setTag(category)}>{category}</CategoryText>
                })}
            </CategoryContent>
        </CategoryWrapper>
    )
}