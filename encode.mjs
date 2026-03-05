import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';
import fs from 'fs';
import path from 'path';

async function convertVideo() {
    const ffmpeg = new FFmpeg();

    ffmpeg.on('log', ({ message }) => {
        console.log(message);
    });

    console.log('Loading ffmpeg core...');
    await ffmpeg.load();

    const inputPath = path.join(process.cwd(), 'public', 'wall-e-clip.mov');
    const outputPath = path.join(process.cwd(), 'public', 'wall-e-clip-encoded.mp4');

    console.log('Reading input file...');
    const videoData = await fetchFile(inputPath);

    console.log('Writing file to virtual FS...');
    await ffmpeg.writeFile('input.mov', videoData);

    console.log('Starting conversion...');
    // Use generic high compatibility h264 encoding
    await ffmpeg.exec([
        '-i', 'input.mov',
        '-c:v', 'libx264',
        '-preset', 'fast',
        '-crf', '22',
        '-c:a', 'aac',
        '-b:a', '128k',
        '-movflags', '+faststart',
        '-pix_fmt', 'yuv420p',
        'output.mp4'
    ]);

    console.log('Reading output file...');
    const data = await ffmpeg.readFile('output.mp4');

    console.log('Saving to disk...');
    fs.writeFileSync(outputPath, Buffer.from(data));
    console.log('Conversion complete! Saved to:', outputPath);
}

convertVideo().catch(console.error);
