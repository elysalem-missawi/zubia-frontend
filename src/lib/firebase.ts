import { initializeApp, getApps, getApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  FacebookAuthProvider 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBlNaz-Cgus3bGgDyZ9aHjlZZAxl-8jafg",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "zubia-app-66b44.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "zubia-app-66b44",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "zubia-app-66b44.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "958537431560",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:958537431560:web:2beb2ceee298d4c6c36fbd",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-6YTEM5TKP5"
};

// إعداد Firebase مع منع تكرار تهيئة التطبيق عند إعادة التجميل (SSR في Next.js)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// تصدير خدمات المصادقة
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export default app;