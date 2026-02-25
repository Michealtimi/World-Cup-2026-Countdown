import { NextResponse } from 'next/server';

export async function GET() {
	const host = 'worldcup2026.example.com'; // Replace with your actual domain if needed
	const key = '4798c91016c0443f966866725d5f3203';
	const keyLocation = `https://${host}/4798c91016c0443f966866725d5f3203.txt`;
	const urlList = [
		`https://${host}/`,
		`https://${host}/tickets`,
		// Add other main pages as needed
	];

	const payload = {
		host,
		key,
		keyLocation,
		urlList,
	};

	try {
		const response = await fetch('https://api.indexnow.org/indexnow', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			body: JSON.stringify(payload),
		});

		if (response.ok) {
			return NextResponse.json({
				message: 'Signal Sent Successfully! 🚀',
			});
		} else {
			return NextResponse.json(
				{ message: 'Signal Failed', status: response.status },
				{ status: 400 },
			);
		}
	} catch (error) {
		return NextResponse.json({ error: 'Network Error' }, { status: 500 });
	}
}
// (Removed duplicate/broken code below)
