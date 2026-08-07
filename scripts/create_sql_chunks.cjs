const fs = require('fs');
const path = require('path');

const blocks = JSON.parse(fs.readFileSync('scripts/sql_blocks.json', 'utf8'));

// Skip block 0, 1, 2 (already inserted)
const remainingBlocks = blocks.slice(3);

const chunkSize = 8;
let chunkIndex = 1;

for (let i = 0; i < remainingBlocks.length; i += chunkSize) {
  const chunk = remainingBlocks.slice(i, i + chunkSize);
  const sql = chunk.join('\n\n');
  fs.writeFileSync(`scripts/chunk_${chunkIndex}.sql`, sql, 'utf8');
  console.log(`Saved scripts/chunk_${chunkIndex}.sql with ${chunk.length} quizzes.`);
  chunkIndex++;
}
