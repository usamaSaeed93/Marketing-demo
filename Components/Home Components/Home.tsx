import Navbar from '../../Layout/Navbar'
import TopSection from './TopSection';
import EasyHiring from './EasyHiring';
import Background from './Background';
import Pricing from './Pricing';
import Footer from '@/Layout/Footer';
import React from "react";
export default function Home() {
    return (
      <>
        <div className="max-w-[2000px] m-auto relative">
          <div className="absolute left-0 right-0 lg:left-[5%] w-full lg:right-[5%] ">
            <Navbar />
          </div>
          <TopSection />
          <EasyHiring />
          <Background />
          <Pricing />
          <Footer />
        </div>
      </>
    );
  }