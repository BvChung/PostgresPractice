import { database } from "../config/db.server";

type User = {
	firstName: string;
	lastName: string;
	password: string;
};

type Backpack = {
	item: string;
};

async function seed() {
	await Promise.all(
		getUsers().map((user) => {
			return database.user.create({
				data: {
					firstName: user.firstName,
					lastName: user.lastName,
					password: user.password,
				},
			});
		})
	);
}

seed();

function getUsers(): User[] {
	return [
		{
			firstName: "Brandon",
			lastName: "Chung",
			password: "test",
		},
		{
			firstName: "John",
			lastName: "Doe",
			password: "test",
		},
		{
			firstName: "James",
			lastName: "Doe",
			password: "test",
		},
	];
}

function getBackpack(): Backpack[] {
	return [
		{
			item: "pencil",
		},
		{
			item: "shoes",
		},
	];
}
