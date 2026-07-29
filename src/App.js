import { HashRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Layout from "./components/Layout";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import './App.css';
function App() {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<About />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="services" element={<Services />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}
export default App;