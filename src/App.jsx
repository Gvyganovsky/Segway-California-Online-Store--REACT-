import { LogoBlock } from './components/LogoBlock/LogoBlock';
import { Products } from './components/Products/Products';
import { Bicycles } from './components/Bicycles/Bicycles';
import { Miles } from './components/Miles/Miles';
import { PackingList } from './components/PackingList/PackingList';
import { Accessories } from './components/Accessories/Accessories';
import { ImpressiveFeatures } from './components/ImpressiveFeatures/ImpressiveFeatures';
import { KickMAX } from './components/KickMAX/KickMAX';
import { Battery } from './components/Battery/Battery';
import { DualBraking } from './components/DualBraking/DualBraking';
import { LedLight } from './components/Ledlight/LedLight';
import { FoldingMechanism } from './components/FoldingMechanism/FoldingMechanism';
import { RegenerativeBrake } from './components/RegenerativeBrake/RegenerativeBrake';
import { EasyCord } from './components/EasyCord/EasyCord ';
import { RidingModes } from './components/RidingModes/RidingModes';
import { Manual } from './components/Manual/Manual';

export default function App() {
  return (
    <section>
      <LogoBlock />
      <Products />
      <Bicycles />
      <Miles />
      <PackingList />
      <Accessories />
      <ImpressiveFeatures />
      <KickMAX />
      <Battery />
      <DualBraking />
      <LedLight />
      <FoldingMechanism />
      <RegenerativeBrake />
      <EasyCord />
      <RidingModes />
      <Manual />
    </section>
  );
}