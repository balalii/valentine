type TButton = { children: React.ReactNode; className?: string; type?: 'button' | 'submit'; onClick?: () => void; disabled?: boolean };

export default function ButtonComponent({ children, className, type, onClick, disabled }: TButton) {
  return (
    <button disabled={disabled} type={type ? type : 'button'} className={`${className} border  shadow cursor-pointer rounded-xl text-white pt-2.5 pb-3 px-16 `} onClick={onClick}>
      {children}
    </button>
  );
}
