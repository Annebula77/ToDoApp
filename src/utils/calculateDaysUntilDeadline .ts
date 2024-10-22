
export const calculateDaysUntilDeadline = (dueDate: string | null): { daysLeft: number, isOverdue: boolean } => {
  if (!dueDate) return { daysLeft: 0, isOverdue: false };

  const currentDate = new Date();
  const deadlineDate = new Date(dueDate);

  const timeDiff = deadlineDate.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return { daysLeft, isOverdue: daysLeft < 0 };
};
