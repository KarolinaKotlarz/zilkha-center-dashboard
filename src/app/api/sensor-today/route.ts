import { getAuthToken, getDeviceData } from "@/app/actions";
import { sensors } from "@/app/data/sensors"

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (id === null) {
        return new Response('Invalid URL ID', { status: 400 });
    }
    
    const JWT = await getAuthToken(id);
    const data = await getDeviceData(id, JWT);
    // console.log(data);

    // const res = data.ranges.map((val) => {
    //     return val.power.reduce((accumulator, field, index) => {
    //         accumulator[index] = field.toString();
    //         console.log(field);
    //         console.log(data.names[index]);
    //         return '';
    //     });
    // })

    // var dic = data.ranges.map(function(row) {
    // return row.power.reduce(function(result, field, index) {
    //         result[data.names[index]] = field;
    //         return result;
    //     }, {});
    // });

    // console.log('dictionary ' + dic.toString())
    // console.log(Object.entries(dic))
    // const entries = new Map(
    //         Object.entries(dic)
    //     );
    // const obj = Object.fromEntries(entries)

    // console.log(obj)


    // const map = Object.fromEntries((data.names.map((val, index) => [val, data.ranges[0].power[index]])));
    // console.log(map)

    var dictionary = data.ranges.map(function(row) {
        const r = row.power.reduce(function(result, field, index) {
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