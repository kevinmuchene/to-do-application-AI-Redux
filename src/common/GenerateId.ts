import { v4 as uuidv4 } from "uuid";

export function generateUuid(): string {
  return uuidv4(); // Generates a UUID string
}

// const randomId = generateUuid();
// console.log(randomId);
