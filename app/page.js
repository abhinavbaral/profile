// pages/index.js
// import Head from 'next/head';
import React from 'react';
import ProfileSection from './components/ProfileSection';
import Header from './components/Header';


export default function Page() {
  return (
    <div>
      <Header/>
      <ProfileSection/>
    </div>
  );
}
