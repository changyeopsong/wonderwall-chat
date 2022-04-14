import React from 'react';
import {Route, Switch} from 'react-router';

import {Container, Main} from './styles';
import {Header} from '_components/Header';
import {Path} from 'Constants';
import {Home} from '_pages/Home';

function App() {
    return (
        <Container onContextMenu={e => e.preventDefault()} onDragStart={e => e.preventDefault()} onSelect={e => e.preventDefault()}>
            <Main>
                <Header />
                <Switch>
                    <Route component={Home} path={Path.Home} />
                </Switch>
            </Main>
        </Container>
    );
}

export default App;
