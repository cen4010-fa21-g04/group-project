import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              About
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <div role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
