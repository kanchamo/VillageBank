/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import SubBody from '../components/SubBody';
import About from '../components/About';
import Footer from '../components/Footer';
import { UserButton } from '@clerk/clerk-react';




function LoginPage() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <UserButton/>
      <Navbar />
      <SubBody />
      <About />
      <Footer />
    </div>
  );
}

export default LoginPage;
