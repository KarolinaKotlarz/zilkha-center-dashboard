import { getYesterdaysEnergyTotals, getFullAuthTokenDict } from "@/app/actions";
import { sensors } from "@/app/data/sensors"

export async function GET(req: Request) {
    const tokens = await getFullAuthTokenDict();
    let totals: any[] = []
    
    for (let i = 0; i < sensors.length; i++) {
        const temp = await getYesterdaysEnergyTotals(sensors[i].number.toString(), tokens.get(sensors[i].number));
        
        if (totals.length === 0) {
            totals = temp.map((val) => { return {time: val.time, Yesterday: val.Yesterday}})

        } else {
            totals = totals.map((val, i) => { return {time: val.time, Yesterday: val.Yesterday + temp[i].Yesterday}})
        }
    }

    return new Response(JSON.stringify(totals), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }, // or application/json || text/html
    });
}