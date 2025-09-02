const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

// Path to ffmpeg executable (adjust if necessary)
const ffmpegPath = 'ffmpeg';

// List of video files to optimize
const videos = [
  'public/videos/Art_Futurology_optimized.mp4',
  'public/videos/FMCG_Perfumery_Image_optimized.mp4',
  'public/videos/Pushkin_Simple_optimized.mp4',
  'public/videos/Sports_Unexpected_Combination_optimized.mp4'
];

// Optimization settings
const settings = {
  videoBitrate: '5000k',
  videoWidth: '1280',
  videoHeight: '720',
  videoPixelFormat: 'yuv420p',
  videoCodec: 'libx264',
  videoProfile: 'high',
  audioBitrate: '128k',
  audioCodec: 'aac'
};

// Function to optimize video
async function optimizeVideo(inputPath, outputPath) {
  const cmd = `${ffmpegPath} -i "${inputPath}" -b:v ${settings.videoBitrate} -w ${settings.videoWidth} -h ${settings.videoHeight} -pix_fmt ${settings.videoPixelFormat} -vcodec ${settings.videoCodec} -profile:v ${settings.videoProfile} -b:a ${settings.audioBitrate} -acodec ${settings.audioCodec} "${outputPath}"`;
  
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(`Error optimizing video: ${stderr}`);
        return;
      }
      resolve('Video optimized successfully');
    });
  });
}

// Main execution
async function main() {
  try {
    // Create optimized videos directory if it doesn't exist
    const videosDir = path.join(__dirname, '..', 'public', 'videos');
    if (!fs.existsSync(videosDir)) {
      fs.mkdirSync(videosDir, { recursive: true });
    }

    // Optimize each video
    for (const video of videos) {
      const inputPath = path.join(__dirname, '..', video);
      const outputPath = inputPath; // Overwrite existing file
      
      await optimizeVideo(inputPath, outputPath);
      console.log(`Successfully optimized: ${video}`);
    }

    console.log('All videos optimized successfully');
  } catch (error) {
    console.error('Error during video optimization:', error.message);
    process.exit(1);
  }
}

// Run the optimization process
main();
