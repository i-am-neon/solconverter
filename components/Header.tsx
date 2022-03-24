import { Disclosure } from "@headlessui/react";
import { SwitchHorizontalIcon } from "@heroicons/react/outline";
import NextLink from "./NextLink";

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (
        <div className="pb-32">
            <Disclosure as="nav">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="border-b border-gray-700">
                                <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                                    <div className="flex items-center ">
                                        <NextLink href='/'>
                                            <a className='flex'>
                                                <div className="flex-shrink-0">
                                                    <SwitchHorizontalIcon
                                                        className="h-8 w-8 text-solana-green"
                                                    />
                                                </div>
                                                <h1 className='text-xl'>
                                                    <a className='flex text-white'>
                                                        <div className='ml-3'>
                                                            <span className='font-light'>Sol</span>
                                                            <span className='font-semibold'>Converter</span>
                                                        </div>
                                                    </a>
                                                </h1>
                                            </a>
                                        </NextLink>

                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )}
            </Disclosure>
        </div>
    )
}