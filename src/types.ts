import { type Database } from "@/database.types";

// TODO: 데이터베이스 테이블 추가하고 타입 정의하기

export type PostEntity = Database["public"]["Tables"];

export type UseMutationCallback = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onMutate?: () => void;
  onSettled?: () => void;
};
