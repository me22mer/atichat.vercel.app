import { NextRequest, NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';

if (!process.env.GITHUB_TOKEN) {
  console.error('GITHUB_TOKEN is not set in the environment variables');
  process.exit(1);
}

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const path = searchParams.get('path');
  
  if (!path) {
    return NextResponse.json({ error: 'Path is required' }, { status: 400 });
  }

  try {
    const response = await octokit.repos.getContent({
      owner: 'me22mer',
      repo: 'atichat.vercel.app',
      path: path, 
    });

    // console.log('Rate Limit:', response.headers['x-ratelimit-limit']);
    // console.log('Remaining:', response.headers['x-ratelimit-remaining']);

    if (Array.isArray(response.data)) {
      return NextResponse.json(response.data);
    }
    else if ('content' in response.data) {
      const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
      return NextResponse.json({ content });
    }
    else {
      return NextResponse.json(response.data);
    }
  } catch (error) {
    console.error('GitHub API Error:', error);
    return NextResponse.json({
      error: 'Error fetching data from GitHub',
      details: error instanceof Error ? error.message : String(error),
    }, { status: 500 });
  }
}