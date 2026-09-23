import React from "react";
import Navbar from "./components/layout/Navbar";

import Footer from "./components/layout/Footer";

import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
