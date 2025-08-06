import { extractRegisters, getFullAuthTokenDict } from "@/app/actions";
import { sensors } from "@/app/data/sensors"

export async function GET(req: Request) {
    const tokens = await getFullAuthTokenDict();
    let registers = []

    for (let i = 0; i < sensors.length; i++) {
        const temp = await extractRegisters(sensors[i].number.toString(), tokens.get(sensors[i].number));
        registers.push({
            sensor: sensors[i],
            registers: temp.map((el: any) => {
                return {name: el.name, id: el.idx, num: sensors[i].number}
            })
        });
    }

    return new Response(JSON.stringify(registers), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }, // application/json || text/html
    });
}