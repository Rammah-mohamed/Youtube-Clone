import { Link } from "react-router-dom";
import {
	demoChannelTitle,
	demoThumbnailUrl,
	demoVideoUrl,
	demoVideoTitle,
} from "../../utils/constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./VideoCard.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

export default function VideoCard(props) {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<div className='videoCard'>
			<Link
				to={props?.video?.videoId ? `/video/${props.video.videoId}` : demoVideoUrl}
				style={{ textDecoration: "none" }}>
				<div className='image'>
					<img
						src={
							props.video?.thumbnail[3]?.url &&
							props.video?.thumbnail[2]?.url &&
							props.video?.thumbnail[1]?.url &&
							props.video?.thumbnail[0]?.url === ""
								? demoThumbnailUrl
								: props.video?.thumbnail[3]?.url ||
								  props.video?.thumbnail[2]?.url ||
								  props.video?.thumbnail[1]?.url ||
								  props.video?.thumbnail[0]?.url
						}
						alt='thumbnails'
					/>
				</div>
				<div className='details'>
					<h3 style={{ color: darkMode && "#fff" }}>{props.video?.title || demoVideoTitle}</h3>
					<div className='channel'>
						<h5 style={{ color: darkMode && "#fff" }}>
							{props.video?.channelTitle || demoChannelTitle}
						</h5>
						<CheckCircleIcon className='icon' />
					</div>
				</div>
			</Link>
		</div>
	);
}
