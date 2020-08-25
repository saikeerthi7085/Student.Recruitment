import React, { Component } from "react";
import Header from "./Header";
import University from "./University/University";
import Recuriter from "./Recruiter/Recruiter";
import Student from "./Student/Student";
import Contact from "./Contact";
import Homebanner from "./Homebanner";

import "bootstrap/dist/css/bootstrap.min.css";
export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Homebanner />
        <University />
        <Recuriter />
        <Student />
        <Contact />
      </div>
    );
  }
}

export default App;
