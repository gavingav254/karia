import { spawn } from "child_process";

export function askGemma(prompt) {
  return new Promise((resolve, reject) => {

    console.log("🚀 Launching LiteRT...");

const gemma = spawn(
    "C:\\Users\\user\\AppData\\Local\\Programs\\Python\\Python313\\Scripts\\litert-lm.exe",   

      [
        "run",
        "karia-gemma",
        "--prompt",
        prompt
      ],
      {
        shell: false
      }
    );

    let stdout = "";
    let stderr = "";

    gemma.stdout.on("data", (data) => {
      console.log("📤 stdout chunk received");
      stdout += data.toString();
    });

    gemma.stderr.on("data", (data) => {
      console.log("⚠️ stderr:", data.toString());
      stderr += data.toString();
    });

    gemma.on("error", (err) => {
      console.log("❌ Spawn error:", err);
      reject(err);
    });

    gemma.on("close", (code) => {
      console.log("✅ Process closed with code:", code);
      console.log("===== STDOUT =====");
      console.log(stdout);

      if (code !== 0) {
        reject(stderr || `Exited with code ${code}`);
        return;
      }

      resolve(stdout.trim());
    });

  });
}