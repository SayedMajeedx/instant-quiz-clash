export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      answers: {
        Row: {
          answered_at: string
          choice_index: number
          id: string
          is_correct: boolean
          player_id: string
          points_awarded: number
          powerup: string | null
          question_id: string
          room_id: string
          streak_bonus: number
        }
        Insert: {
          answered_at?: string
          choice_index: number
          id?: string
          is_correct?: boolean
          player_id: string
          points_awarded?: number
          powerup?: string | null
          question_id: string
          room_id: string
          streak_bonus?: number
        }
        Update: {
          answered_at?: string
          choice_index?: number
          id?: string
          is_correct?: boolean
          player_id?: string
          points_awarded?: number
          powerup?: string | null
          question_id?: string
          room_id?: string
          streak_bonus?: number
        }
        Relationships: [
          {
            foreignKeyName: "answers_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "answers_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          brand_id: string | null
          created_at: string | null
          id: string
          is_active: boolean | null
          name: string
          name_en: string | null
          slug: string
          sort_order: number | null
        }
        Insert: {
          brand_id?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          name_en?: string | null
          slug: string
          sort_order?: number | null
        }
        Update: {
          brand_id?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          name_en?: string | null
          slug?: string
          sort_order?: number | null
        }
        Relationships: []
      }
      game_player_results: {
        Row: {
          answered_count: number
          avatar_color: string
          best_streak: number
          correct_count: number
          created_at: string
          game_id: string
          id: string
          nickname: string
          rank: number
          score: number
          team_index: number | null
        }
        Insert: {
          answered_count?: number
          avatar_color?: string
          best_streak?: number
          correct_count?: number
          created_at?: string
          game_id: string
          id?: string
          nickname: string
          rank?: number
          score?: number
          team_index?: number | null
        }
        Update: {
          answered_count?: number
          avatar_color?: string
          best_streak?: number
          correct_count?: number
          created_at?: string
          game_id?: string
          id?: string
          nickname?: string
          rank?: number
          score?: number
          team_index?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "game_player_results_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "game_results"
            referencedColumns: ["id"]
          },
        ]
      }
      game_results: {
        Row: {
          created_at: string
          host_id: string
          id: string
          played_at: string
          player_count: number
          question_count: number
          quiz_id: string | null
          quiz_title: string
          room_code: string
          room_id: string | null
          team_count: number
        }
        Insert: {
          created_at?: string
          host_id: string
          id?: string
          played_at?: string
          player_count?: number
          question_count?: number
          quiz_id?: string | null
          quiz_title?: string
          room_code?: string
          room_id?: string | null
          team_count?: number
        }
        Update: {
          created_at?: string
          host_id?: string
          id?: string
          played_at?: string
          player_count?: number
          question_count?: number
          quiz_id?: string | null
          quiz_title?: string
          room_code?: string
          room_id?: string | null
          team_count?: number
        }
        Relationships: []
      }
      players: {
        Row: {
          avatar_color: string
          fifty_hidden: number[] | null
          fifty_question_id: string | null
          id: string
          joined_at: string
          nickname: string
          room_id: string
          team_index: number | null
          used_double: boolean
          used_fifty: boolean
        }
        Insert: {
          avatar_color?: string
          fifty_hidden?: number[] | null
          fifty_question_id?: string | null
          id?: string
          joined_at?: string
          nickname: string
          room_id: string
          team_index?: number | null
          used_double?: boolean
          used_fifty?: boolean
        }
        Update: {
          avatar_color?: string
          fifty_hidden?: number[] | null
          fifty_question_id?: string | null
          id?: string
          joined_at?: string
          nickname?: string
          room_id?: string
          team_index?: number | null
          used_double?: boolean
          used_fifty?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "players_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          display_name: string
          id: string
        }
        Insert: {
          created_at?: string
          display_name?: string
          id: string
        }
        Update: {
          created_at?: string
          display_name?: string
          id?: string
        }
        Relationships: []
      }
      questions: {
        Row: {
          correct_index: number
          created_at: string
          difficulty: string
          explanation: string | null
          external_id: string | null
          id: string
          image_url: string | null
          is_verified: boolean
          options: Json
          order_index: number
          question_text: string
          question_type: string
          quiz_id: string
          source: string | null
          subcategory: string | null
          tags: string[]
          time_limit_seconds: number
          version: number
        }
        Insert: {
          correct_index?: number
          created_at?: string
          difficulty?: string
          explanation?: string | null
          external_id?: string | null
          id?: string
          image_url?: string | null
          is_verified?: boolean
          options?: Json
          order_index?: number
          question_text?: string
          question_type?: string
          quiz_id: string
          source?: string | null
          subcategory?: string | null
          tags?: string[]
          time_limit_seconds?: number
          version?: number
        }
        Update: {
          correct_index?: number
          created_at?: string
          difficulty?: string
          explanation?: string | null
          external_id?: string | null
          id?: string
          image_url?: string | null
          is_verified?: boolean
          options?: Json
          order_index?: number
          question_text?: string
          question_type?: string
          quiz_id?: string
          source?: string | null
          subcategory?: string | null
          tags?: string[]
          time_limit_seconds?: number
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "questions_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_play_stats: {
        Row: {
          created_at: string
          last_played_at: string
          play_count: number
          source_quiz_id: string
        }
        Insert: {
          created_at?: string
          last_played_at?: string
          play_count?: number
          source_quiz_id: string
        }
        Update: {
          created_at?: string
          last_played_at?: string
          play_count?: number
          source_quiz_id?: string
        }
        Relationships: []
      }
      quizzes: {
        Row: {
          category: string
          created_at: string
          id: string
          is_public: boolean
          language: string
          quiz_difficulty: string
          subcategory: string
          title: string
          user_id: string
        }
        Insert: {
          category?: string
          created_at?: string
          id?: string
          is_public?: boolean
          language?: string
          quiz_difficulty?: string
          subcategory?: string
          title?: string
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          is_public?: boolean
          language?: string
          quiz_difficulty?: string
          subcategory?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      rooms: {
        Row: {
          advance_mode: string
          code: string
          created_at: string
          cursor_index: number
          cursor_phase: string
          id: string
          phase_started_at: string | null
          quiz_id: string
          started_at: string | null
          status: string
          team_count: number
          team_mode: string
        }
        Insert: {
          advance_mode?: string
          code: string
          created_at?: string
          cursor_index?: number
          cursor_phase?: string
          id?: string
          phase_started_at?: string | null
          quiz_id: string
          started_at?: string | null
          status?: string
          team_count?: number
          team_mode?: string
        }
        Update: {
          advance_mode?: string
          code?: string
          created_at?: string
          cursor_index?: number
          cursor_phase?: string
          id?: string
          phase_started_at?: string | null
          quiz_id?: string
          started_at?: string | null
          status?: string
          team_count?: number
          team_mode?: string
        }
        Relationships: [
          {
            foreignKeyName: "rooms_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
        ]
      }
      subcategories: {
        Row: {
          category_id: string | null
          created_at: string | null
          id: string
          name: string
          slug: string
          sort_order: number
        }
        Insert: {
          category_id?: string | null
          created_at?: string | null
          id?: string
          name: string
          slug: string
          sort_order?: number
        }
        Update: {
          category_id?: string | null
          created_at?: string | null
          id?: string
          name?: string
          slug?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "subcategories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      advance_room: {
        Args: {
          p_expect_index: number
          p_expect_phase: string
          p_room_id: string
        }
        Returns: {
          advance_mode: string
          code: string
          created_at: string
          cursor_index: number
          cursor_phase: string
          id: string
          phase_started_at: string | null
          quiz_id: string
          started_at: string | null
          status: string
          team_count: number
          team_mode: string
        }
        SetofOptions: {
          from: "*"
          to: "rooms"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      archive_room: { Args: { p_room_id: string }; Returns: string }
      get_all_admin_quizzes: { Args: never; Returns: Json }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      join_room: {
        Args: { p_avatar_color?: string; p_code: string; p_nickname: string }
        Returns: {
          avatar_color: string
          fifty_hidden: number[] | null
          fifty_question_id: string | null
          id: string
          joined_at: string
          nickname: string
          room_id: string
          team_index: number | null
          used_double: boolean
          used_fifty: boolean
        }
        SetofOptions: {
          from: "*"
          to: "players"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      record_quiz_play: { Args: { p_source_id: string }; Returns: number }
      room_answers: {
        Args: { p_player_id: string; p_room_id: string }
        Returns: {
          answered_at: string
          choice_index: number
          id: string
          is_correct: boolean
          player_id: string
          points_awarded: number
          powerup: string
          question_id: string
          room_id: string
          streak_bonus: number
        }[]
      }
      room_players: {
        Args: { p_player_id: string; p_room_id: string }
        Returns: {
          avatar_color: string
          fifty_hidden: number[]
          fifty_question_id: string
          id: string
          joined_at: string
          nickname: string
          room_id: string
          team_index: number
          used_double: boolean
          used_fifty: boolean
        }[]
      }
      room_questions: {
        Args: { p_room_id: string }
        Returns: {
          id: string
          image_url: string
          options: Json
          order_index: number
          question_text: string
          question_type: string
          quiz_id: string
          time_limit_seconds: number
        }[]
      }
      room_reveals: {
        Args: { p_room_id: string }
        Returns: {
          correct_index: number
          question_id: string
        }[]
      }
      set_player_team: {
        Args: { p_player_id: string; p_team_index: number }
        Returns: {
          avatar_color: string
          fifty_hidden: number[] | null
          fifty_question_id: string | null
          id: string
          joined_at: string
          nickname: string
          room_id: string
          team_index: number | null
          used_double: boolean
          used_fifty: boolean
        }
        SetofOptions: {
          from: "*"
          to: "players"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      submit_answer: {
        Args: {
          p_choice: number
          p_player_id: string
          p_powerup?: string
          p_question_id: string
        }
        Returns: {
          answered_at: string
          choice_index: number
          id: string
          is_correct: boolean
          player_id: string
          points_awarded: number
          powerup: string | null
          question_id: string
          room_id: string
          streak_bonus: number
        }
        SetofOptions: {
          from: "*"
          to: "answers"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      upsert_admin_quiz_by_id_or_title: {
        Args: {
          p_category?: string
          p_difficulty?: string
          p_is_public?: boolean
          p_language?: string
          p_quiz_id?: string
          p_subcategory?: string
          p_title?: string
        }
        Returns: string
      }
      use_fifty_fifty: {
        Args: { p_player_id: string; p_question_id: string }
        Returns: number[]
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
