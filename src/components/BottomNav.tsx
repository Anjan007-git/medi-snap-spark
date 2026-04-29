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

const ICON_HALO_SIZE = 44; // perfect circle behind the icon

const BottomNav = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [indicator, setIndicator] = useState({ x: 0, y: 0, ready: false });

  const activeIndex = (() => {
    const path = location.pathname;
    const idx = items.findIndex(({ to }) =>
      to === "/" ? path === "/" : path.startsWith(to)
    );
    return idx === -1 ? 0 : idx;
  })();

  const measure = () => {
    const el = iconRefs.current[activeIndex];
    const container = containerRef.current;
    if (!el || !container) return;
    const elRect = el.getBoundingClientRect();
    const cRect = container.getBoundingClientRect();
    const cx = elRect.left + elRect.width / 2 - cRect.left;
    const cy = elRect.top + elRect.height / 2 - cRect.top;
    setIndicator({
      x: cx - ICON_HALO_SIZE / 2,
      y: cy - ICON_HALO_SIZE / 2,
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
      className="fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)" }}
      aria-label="Primary"
    >
      <div
        ref={containerRef}
        className="relative rounded-full px-2 pt-2 pb-1.5 flex items-stretch"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(30px) saturate(180%)",
          WebkitBackdropFilter: "blur(30px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.65)",
          boxShadow:
            "0 14px 44px -12px rgba(15,23,42,0.22), 0 0 0 1px rgba(96,165,250,0.08), inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      >
        {/* Perfect circle active highlight (behind the ICON only) */}
        <span
          aria-hidden
          className="absolute pointer-events-none rounded-full"
          style={{
            width: ICON_HALO_SIZE,
            height: ICON_HALO_SIZE,
            transform: `translate(${indicator.x}px, ${indicator.y}px)`,
            transition: indicator.ready
              ? "transform 380ms cubic-bezier(0.34, 1.4, 0.64, 1)"
              : "none",
            background:
              "linear-gradient(135deg, #60A5FA 0%, #3B82F6 60%, #1D4ED8 100%)",
            boxShadow:
              "0 8px 22px rgba(59,130,246,0.45), 0 0 0 1px rgba(255,255,255,0.45) inset, 0 0 18px rgba(96,165,250,0.55)",
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
              className="relative z-10 flex-1 flex flex-col items-center justify-end gap-1 py-1.5 px-1 transition-transform duration-200 active:scale-95"
            >
              <span
                ref={(el) => (iconRefs.current[i] = el)}
                className="relative flex items-center justify-center"
                style={{ width: ICON_HALO_SIZE, height: ICON_HALO_SIZE }}
              >
                <Icon
                  className="transition-all duration-300"
                  style={{
                    width: isActive ? 23 : 21,
                    height: isActive ? 23 : 21,
                    color: isActive ? "#ffffff" : "#374151",
                  }}
                  strokeWidth={isActive ? 2.5 : 2.2}
                />
              </span>
              <span
                className="text-[10.5px] leading-none transition-colors duration-300"
                style={{
                  color: isActive ? "#1D4ED8" : "#6B7280",
                  fontWeight: isActive ? 700 : 500,
                }}
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
