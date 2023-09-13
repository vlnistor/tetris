import { readFileSync, writeFileSync, appendFileSync } from 'fs';
import solve from './solver';
// Clear output.txt

writeFileSync('./output.txt', '');

const input = readFileSync('./input.txt', 'utf8').split('\n');


// input.forEach((line, _) => {
//     appendFileSync('./output.txt', `${solve(line)}\n`);
// })


solve("Q0,Q2,Q4,Q6,Q8");



// Remove last newline
const data = readFileSync('./output.txt', 'utf8');
writeFileSync('./output.txt', data.slice(0, data.length - 1));