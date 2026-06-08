"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "@/i18n/navigation";

/**
 * Wraps page <main> content and replays a short fade+slide whenever the
 * pathname changes. Uses React key swap (works everywhere) — no library.
 *
 * Honours prefers-reduced-motion via CSS (.page-fade animation disables there).
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [renderKey, setRenderKey] = useState(pathname);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      prevPath.current = pathname;
      setRenderKey(pathname);
    }
  }, [pathname]);

  return (
    <div key={renderKey} className="page-fade">
      {children}
    </div>
  );
}
