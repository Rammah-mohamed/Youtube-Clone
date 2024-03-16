import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import ToggleButton from "@mui/material/ToggleButton";
import { IconButton } from "@mui/material";
import "../../global.scss";
import "./Navbar.scss";
import { DarkModeContext } from "../../context/darkModeContext";

export default function Navbar(props) {
	const { darkMode, dispatch } = useContext(DarkModeContext);
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchTerm) {
			navigate(`/search/:${searchTerm}`);
		}
		setSearchTerm("");
	};

	const handleClick = (e) => {
		e.preventDefault();
		navigate(`/`);
	};

	return (
		<div className='navbar' style={{ backgroundColor: darkMode && "#000" }}>
			<div className='wrapper'>
				<div className='left'>
					<div className='hamburger' onClick={() => props.setShowSidebar((prev) => !prev)}>
						<span className='line' style={{ backgroundColor: darkMode && "#fff" }}></span>
						<span className='line' style={{ backgroundColor: darkMode && "#fff" }}></span>
						<span className='line' style={{ backgroundColor: darkMode && "#fff" }}></span>
					</div>
					<div className='logo' onClick={handleClick}>
						<YouTubeIcon className='icon' />
						<h2 style={{ color: darkMode && "#fff" }}>MY.Youtube</h2>
					</div>
				</div>
				<form className='right' onSubmit={handleSubmit}>
					<div className='leftContainer'>
						<input
							type='text'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							style={{
								color: darkMode && "#fff",
								caretColor: darkMode && "#fff",
							}}
						/>
						<IconButton className='button'>
							<SearchIcon className='icon' />
						</IconButton>
					</div>
					<div className='rightContainer'>
						<ToggleButton
							value={darkMode}
							onChange={() => dispatch({ type: "TOGGLE" })}
							selected={darkMode}
							className='toggle'
							style={{ color: darkMode && "#fff" }}>
							{darkMode ? "White Theme" : "Dark Theme"}
						</ToggleButton>
					</div>
				</form>
			</div>
		</div>
	);
}
