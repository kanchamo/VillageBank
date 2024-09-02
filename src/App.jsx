/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import LoginPage from './LoginPages/LoginPage';
import Home from './home/Home';

function App() {
    const { isSignedIn, isLoaded } = useAuth();

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <Routes>
                <Route 
                    path="/" 
                    element={
                        isSignedIn ? (
                            <Navigate to="/home" replace />
                        ) : (
                            <LoginPage />
                        )
                    } 
                />
                <Route 
                    path="/home" 
                    element={
                        isSignedIn ? <Home /> : <Navigate to="/" replace />
                    } 
                />
            </Routes>
        </Router>
    );
}

export default App;
