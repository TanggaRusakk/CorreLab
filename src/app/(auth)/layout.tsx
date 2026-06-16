export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen overflow-hidden w-full flex bg-[#0F172A]">
      {/* Left Side */}
      <div className="hidden lg:flex w-[60%] bg-[#0F172A] flex-col justify-center px-24 relative overflow-hidden">
        {/* Decorative bg elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-[672px] text-white">
          <h1 className="font-display-lg text-display-lg mb-4 text-white">CorreLab</h1>
          <h2 className="text-5xl font-bold mb-6 leading-tight text-white">Unlock the Power of Your Data</h2>
          <p className="text-slate-300 text-xl max-w-[512px]">Advanced enterprise analytics platform to drive actionable insights, optimize performance, and scale your business intelligently.</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-[40%] bg-slate-50 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-[448px] bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          {children}
        </div>
      </div>
    </div>
  );
}
