import Categories from "./section/categories/categories";
import Herobanner from "./section/hero-banner/hero-banner";
import Introduction from "./section/introduction/introduction";
import Mutlidevice from "./section/mutlidevice/multidevice";
import Tableau from "./section/tableau/tableau";

export default function Home() {
  return (
    <>
      <Herobanner />
      <Introduction />
      <Categories />
      <Mutlidevice />
      <Tableau />
    </>
  );
}
