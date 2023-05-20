import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
console.log( 'db_queries.js' );

async function main() {
	// ... you will write your Prisma Client queries here
	await prisma.user.create({
		data: {
			name: "Rich",
			email: "hello@prisma.com",
			messages: {
				create: {
					content: "Hey room, how's it going?",
				},
			},
		},
	});

	const allUsers = await prisma.user.findMany({
		include: {
			messages: true,
		},
	});
	console.dir(allUsers, { depth: null });
}

// main()
// 	.then(async () => {
// 		await prisma.$disconnect();
// 	})
// 	.catch(async (e) => {
// 		console.error(e);
// 		await prisma.$disconnect();
// 		process.exit(1);
// 	});


export async function createUser( {name, email} ) {

    console.log( `Attempting to create user for ${name} with email ${email}` );
    try{

        const user = await prisma.user.findUnique( {
            where: {
                email: email,
            }
        } );

        if( !user ){
            console.log( 'user not found', user );

            // ... you will write your Prisma Client queries here
            await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    isActivated: true,
                },
            });
        
            return {
                message: 'User does not exist. DB record created',
                userExists: false
            }
        }

        return {
            message: 'User already exists.',
            userExists: true
        }

    } catch (err) {
        console.log( 'findUnique user failed', err );
        return {message: 'Something went wrong.', userExists: null};
    }

}