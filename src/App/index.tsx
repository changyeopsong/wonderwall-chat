import React, {createContext, useCallback, useEffect, useState} from 'react';
import {Container, Main} from './styles';
import {Redirect, Route, Switch} from 'react-router';
import loadable from '@loadable/component';
import {StoreCategoriesVO} from './_vo/storeCategories.vo';
import {AppContext as AppContextType} from './types';
import {getStoreCategories} from '_api/Product';
import {captureException} from '@sentry/react';
import {ApiError, DuplicateLoginError} from '_utils/Api';

const Wonderwall = loadable(() => import('_pages/_wonderwall'));

export const initAppContext: () => AppContextType = () => ({
    productCategories: [],
    alert: () => {},
    onApiError: () => {}
});

export const AppContext = createContext<AppContextType>(initAppContext());

function App() {
    const [productCategories, setProductCategories] = useState<StoreCategoriesVO[]>([]);

    useEffect(() => {
        getStoreCategories()
            .then(categories => categories.map(StoreCategoriesVO.from))
            .then(setProductCategories);
    }, []);

    const onApiError = useCallback((err: Error) => {
        console.error(err);

        if (err instanceof DuplicateLoginError) return;

        if ([ApiError].some(error => err instanceof error)) {
            alert(err.message);
        } else {
            alert('error');
            captureException(err, {
                tags: {
                    type: 'ApiError'
                }
            });
        }
    }, []);

    return (
        <AppContext.Provider
            value={{
                productCategories,
                alert,
                onApiError
            }}>
            <Container>
                <Main>
                    <Switch>
                        <Redirect path='/' to='/wonderwall' exact />
                        <Route component={Wonderwall} path={'/wonderwall'}></Route>
                    </Switch>
                </Main>
            </Container>
        </AppContext.Provider>
    );
}

export default App;
