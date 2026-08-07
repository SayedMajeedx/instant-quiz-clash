const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('scripts/sync_all_quizzes.sql', 'utf8');
const blocks = content.split('DO $$').filter(b => b.trim().length > 0).map(b => 'DO $$' + b);

console.log(`Parsed ${blocks.length} quiz blocks from sync_all_quizzes.sql`);

const chunkSize = 20;
let chunkIndex = 1;

for (let i = 0; i < blocks.length; i += chunkSize) {
  const chunk = blocks.slice(i, i + chunkSize);
  const sql = chunk.join('\n\n');
  fs.writeFileSync(`scripts/sync_chunk_${chunkIndex}.sql`, sql, 'utf8');
  console.log(`Saved scripts/sync_chunk_${chunkIndex}.sql with ${chunk.length} quizzes.`);
  chunkIndex++;
}
