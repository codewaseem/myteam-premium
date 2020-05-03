import React, { useState } from "react";

import GlobalStyles from "./GlobalStyles";
import Header from "../Header";
import Footer from "../Footer";

type Props = {};

const DefaultLayout: React.FC<Props> = ({ children }) => {
  const [isNavOpen, setNavState] = useState(false);

  return (
    <div>
      <GlobalStyles />
      <Header
        isNavOpen={isNavOpen}
        onCloseNav={() => setNavState(false)}
        onOpenNav={() => setNavState(true)}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
