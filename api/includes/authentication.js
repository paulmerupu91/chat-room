import { createUser } from "./db_queries";
import jwt_decode from "jwt-decode";

export async function loginCheck(req, res) {
	let checkStatus;

	const { OAuth2Client } = require("google-auth-library");
	const client = new OAuth2Client(
		"329246443409-t7k2jd2n8vg7uc730uqsk8rr5630huj0.apps.googleusercontent.com"
	);
	async function verify() {
		const ticket = await client.verifyIdToken({
			idToken: req.body.credential,
			audience:
				"329246443409-t7k2jd2n8vg7uc730uqsk8rr5630huj0.apps.googleusercontent.com", // Specify the CLIENT_ID of the app that accesses the backend
			// Or, if multiple clients access the backend:
			//[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
		});
		let payload;
		payload = ticket.getPayload();
		const userid = payload["sub"];
	}

	try {
		verify().catch(console.error);
		console.log("body", req.body);

		const cred = req.body.credential;
		const data = jwt_decode(cred);
		console.log("decoded", data);
		try {
			checkStatus = await createUser({ email: data.email, name: data.name });
		} catch (err) {}

		console.log("checkStatus", checkStatus);
		res.json({
			email: data.email,
			name: data.name,
			picture: data.picture,
			credential: req.body.credential,
			checkStatus,
		});
	} catch (err) {
		console.log("err", err);
	} finally {
		console.log("User authentication process complete.");
	}
}
