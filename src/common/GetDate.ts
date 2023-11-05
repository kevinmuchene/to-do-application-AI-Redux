export function getCurrentDateFormatted(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() is zero-based
  const day = date.getDate().toString().padStart(2, "0");

  return `${month}-${day}-${year}`;
}
