import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup,
  signOut
} from "firebase/auth";
import { auth, googleProvider } from "./firebase";

// 1. إنشاء حساب جديد بالبريد الإلكتروني
export const registerWithEmail = async (email: string, pass: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
  return userCredential.user;
};

// 2. تسجيل الدخول بالبريد الإلكتروني
export const loginWithEmail = async (email: string, pass: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, pass);
  return userCredential.user;
};

// 3. تسجيل الدخول عبر Google
export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

// 4. تسجيل الخروج
export const logout = async () => {
  await signOut(auth);
};