CREATE OR REPLACE FUNCTION private.question_image_readable(p_name text, p_owner uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path TO 'public', 'private', 'pg_temp'
AS $$
  SELECT (p_owner IS NOT NULL AND auth.uid() IS NOT NULL AND p_owner = auth.uid())
    OR EXISTS (
      SELECT 1
      FROM public.questions q
      JOIN public.quizzes z ON z.id = q.quiz_id
      WHERE q.image_url = p_name
        AND (
          z.user_id = auth.uid()
          OR private.is_library_quiz(z.id)
          OR EXISTS (
            SELECT 1 FROM public.rooms r
            WHERE r.quiz_id = z.id AND private.room_is_live(r.id)
          )
        )
    );
$$;

REVOKE ALL ON FUNCTION private.question_image_readable(text, uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.question_image_readable(text, uuid) TO anon, authenticated, service_role;

DROP POLICY IF EXISTS "question_images_public_read" ON storage.objects;
DROP POLICY IF EXISTS "question_images_scoped_read" ON storage.objects;
CREATE POLICY "question_images_scoped_read"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (
  bucket_id = 'question-images'
  AND private.question_image_readable(name, owner)
);