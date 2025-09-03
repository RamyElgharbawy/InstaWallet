export const calculateNextDueDate = (startDate: string): Date => {
  const start = new Date(startDate);
  const today = new Date();

  // Get the day of the month from start date
  const dayOfMonth = start.getDate();

  // Start with current month
  let nextDue = new Date(today.getFullYear(), today.getMonth(), dayOfMonth);

  // If the due date for this month has already passed, move to next month
  // if (nextDue <= today) {
  //   nextDue = new Date(today.getFullYear(), today.getMonth() + 1, dayOfMonth);
  // }

  // Handle edge case where the target day doesn't exist in the month (e.g., Feb 31st)
  // If we set day 31 and the month only has 30 days, it will automatically adjust
  if (nextDue.getDate() !== dayOfMonth) {
    // The month doesn't have enough days, so use the last day of that month
    nextDue = new Date(nextDue.getFullYear(), nextDue.getMonth() + 1, 0);
  }

  return nextDue;
};

/**
 * Checks if a payment is overdue
 */
export const isOverdue = (dueDate: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day

  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0); // Reset time to start of day

  return due < today;
};
