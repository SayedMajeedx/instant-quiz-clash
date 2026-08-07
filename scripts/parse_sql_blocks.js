import fs from 'fs';
import path from 'path';

// Parse seed_islamiyyat.sql into DO $$ ... END $$ blocks
const sqlPath = path.resolve('scripts/seed_islamiyyat.sql');
const content = fs.readFileSync(sqlPath, 'utf8');

const blocks = content.split('DO $$').filter(b => b.trim().length > 0).map(b => 'DO $$' + b);

console.log(`Parsed ${blocks.length} SQL blocks from seed_islamiyyat.sql`);

// Write a node runner script that imports mcp tool or executes via fetch
fs.writeFileSync('scripts/sql_blocks.json', JSON.stringify(blocks, null, 2), 'utf8');
console.log('Saved sql_blocks.json with all blocks.');
