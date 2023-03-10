import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "./authSlice";

const UserRoute = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isError } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getMe());
	}, [dispatch]);

	useEffect(() => {
		if (isError) {
			navigate("/login");
		}
	}, [isError, navigate]);
	return props.children;
};
export default UserRoute;
