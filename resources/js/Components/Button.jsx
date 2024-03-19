export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl border border-white py-[13px] text-center
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
