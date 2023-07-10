import Image from 'next/image'
import TopSection from '@/Components/Home Components/TopSection'
import EasyHiring from '@/Components/Home Components/EasyHiring'
import Experts from '@/Components/Home Components/Experts'
import TalentTab from '@/Components/Home Components/Talent Components/TalentTab'
import QualityTiles from '@/Components/Home Components/Talent Components/QualityTiles'
import OurTalent from '@/Components/Home Components/Talent Components/OurTalent'
import Writtings from '@/Components/Home Components/Getting Started/Writtings'
import arrow from '../Assets/Images/png/bigArrow.png'
import MatchedTopTalent from '@/Components/Home Components/Getting Started/MatchedTopTalent'
import Platform from '@/Components/Home Components/Getting Started/Platform'
import Initialize from '@/Components/Home Components/Getting Started/Initialize'
import Footer from '@/Layout/Footer'
import Table from '@/Components/Table Components/Table'
import Rough from '@/Rough'
export default function Home() {
  return (
    <>
    <div className='max-w-[2000px] m-auto'>
<TopSection />
<EasyHiring />
<Experts />
<OurTalent />
<Initialize />
<Footer /> 

 {/* <Rough />  */}
    </div>
    </>
  )
}
