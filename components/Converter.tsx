import { SwitchHorizontalIcon } from "@heroicons/react/outline";
import InputKeyboardShortcut from "./InputKeyboardShortcut";
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

    return (
        <div className="w-4/5 content-center">
            <div className="columns-3">
                <InputKeyboardShortcut
                    label='Sol'
                    keyboardShortcut='⌘K'
                    initialValue={sol}
                    updateFn={updateFromSol}
                />
                <br />
                <SwitchHorizontalIcon
                    className="h-8 w-8 text-solana-green"
                />
                <br />
                <InputKeyboardShortcut
                    label='Lamports'
                    keyboardShortcut='⌘⇧K'
                    initialValue={lamports}
                    updateFn={updateFromSol}
                />
            </div>
        </div>
    )
}