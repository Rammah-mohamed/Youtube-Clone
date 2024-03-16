import { useContext } from "react";
import { categories } from "../../utils/constants";
import "./Sidebar.scss";
import { DarkModeContext } from "../../context/darkModeContext";

function Sidebar(props) {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<div
			className='sidebar'
			style={{ display: props.showSidebar && "none", transition: "all 1s ease" }}>
			{categories.map((category, index) => (
				<button
					key={index}
					style={{ backgroundColor: props.selectedCategory === category.name && "red" }}
					onClick={() => props.setSelectedCategory(category.name)}>
					<span
						className='icon'
						style={{ color: props.selectedCategory === category.name && "#fff" }}>
						{category.icon}
					</span>
					<span
						className='name'
						style={{ color: props.selectedCategory === category.name || darkMode ? "#fff" : "" }}>
						{category.name}
					</span>
				</button>
			))}
		</div>
	);
}

export default Sidebar;
