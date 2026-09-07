"use server";

import fs from "fs/promises";
import path from "path";

export async function getTemplateSource(filename: string) {
  try {
    const filePath = path.join(process.cwd(), "app", "template", filename);
    const content = await fs.readFile(filePath, "utf-8");
    return content;
  } catch (error) {
    console.error("Error reading template file:", error);
    throw new Error("Source code not found.");
  }
}
