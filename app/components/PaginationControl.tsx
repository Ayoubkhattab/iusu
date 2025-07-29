export default function PaginationControl() {
  return (
    <div>
      <ul className="flex h-9 items-center -space-x-px bg-neutral-100 text-sm">
        <li>{previousBtn()}</li>
        <li>{pageNum({ num: 1 })}</li>
        <li>{pageNum({ num: 2 })}</li>
        <li>{pageNum({ num: 3 })}</li>
        <li>{pageNum({ num: 4 })}</li>
        <li>{pageNum({ num: 5 })}</li>

        <li>{nextBtn()}</li>
      </ul>
    </div>
  );
}

function nextBtn() {
  return (
    <a
      href="#"
      className="flex h-9 items-center justify-center rounded-e-lg border bg-neutral-100 px-3 hover:bg-success hover:text-white"
    >
      <span className="sr-only">Next</span>
      <svg
        className="h-2.5 w-2.5 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m1 9 4-4-4-4"
        />
      </svg>
    </a>
  );
}

function pageNum({ num }: { num: number }) {
  return (
    <a
      href="#"
      className="flex h-9 items-center justify-center border bg-neutral-100 px-3 leading-tight hover:bg-success hover:text-white"
    >
      {num}
    </a>
  );
}

function previousBtn() {
  return (
    <a
      href="#"
      className="ms-0 flex h-9 items-center justify-center rounded-s-lg border border-e-0 bg-neutral-100 px-3 hover:bg-success hover:text-white"
    >
      <span className="sr-only">Previous</span>
      <svg
        className="h-2.5 w-2.5 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 1 1 5l4 4"
        />
      </svg>
    </a>
  );
}
