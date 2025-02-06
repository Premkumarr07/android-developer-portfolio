import React from "react";

// Card Components
export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 border-b">{children}</div>;
};

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4">{children}</div>;
};

export const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-lg font-semibold text-slate-800">{children}</h3>;
};

export const CardDescription = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm text-slate-600">{children}</p>;
};
