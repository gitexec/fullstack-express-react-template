import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Test from './components/Test';
import { Layout } from './components/Layout';

export const Routes = () => <Layout>
        <BrowserRouter>
            <Route exact path ='/' component={Test} />
        </BrowserRouter>
      </Layout>;
