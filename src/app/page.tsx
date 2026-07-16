import { Cpu, Terminal, Compass, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Cpu className="w-4 h-4 text-white animate-pulse" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              DevPilot <span className="text-indigo-400">AI</span>
            </span>
            <span className="text-[10px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full px-2 py-0.5 ml-2">
              MVP
            </span>
          </div>

          <nav className="flex items-center gap-6">
            <span className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer">
              Docs
            </span>
            <span className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer">
              Github
            </span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
            AI-Powered Locator Generator <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              For QA Automation Engineers
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            Paste raw HTML, target any element, and generate resilient, standard-compliant locators for Playwright, Selenium, Cypress, and Appium instantly.
          </p>
        </div>

        {/* Feature Tool Placeholder Container */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-zinc-700/80">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800/80 flex items-center justify-center border border-zinc-700">
                <Terminal className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Locator Generator Interface</h3>
              <p className="text-sm text-zinc-400 max-w-md">
                This workspace will load the HTML input textarea and generated locator outputs in the upcoming tasks.
              </p>
              <div className="pt-4 flex gap-2">
                <span className="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/20">
                  Playwright
                </span>
                <span className="inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-400/20">
                  Selenium
                </span>
                <span className="inline-flex items-center rounded-md bg-pink-400/10 px-2 py-1 text-xs font-medium text-pink-400 ring-1 ring-inset ring-pink-400/20">
                  Cypress
                </span>
                <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20">
                  Appium
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
          <div className="flex flex-col items-start gap-3 p-6 rounded-xl border border-zinc-850 bg-zinc-900/20">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="text-md font-semibold text-zinc-200">Strict Priority Rules</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Prioritizes `data-testid`, `aria-label`, standard roles, and names over brittle autogenerated XPaths or index-based selectors.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 p-6 rounded-xl border border-zinc-850 bg-zinc-900/20">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-md font-semibold text-zinc-200">Anti-Brittle Selectors</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Excludes volatile tailwind utility classes, random digits, absolute XPaths, and `nth-child` indexes automatically.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 p-6 rounded-xl border border-zinc-850 bg-zinc-900/20">
            <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-md font-semibold text-zinc-200">Scalable & Extensible</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Architected under strict clean architecture principles, ready to support future screenshot and test case generators.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} DevPilot AI. All rights reserved. Built for automation engineers.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

