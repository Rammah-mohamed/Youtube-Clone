import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import VideoDetails from "./pages/VideoDetails/VideoDetails";
import ChannelDetails from "./pages/ChannelDetails/ChannelDetails";
import Search from "./pages/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { DarkModeContext } from "./context/darkModeContext";

export default function App() {
	const [selectedCategory, setSelectedCategory] = useState("New");
	const [showSidebar, setShowSidebar] = useState(false);
	const { darkMode } = useContext(DarkModeContext);
	console.log("test");

	return (
		<div className={darkMode ? "app darkTheme" : "app"}>
			<BrowserRouter>
				<Navbar setShowSidebar={setShowSidebar} />
				<Routes>
					<Route
						path='/'
						exact
						element={
							<Home
								selectedCategory={selectedCategory}
								setSelectedCategory={setSelectedCategory}
								showSidebar={showSidebar}
							/>
						}
					/>
					<Route path='/video/:id' element={<VideoDetails />} />
					<Route path='/channel/:id' element={<ChannelDetails />} />
					<Route path='/search/:searchTerm' element={<Search />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
