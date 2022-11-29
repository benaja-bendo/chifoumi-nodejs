import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
export async function question(query, isParse = false) {
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question(query);
    rl.close();
    return isParse ? parseInt(answer) : answer;
}
