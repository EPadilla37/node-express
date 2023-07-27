const axios = require('axios');
const fs = require('fs');
const readline = require('readline');

const filename = process.argv[2];

if (!filename) {
  console.error('Please provide a filename as an argument.');
  process.exit(1);
}

const readStream = fs.createReadStream(filename);
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity,
});

async function downloadUrl(url) {
  try {
    const response = await axios.get(url);
    const outputFilename = new URL(url).hostname;

    fs.writeFile(outputFilename, response.data, (err) => {
      if (err) {
        console.error(`Couldn't write to ${outputFilename}`);
      } else {
        console.log(`Wrote to ${outputFilename}`);
      }
    });
  } catch (error) {
    console.error(`Couldn't download ${url}`);
  }
}

rl.on('line', (url) => {
  downloadUrl(url);
});

rl.on('close', () => {
  console.log('All URLs processed.');
});
