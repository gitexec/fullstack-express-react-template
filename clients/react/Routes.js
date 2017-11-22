import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import SampleComponent from './components/SampleComponent';
import { PrimaryLayout } from './components/Layout';
import { Profile } from './components/Profile';

export const Routes = () => <PrimaryLayout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ SampleComponent } />
            <Route path="/instructors" component={ Profile } />
          </Switch>
        </BrowserRouter>
</PrimaryLayout>;
