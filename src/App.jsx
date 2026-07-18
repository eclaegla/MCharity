import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Proposal from "./pages/Proposal";
import Donate from "./pages/Donate";
import {ToastContainer} from "react-toastify";
/*

import Support from "./pages/Support";
import Programs from "./pages/Programs";
import Stories from "./pages/Stories";
import Resources from "./pages/Resources";
import Proposal from "./pages/Proposal";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
*/
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/proposal" element={<Proposal />} />
           <Route path="/donate" element={<Donate />} />
          {/* <Route path="/support" element={<Support />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} /> */}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;