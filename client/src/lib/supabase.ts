import { createClient } from '@supabase/supabase-js';

const metaEnv = (import.meta as any).env || {};

// Environment variables for Supabase Project
const supabaseUrl = metaEnv.VITE_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = metaEnv.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const isSupabaseConfigured = Boolean(
  metaEnv.VITE_SUPABASE_URL && metaEnv.VITE_SUPABASE_ANON_KEY
);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserRole = 
  | 'founder'
  | 'admin'
  | 'lead'
  | 'instructor_uiux'
  | 'media'
  | 'hr'
  | 'student';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  team_title?: string;
  avatar_url?: string;
  camp_name?: string;
  created_at?: string;
}

export interface UserProgressItem {
  id?: string;
  user_id: string;
  section_id?: string;
  topic_id: string;
  track_id?: string;
  completed: boolean;
  score?: number;
  updated_at?: string;
}

export interface QuizSubmissionItem {
  id?: string;
  user_id: string;
  topic_id: string;
  score: number;
  total_questions: number;
  passed: boolean;
  submitted_at?: string;
}

export interface AchievementItem {
  id?: string;
  user_id: string;
  badge_title: string;
  badge_icon: string;
  unlocked_at?: string;
}

export interface AssignmentItem {
  id: string;
  user_id: string;
  topic_id: string;
  file_url: string;
  file_name: string;
  status: 'submitted' | 'graded' | 'revision_requested';
  grade?: string;
  feedback?: string;
  submitted_at: string;
  user_name?: string;
}

export interface NotificationItem {
  id: string;
  user_id: string;
  title: string;
  message: string;
  read: boolean;
  created_at: string;
}

