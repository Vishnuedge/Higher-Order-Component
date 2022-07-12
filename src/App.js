// import ComponentOne from "./components/ComponentOne";
// import ComponentThree from "./components/ComponentThree";
// import ComponentTwo from "./components/ComponentTwo";

import CategoryJewellory from "./components/categoryJewelery";
import CategoryMenClothing from './components/categoryMenClothing'
import CategoryWomenClothing from './components/categoryWomenClothing'
import CategoryElectronics from "./components/categoryElectronics";


function App() {
  return (
    <>
      {/* <ComponentOne  />
      <ComponentTwo />
      <ComponentThree /> */}
      <CategoryJewellory />
      <CategoryElectronics />
      <CategoryMenClothing />
      <CategoryWomenClothing />
    </>
  );
}

export default App;
