export function getFormatDate(input: string | number): string {
    let date;
    if (typeof input === "string") {
      // Validate input string format before creating Date object
      const timestamp = Date.parse(input);
      if (!isNaN(timestamp)) {
        date = new Date(timestamp);
      } else {
        return "";
      }
    } else if (typeof input === "number") {
      // Assuming input is a valid timestamp
      date = new Date(input);
    } else {
      return "Invalid input type";
    }
  
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  }