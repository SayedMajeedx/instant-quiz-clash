const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.resolve('scripts/seed_library.sql'), 'utf8');
const blocks = content.split('DO $$').filter(b => b.trim().length > 0).map(b => 'DO $$' + b);

console.log(`Parsed ${blocks.length} quiz blocks from seed_library.sql`);

const chunkSize = 15;
let chunkIndex = 1;

for (let i = 0; i < blocks.length; i += chunkSize) {
  const chunk = blocks.slice(i, i + chunkSize);
  const sql = chunk.join('\n\n');
  fs.writeFileSync(path.resolve(`scripts/lib_chunk_${chunkIndex}.sql`), sql, 'utf8');
  console.log(`Saved scripts/lib_chunk_${chunkIndex}.sql with ${chunk.length} quizzes.`);
  chunkIndex++;
}
