import { DuplicateIcon } from '@heroicons/react/outline'
import { useState } from 'react';
import CopyNotification from './CopyNotification';

type CurrencyInputProps = {
  label: string,
  initialValue: number,
  updateFn: any
}

function timeout(delay: number) {
  return new Promise(res => setTimeout(res, delay));
}

export default function CurrencyInput(props: CurrencyInputProps) {
  const [currentValue, setCurrentValue] = useState(props.initialValue);
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const selectAll = (event: any): void => event.target.select();

  const updateValue = (newValue: number): void => {
    props.updateFn(newValue);
    setCurrentValue(newValue);
  }

  const handleCopy = async (): Promise<void> => {
    navigator.clipboard.writeText(currentValue.toString());
    setShowCopyNotification(true);
    await timeout(1000);
    setShowCopyNotification(false);
  }

  return (
    <>
      <label htmlFor="search" className="block text-sm font-medium text-white">
        {props.label}
      </label>
      <div className="mt-1 relative flex items-center">
        <input
          type="number"
          name={props.label}
          id={props.label}
          autoComplete="off"
          defaultValue={props.initialValue}
          onChange={(e: any) => updateValue(e.target.value)}
          onFocus={selectAll}
          className="shadow-sm focus:ring-solana-green focus:border-solana-green block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <button
            className="inline-flex items-center rounded px-2 text-sm font-sans font-medium text-gray-400"
            onClick={handleCopy}
          >
            <DuplicateIcon
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
      <CopyNotification
        show={showCopyNotification}
        setShow={setShowCopyNotification}
      />
    </>
  )
}
