export const MAX_IMPORT_CHARS = 10000;

export type ParsedQuestion = {
  question_text: string;
  options: string[];
  correct_index: number;
  time_limit_seconds: number;
  padded_options: boolean;
  inferred_correct: boolean;
  ambiguous_split: boolean;
  explanation?: string;
  difficulty?: string;
  subcategory?: string;
  tags?: string[];
  source?: string;
  id?: string;
  external_id?: string;
  verified?: boolean;
  is_verified?: boolean;
  version?: number;
};
