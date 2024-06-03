import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import ErrorPage from './pages/ErrorPage';
import { loader } from './assets/assets';
import { useState, useEffect } from 'react';

const App = () => {
	const [loading, setLoading] = useState(true);

	//implement a loading animation on loading
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2800);
	}, []);

	//condtions for loading animations on loading
	return loading ? (
		<div className="flex h-screen items-center justify-center">
			<img src={loader} alt={loader} className="animate-spin" />
		</div>
	) : (
		<div className="">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SharedLayout />}>
						<Route index element={<Home />} />
						<Route path="/destination" element={<Destination />} />
						<Route path="/crew" element={<Crew />} />
						<Route path="/technology" element={<Technology />} />
						<Route path="*" element={<ErrorPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default App;
