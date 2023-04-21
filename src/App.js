import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Modal from "./components/UI/Modal";

function App() {
  const [showProject, setShowProject] = useState(false);

  const showProjectHandler = () => setShowProject(true);

  const closeProjectHandler = () => setShowProject(false);

  return (
    <Fragment>
      {/* <Modal /> */}
      <main>
        <Header />
        <Hero />
        <About />
        <Projects />
      </main>
    </Fragment>
  );
}

export default App;
