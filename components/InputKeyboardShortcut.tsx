
type InputKeyboardShortcutProps = {
    label: string,
    keyboardShortcut: string
}

export default function InputKeyboardShortcut(props: InputKeyboardShortcutProps) {
    return (
      <div>
        <label htmlFor="search" className="block text-sm font-medium text-gray-700">
          {props.label}
        </label>
        <div className="mt-1 relative flex items-center">
          <input
            type="text"
            name={props.label}
            id={props.label}
            autoComplete="off"
            className="shadow-sm focus:ring-solana-green focus:border-solana-green block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
          />
          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
              {props.keyboardShortcut}
            </kbd>
          </div>
        </div>
      </div>
    )
  }
  