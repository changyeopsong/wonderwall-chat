import {AppContext} from 'App';
import React, {FC, useCallback, useContext, useMemo} from 'react';
import {RouteComponentProps} from 'react-router';
import {parse} from 'query-string';

import {ProductContainer, Categories, Category} from './styles';

const Product: FC<RouteComponentProps> = ({history, match}) => {
    const {productCategories} = useContext(AppContext);
    console.log(productCategories);

    const {category} = parse(location.search);

    const categoryQuery = useMemo(() => Number(category ?? 0), [category]);

    const onClickCategory = useCallback(
        (categoryId: number | string) => {
            history.push(`${match.path}?category=${categoryId}`);
        },
        [history, match.path]
    );

    return (
        <ProductContainer>
            <Categories>
                <Category className={category === 'all' ? '' : 'clickable'} onClick={() => onClickCategory('all')}>
                    All
                </Category>
                {productCategories.map(categoryItem => (
                    <Category key={categoryItem.id} className={categoryItem.id === categoryQuery ? '' : 'clickable'} onClick={() => onClickCategory(categoryItem.id)}>
                        {categoryItem.title}
                    </Category>
                ))}
            </Categories>
        </ProductContainer>
    );
};

export default Product;
