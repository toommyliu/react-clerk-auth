import {
	SignInButton,
	SignOutButton,
	SignedIn,
	SignedOut,
	useSession,
} from "@clerk/clerk-react";

export default function App() {
	const { session } = useSession();

	return (
		<div className="flex justify-center">
			<div className="text-center w-1/2 mt-5">
				<h1 className="text-4xl font-bold text-center">
					React + Vite + TS
				</h1>

				<div className="mt-10">
					<SignedOut>
						<SignInButton />
						<p className="text-red-500 font-bold">
							You are not authenticated. Not good.
						</p>
					</SignedOut>

					<SignedIn>
						<SignOutButton />
						<div className="flex justify-center mt-5">
							<img
								src={session?.publicUserData.imageUrl}
								width={128}
								height={128}
							/>
						</div>
						<p className="font-bold mt-2">
							Hello {session?.user.fullName}!
						</p>
						<p className="text-green-500 font-bold">
							You are authenticated! Good job.
						</p>
					</SignedIn>
				</div>
			</div>
		</div>
	);
}
