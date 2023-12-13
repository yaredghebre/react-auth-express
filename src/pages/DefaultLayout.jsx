import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DefaultLayout = () => {
  return (
    <div>
      <Header></Header>
      <main className="min-h-[50vh]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default DefaultLayout;
