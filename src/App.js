import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactusPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./routes/Protected routes";

function App() {
  return (
    <div className="App">
      <>
        {/* <HomePage /> */}
        {/* <ProductPage /> */}
        {/* <ProductDetailPage /> */}
        {/* <AboutUsPage /> */}
        {/* <ContactUsPage /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:catId" element={< ProtectedRoute Component={ProductPage}  />} />
            <Route path="products/detail/:id" element={<ProtectedRoute Component={ProductDetailPage} />} />
            <Route path="/aboutus" element={< ProtectedRoute Component={AboutUsPage} />} />
            <Route path="/contactus" element={<ProtectedRoute Component={ContactUsPage} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>

      </>

    </div>
  );
}

export default App;
