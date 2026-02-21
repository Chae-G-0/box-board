import supabase from "@/lib/supabase";

export async function signUpAPI({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signInAPI({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signOutAPI() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    await supabase.auth.signOut({
      scope: "local",
    });
  }
}
