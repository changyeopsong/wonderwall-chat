import React from 'react';
import {Container, Main} from './styles';
import {Route, Switch} from 'react-router';
import loadable from '@loadable/component';

import {Path} from 'Constants';

const Home = loadable(() => import('_pages/Home'));

function App() {
    return (
        <Container>
            <Main>
                <Switch>
                    <Route component={Home} path={Path.Home} exact></Route>
                </Switch>
            </Main>
        </Container>
    );
}

export default App;
