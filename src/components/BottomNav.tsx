import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, FileText, Camera, PieChart, Settings } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/receipts", label: "Receipts", icon: FileText },
  { to: "/scan", label: "Scan", icon: Camera },
  { to: "/insights", label: "Insights", icon: PieChart },
  { to: "/settings", label: "Settings", icon: Settings },
];

const BottomNav = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [indicator, setIndicator] = useState({ x: 0, width: 0, ready: false });

  const activeIndex = (() => {
    const path = location.pathname;
    const idx = items.findIndex(({ to }) =>
      to === "/" ? path === "/" : path.startsWith(to)
    );
    return idx === -1 ? 0 : idx;
  })();

  const measure = () => {
    const el = tabRefs.current[activeIndex];
    const container = containerRef.current;
    if (!el || !container) return;
    const elRect = el.getBoundingClientRect();
    const cRect = container.getBoundingClientRect();
    setIndicator({
      x: elRect.left - cRect.left,
      width: elRect.width,
      ready: true,
    });
  };

  useLayoutEffect(measure, [activeIndex]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <nav
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md"
      aria-label="Primary"
    >
      <div
        ref={containerRef}
        className="relative rounded-full p-2 flex items-stretch"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(30px) saturate(160%)",
          WebkitBackdropFilter: "blur(30px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow:
            "0 12px 40px -10px rgba(15,23,42,0.18), inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      >
        {/* Single sliding liquid capsule */}
        <span
          aria-hidden
          className="absolute top-2 bottom-2 rounded-full pointer-events-none"
          style={{
            width: indicator.width,
            transform: `translateX(${indicator.x}px)`,
            transition: indicator.ready
              ? "transform 350ms cubic-bezier(0.34, 1.4, 0.64, 1), width 300ms ease"
              : "none",
            background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
            boxShadow: "0 8px 25px rgba(59,130,246,0.35)",
            opacity: indicator.ready ? 1 : 0,
          }}
        />

        {items.map(({ to, label, icon: Icon }, i) => {
          const isActive = i === activeIndex;
          return (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              ref={(el) => (tabRefs.current[i] = el)}
              className="relative z-10 flex-1 flex flex-col items-center justify-center gap-1 py-2 px-1 transition-transform duration-200 active:scale-95"
              style={{ transform: isActive ? "scale(1.05)" : "scale(1)" }}
            >
              <Icon
                className="transition-colors duration-300"
                style={{
                  width: 22,
                  height: 22,
                  color: isActive ? "#ffffff" : "#111827",
                }}
                strokeWidth={2.2}
              />
              <span
                className="text-[11px] leading-none font-medium transition-colors duration-300"
                style={{ color: isActive ? "#ffffff" : "#6B7280" }}
              >
                {label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
