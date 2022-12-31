export interface ButtonProps {
    type?: any;
    className: string;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }
  