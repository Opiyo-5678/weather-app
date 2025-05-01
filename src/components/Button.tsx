
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
loading?: boolean;
}

export default function Button({
loading = false,
children,
...props
}: ButtonProps) {
return (
    <button
    
    disabled={loading || props.disabled}
    
    {...props}
    >
    {loading ? 'Loading...' : children}
    </button>
);
}
