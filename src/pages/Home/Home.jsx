import { useState, useEffect, useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Videos from "../../components/Videos/Videos";
import "./Home.scss";
import { fetchFromApi } from "../../utils/fetchFromApi";
import { DarkModeContext } from "../../context/darkModeContext";

export default function Home(props) {
	const { darkMode } = useContext(DarkModeContext);
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		fetchFromApi(`search?query=${props.selectedCategory}&type=video&geo=US&lang=en`).then(
			(result) => setVideos(result.data)
		);
	}, [props.selectedCategory]);

	return (
		<div className='home'>
			<Sidebar
				selectedCategory={props.selectedCategory}
				setSelectedCategory={props.setSelectedCategory}
				showSidebar={props.showSidebar}
				darkTheme={darkMode}
			/>
			<Videos videos={videos} selectedCategory={props.selectedCategory} />
		</div>
	);
}
