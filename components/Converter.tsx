import { SwitchHorizontalIcon } from "@heroicons/react/outline";
import CurrencyInput from "./CurrencyInput";
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useState } from "react";

export default function Converter() {
    const [sol, setSol] = useState(1);
    const [lamports, setLamports] = useState(1 * LAMPORTS_PER_SOL);

    const updateFromSol = (newSolValue: number): void => {
        console.log('newSolValue :>> ', newSolValue);
        setSol(newSolValue);
        setLamports(newSolValue * LAMPORTS_PER_SOL);
    }

    const updateFromLamports = (newLamportValue: number): void => {
        console.log('newLamportValue :>> ', newLamportValue);
        setSol(newLamportValue / LAMPORTS_PER_SOL);
        setLamports(newLamportValue);
    }

    return (
        <div className="w-4/5 content-center">
            <div className="columns-3">
                <CurrencyInput
                    label='Sol'
                    initialValue={sol}
                    updateFn={updateFromSol}
                />
                <br />
                <SwitchHorizontalIcon
                    className="h-8 w-8 text-solana-green"
                />
                <br />
                <CurrencyInput
                    label='Lamports'
                    initialValue={lamports}
                    updateFn={updateFromLamports}
                />
            </div>
        </div>
    )
}