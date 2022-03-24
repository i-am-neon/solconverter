import { SwitchHorizontalIcon } from "@heroicons/react/outline";
import InputKeyboardShortcut from "./InputKeyboardShortcut";

export default function Converter() {
    return (
        <div className="w-4/5 content-center">
            <div className="columns-3">
                <InputKeyboardShortcut
                    label='Sol'
                    keyboardShortcut='⌘K'
                />
                <br />
                <SwitchHorizontalIcon
                    className="h-8 w-8 text-solana-green"
                />
                <br />
                <InputKeyboardShortcut
                    label='Lamports'
                    keyboardShortcut='⌘⇧K'
                />
            </div>
        </div>
    )
}