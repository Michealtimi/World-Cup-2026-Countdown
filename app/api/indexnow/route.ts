import { NextRequest, NextResponse } from 'next/server';

// IndexNow API endpoint for rapid search engine indexing
// Documentation: https://www.indexnow.org/

const INDEX_NOW_HOST = 'https://api.indexnow.org/indexnow';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'abc123key'; // Set in environment variables
const SITE_HOST = 'worldcup2026.example.com';
const KEY_LOCATION = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://worldcup2026.example.com'}/indexnow-key.txt`;

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'URL parameter is required' },
        { status: 400 }
      );
    }

    // Validate URL format
    try {
      new URL(url);
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    // Prepare IndexNow payload
    const payload = {
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: [url],
    };

    // Send to IndexNow API
    const response = await fetch(INDEX_NOW_HOST, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.status === 200) {
      return NextResponse.json(
        {
          success: true,
          message: `URL ${url} submitted to IndexNow successfully`,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: `IndexNow API returned status ${response.status}`,
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('[IndexNow Error]:', error);
    return NextResponse.json(
      { error: 'Failed to submit URL to IndexNow' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      message: 'IndexNow API endpoint. Use POST with { url: "..." } to submit URLs for indexing.',
      documentation: 'https://www.indexnow.org/',
    },
    { status: 200 }
  );
}
