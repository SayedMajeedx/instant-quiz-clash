import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * Question images live in a private bucket, so every screen (host and players,
 * signed in or not) resolves a short-lived signed URL for the object path.
 */
export function useSignedImage(path: string | null | undefined): string | null {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    if (!path) {
      setUrl(null);
      return;
    }
    if (/^https?:\/\//.test(path)) {
      setUrl(path);
      return;
    }
    void supabase.storage
      .from("question-images")
      .createSignedUrl(path, 60 * 60)
      .then(({ data }) => {
        if (alive) setUrl(data?.signedUrl ?? null);
      });
    return () => {
      alive = false;
    };
  }, [path]);

  return url;
}

export function QuestionImage({
  path,
  className,
  alt = "",
}: {
  path: string | null | undefined;
  className?: string;
  alt?: string;
}) {
  const url = useSignedImage(path);
  if (!url) return null;
  return <img src={url} alt={alt} className={className} loading="lazy" />;
}
