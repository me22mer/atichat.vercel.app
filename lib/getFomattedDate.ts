export default function getFormattedDate(dateString: string): string {
    try {
      // Attempt to create a Date object from the provided dateString
      const dateObject = new Date(dateString);
  
      // Check if the dateObject is valid
      if (isNaN(dateObject.getTime())) {
        throw new Error("Invalid date");
      }
  
      // If the date is valid, format and return it
      return new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(dateObject);
    } catch (error) {

      return "SOON";
    }
  }
  