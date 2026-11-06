import Header from "./component/header"
import Section1 from "./component/section1";
import Footer from "./component/Footer";
import { useState } from "react";

function App() {
  const [mood, setMood] = useState(true);

  return (
<>
      <Header
        mood={mood}
        setMood={setMood}
      />

      <Section1 mood={mood} />
      <Footer/>
</>
  );
}

export default App;