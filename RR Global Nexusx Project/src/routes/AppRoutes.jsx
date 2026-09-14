import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Export from "../pages/Export";
import Import from "../pages/Import";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Export */}
          <Route path="/export" element={<Export />} />

          {/* Dynamic Export Product Page */}
          <Route
            path="/export/:slug"
            element={<ProductDetails />}
          />

          {/* Import */}
          <Route path="/import" element={<Import />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}