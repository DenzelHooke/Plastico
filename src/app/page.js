import AboutUs from './components/AboutUs';
import Benefiets from './components/Benefiets';
import MainHero from './components/MainHero';
import ProductSpecs from './components/ProductSpecs';
import UserInform from './components/UserInform';
import Workforce from './components/Workforce';
import Stats from './components/Stats';
import Features from './components/Features';

export default function Home() {
  return (
    <main>
      <MainHero />
      <UserInform />
      <ProductSpecs />
      <Stats />
      {/* <Benefiets /> */}
      <Features />
      {/* <AboutUs />
      <Workforce /> */}
    </main>
  );
}
