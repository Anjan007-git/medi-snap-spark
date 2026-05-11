import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;
    let redirected = false;
    const getRedirectTarget = () => {
      try {
        const target = localStorage.getItem("mediscan-auth-redirect") || "/";
        localStorage.removeItem("mediscan-auth-redirect");
        return target.startsWith("/") ? target : "/";
      } catch {
        return "/";
      }
    };
    const finish = (target: string) => {
      if (cancelled || redirected) return;
      redirected = true;
      navigate(target, { replace: true });
    };

    const run = async () => {
      try {
        const url = new URL(window.location.href);
        const code = url.searchParams.get("code");
        const errorDesc = url.searchParams.get("error_description") || url.searchParams.get("error");

        if (errorDesc) {
          finish("/login");
          return;
        }

        // PKCE flow: exchange ?code= for a session
        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) {
            finish("/login");
            return;
          }
        }

        // Confirm session is set, then redirect.
        const { data } = await supabase.auth.getSession();
        if (cancelled) return;
        finish(data.session ? getRedirectTarget() : "/login");
      } catch {
        finish("/login");
      }
    };

    const { data: sub } = supabase.auth.onAuthStateChange((_evt, sess) => {
      if (cancelled) return;
      if (sess) finish(getRedirectTarget());
    });

    run();

    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary-glow/10">
      <Loader2 className="w-7 h-7 text-primary animate-spin" />
    </div>
  );
};

export default AuthCallback;
