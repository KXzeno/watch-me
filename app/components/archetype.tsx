interface ArchetypeProps {
  children: React.ReactNode;
  onClick: React.MouseEvent<HTMLElement>;
  className: string;
}

export default function Archetype({ 
  children,
  onClick,
  className,
}:ArchetypeProps) { 
  return(
    <button onClick={onClick} className={className}>
      <p className="m-1.5">{children}</p>
    </button>
  );
};
