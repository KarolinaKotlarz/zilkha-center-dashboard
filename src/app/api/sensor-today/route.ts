import { getAuthToken, getDeviceData } from "@/app/actions";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (id === null) {
        return new Response('Invalid URL ID', { status: 400 });
    }
    
    const JWT = await getAuthToken(id);
    const data = await getDeviceData(id, JWT);

    var dictionary = data.ranges.map(function(row) {
        const r = row.power.reduce(function(result: { [x: string]: any; }, field: any, index: string | number) {
                result[data.names[index]] = field;
                return result;
            }, {});
            r['time'] = row.time
            return r;
    });

    console.log(dictionary);

    const result = { names: data.names, data: dictionary}

    console.log('res');
    console.log(result)

    return new Response(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }, // application/json || text/html
    });
}