/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import SubBody from '../components/SubBody';
import About from '../components/About';
import Footer from '../components/Footer';
import { UserButton } from '@clerk/clerk-react';

function LoginPage() {
  return (
    <div>
      <Navbar />
      <SubBody />
      <About />
      <UserButton/>
      <Footer />
    </div>
  );
}

export default LoginPage;
