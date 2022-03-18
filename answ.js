import axios from "axios";

// либо это вообще в инстансе axios
const URL = "http://fake-url.ru";

const userFormatsByRole = {
	admin: ({ name, role, password }) => ({ name, role, password }),
	user: ({ name, role }) => ({ name, role }),
};

export const getUserData = async (id_user) => {
	const { data: userData } = await axios.get(`${URL}/${id_user}`);

	if (userFormatsByRole?.[userData.role]) {
		return userFormatsByRole[userData.role](userData);
	}
	throw new Error("Undexpected role: ", userData.role);
};
