// server.js
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);

const SCHOOL_DOMAIN = "e-mirim.hs.kr";

//로그인
app.post("/auth/login", async (req, res) => {
  try {
    const { emailId, password } = req.body; 

    if (!emailId || !password) {
      return res.status(400).json({ message: "emailId/password required" });
    }

    const email = `${emailId}@${SCHOOL_DOMAIN}`;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data?.session) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const { access_token, refresh_token, user } = data.session;

    res.cookie("access_token", access_token, {
      httpOnly: true,
      secure: false, 
      sameSite: "lax",
      maxAge: 1000 * 60 * 60, 
    });

    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      secure: false, 
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7, 
    });

    return res.json({ user, profile: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Login server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`테야테야 갈테야 로컬로 갈테야 http://localhost:${PORT}`);
});
