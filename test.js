/*
Реализовать функционал для получения данных пользователя в нужном формате,
в зависимости от роли пользователя.
Данные пользователя будут располагаться http://fake-url.ru/:userId.
На вход приходит id пользователя в виде строки.
Функция должна возвратить данные пользователя в зависимости от роли.
Пока ролей только 2: admin, user, но планируется добавление других ролей
формата соответственно тоже 2:
для admin - name, role, password
для user - name, role
*/

import axios from "axios";

export const get = async (id_user) => {
	const { data } = await axios.get(`http://fake-url.ru/${id_user}`);

	let data1;
	switch (true) {
		case data.role === "admin": {
			data1 = {
				name: data.name,
				role: data.role,
				password: data.password,
			};
		}
		case data.role === "user": {
			data1 = {
				name: data.name,
				role: data.role,
			};
		}
	}
  return data1;
};