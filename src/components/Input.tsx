import { forwardRef } from "react";
import { cn } from "../lib/utils";

type InputProps = {
  error: string | null;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          className={cn(
            "rounded-sm border-0 focus:border-0 outline-none focus:outline-none ring-1 ring-neutral-gray-blue focus:ring-accent-blue px-5 py-3 placeholder:text-neutral-dark-blue/65 placeholder:font-semibold focus:ring-2 font-semibold w-full",
            {
              "ring-2 ring-primary-red focus:ring-primary-red": error,
            },
            className
          )}
          type={type}
          ref={ref}
          {...props}
        />
        {error && <IconError className="absolute right-3 top-3" />}
        {error && (
          <p className="text-primary-red text-xs font-semibold my-1 text-right">
            {error}
          </p>
        )}
      </div>
    );
  }
);

function IconError({ className }: { className?: string }) {
  return (
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <g fill="none" fillRule="evenodd">
        <circle fill="#FF7979" cx={12} cy={12} r={12} />
        <rect fill="#FFF" x={11} y={6} width={2} height={9} rx={1} />
        <rect fill="#FFF" x={11} y={17} width={2} height={2} rx={1} />
      </g>
    </svg>
  );
}

export default Input;
