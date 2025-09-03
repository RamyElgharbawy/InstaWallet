// format iso date to local date

export const formatDate = (dateInput: string | Date): string => {
  // Handle null/undefined cases
  if (!dateInput) {
    return "";
  }

  // If it's already a Date object, use it directly : convert to Date
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  return date.toLocaleDateString("en-GB");
};
