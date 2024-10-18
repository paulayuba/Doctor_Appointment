import React from 'react';
import Header from '../Commponent/Header';
import SpecialityMenu from '../Commponent/SpecialityMenu';
import TopDoctor from '../Commponent/TopDoctor';

const Home = () => {
  return (
    <div className="space-y-12">
      <Header />
      <SpecialityMenu />
      <TopDoctor />
    </div>
  );
}

export default Home;
