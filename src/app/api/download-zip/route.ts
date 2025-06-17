import { NextRequest, NextResponse } from 'next/server';
import JSZip from 'jszip';

interface ZipError extends Error {
  code?: string;
  statusCode?: number;
}

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll('files') as File[];
    if (!files.length) {
      return NextResponse.json({ error: 'No files provided' }, { status: 400 });
    }
    const zip = new JSZip();
    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      zip.file(file.name, Buffer.from(arrayBuffer));
    }
    const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
    return new NextResponse(zipBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="optimized-images.zip"',
      },
    });
  } catch (error) {
    const zipError = error as ZipError;
    const statusCode = zipError.statusCode || 500;
    const errorMessage = zipError.message || 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
} 