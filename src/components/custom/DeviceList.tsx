"use client"
import { useEffect, useState } from "react";
import { Checkbox } from "../Checkbox";
import { Label } from "../Label";

export default async function DeviceList() {
    const [devices, setDevices] = useState('[]');
        useEffect(() => {
            async function getData() {
                const res = await fetch('/api/devices', new Request(''));
                const data = await res.json();
                setDevices(JSON.stringify(data));
            }
            getData();
        }, []);
    return (
        <div>
            <ul className="ms-1 flex flex-col gap-3">
                {JSON.parse(devices).map((device: any) => {
                    return <li className="flex items-center justify-start gap-2">
                            <Checkbox id="r1" onCheckedChange={() => {}} defaultChecked={true}/>
                            <Label htmlFor="r1">{device.name}</Label>
                        </li>
                    }
                )}
            </ul>
        </div>
    );
}