import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductDetailPage from "./pages/ProductDetails";

function App() {
	return (
		<BrowserRouter>
			{/* <nav>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
			</nav> */}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/product/:id' element={<ProductDetailPage />} />
			</Routes>

		</BrowserRouter>
	);
}

export default App;
