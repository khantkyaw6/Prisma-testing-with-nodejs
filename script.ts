import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

async function main() {
	const user = await prisma.user.create({
		data: {
			name: "Khant",
		},
	});
	console.log(user);
}

// main()
// 	.catch((e) => {
// 		console.error(e.message);
// 	})
// 	.finally(async () => {
// 		await prisma.$disconnect();
// 	});
