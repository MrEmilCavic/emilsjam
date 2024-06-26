import React from 'react';
import App from './App.js';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/emilsJam' element={<App />}>
        <Route path='*' element={<App />} />
        <Route path='/emilsJam/callback' element={<App />} />
        </Route>
));

export default function App2() {
    return (
        <RouterProvider router={ router } />
    );
}
