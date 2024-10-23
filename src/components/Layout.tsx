
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=" bg-background text-primary">
      <main className="relative">
        <div
          className="absolute inset-0 w-full h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url('https://khwopa.edu.np/themes/khce_v2/images/KhEC_KhCE.jpg')`,
            opacity: 0.2,
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
