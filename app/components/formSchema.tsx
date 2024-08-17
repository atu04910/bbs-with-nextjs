import { z } from "zod";

export const formSchema = z.object({
    username: z
        .string()
        .min(2, {message:"ユーザ名は 2 文字以上で入力してください"}),
    title: z
        .string()
        .min(2, {message:"タイトルは 2 文字以上で入力してください"}),
    content: z
        .string()
        .min(10, {message:"本文は 10 文字以上で入力してください"})
        .max(140, {message:"本文は 140 文字以内で入力してください。"}),
});