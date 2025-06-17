import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export const runtime = 'nodejs';

interface OptimizeError extends Error {
  code?: string;
  statusCode?: number;
}

export async function POST(req: NextRequest) {
  try {
    const startTime = Date.now();
    const formData = await req.formData();
    const imageFile = formData.get('image') as File | null;
    const settingsRaw = formData.get('settings') as string | null;
    if (!imageFile || !settingsRaw) {
      return NextResponse.json({ success: false, error: 'No image or settings provided' }, { status: 400 });
    }
    const settings = JSON.parse(settingsRaw);
    const arrayBuffer = await imageFile.arrayBuffer();
    let image = sharp(Buffer.from(arrayBuffer));
    const format = settings.format;
    const quality = settings.quality;
    if (format === 'jpeg') {
      image = image.jpeg({ quality });
    } else if (format === 'png') {
      image = image.png({ quality });
    } else if (format === 'webp') {
      image = image.webp({ quality });
    } else if (format === 'avif') {
      image = image.avif({ quality });
    } // else keep original
    const outputBuffer = await image.toBuffer();
    const optimizedBase64 = outputBuffer.toString('base64');
    const originalSize = imageFile.size;
    const optimizedSize = outputBuffer.length;
    let compressionRatio = 0;
    if (originalSize > 0) {
      compressionRatio = Math.round((1 - optimizedSize / originalSize) * 100);
    }
    const processingTime = Date.now() - startTime;
    return NextResponse.json({
      success: true,
      optimizedImage: optimizedBase64,
      optimizedSize,
      compressionRatio,
      processingTime
    });
  } catch (error) {
    const optimizeError = error as OptimizeError;
    const statusCode = optimizeError.statusCode || 500;
    const errorMessage = optimizeError.message || 'Unknown error';
    return NextResponse.json({ success: false, error: errorMessage }, { status: statusCode });
  }
} 