import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "../../components/Videos/Videos";
import { fetchFromApi } from "../../utils/fetchFromApi";
import "./Search.scss";

export default function Search() {
	const [videos, setVideos] = useState([]);
	const { searchTerm } = useParams();

	useEffect(() => {
		fetchFromApi(`search?query=${searchTerm}`).then((result) => setVideos(result.data));
	}, [searchTerm]);
	return (
		<div className='search'>
			<Videos videos={videos} searchTerm={searchTerm} />
		</div>
	);
}
