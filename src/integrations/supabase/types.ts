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
          id: string
          options: Json
          order_index: number
          question_text: string
          quiz_id: string
          time_limit_seconds: number
        }
        Insert: {
          correct_index?: number
          created_at?: string
          id?: string
          options?: Json
          order_index?: number
          question_text?: string
          quiz_id: string
          time_limit_seconds?: number
        }
        Update: {
          correct_index?: number
          created_at?: string
          id?: string
          options?: Json
          order_index?: number
          question_text?: string
          quiz_id?: string
          time_limit_seconds?: number
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
      quizzes: {
        Row: {
          created_at: string
          id: string
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          title?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      rooms: {
        Row: {
          code: string
          created_at: string
          id: string
          quiz_id: string
          started_at: string | null
          status: string
          team_count: number
        }
        Insert: {
          code: string
          created_at?: string
          id?: string
          quiz_id: string
          started_at?: string | null
          status?: string
          team_count?: number
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          quiz_id?: string
          started_at?: string | null
          status?: string
          team_count?: number
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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
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
          options: Json
          order_index: number
          question_text: string
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
      use_fifty_fifty: {
        Args: { p_player_id: string; p_question_id: string }
        Returns: number[]
      }
    }
    Enums: {
      [_ in never]: never
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
    Enums: {},
  },
} as const
