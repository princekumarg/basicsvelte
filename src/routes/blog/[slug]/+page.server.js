import { sql } from "@vercel/postgres";
import { createClient } from '@vercel/postgres';

async function queryNames() {
    const client = createClient();
    await client.connect();
    try {
        const names = await client.sql`SELECT * FROM NAMES `;
        return names;
    } finally {
        await client.end();
    }
}
export async function load({ locals }) {
    return {
        names: await queryNames()
    }
}

// export async function load({ params }) {
//     return {
//         content: `hello${params.slug}`
//     }
// }