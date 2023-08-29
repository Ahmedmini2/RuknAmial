import { Routes, Route, Navigate, BrowserRouter as Router, } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import { PrivacyPolicy, TermsandConditions } from "./pages";

function App() {
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 ">
        <Navbar routes={routes} />
      </div>
      
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-and-conditions" element={<TermsandConditions/>} />
        <Route path="/blog/:id" element={<BlogPost/>} />
      </Routes>
     
    </>
  );
}

export default App;
