import { NextResponse } from "next/server";

import pool from "@/libs/mysql";

export async function GET() {
    try {
        const db = await pool.getConnection();
        const query = 'select * from retail_items';
        const [rows] = await db.execute(query);
        db.release();

        return JSON.stringify(rows);
    } catch (error) {
        throw new Error('failed to fetch item data')
    }
};
