export function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().substr(2, 2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}.${month}.${day}`;
}

export function calculateTime(createdAt) {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const diffSeconds = Math.floor((now - createdDate) / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffMonths / 12);

  if (diffSeconds < 120) {
    return '1 minute ago';
  }
  if (diffMinutes < 60) {
    return `${diffMinutes} minutes ago`;
  }
  if (diffHours < 2) {
    return '1 hour ago';
  }
  if (diffHours < 24) {
    return `${diffHours} hours ago`;
  }
  if (diffDays < 2) {
    return '1 day ago';
  }
  if (diffDays <= 30) {
    return `${diffDays} days ago`;
  }
  if (diffMonths < 2) {
    return '1 month ago';
  }
  if (diffMonths <= 11) {
    return `${diffMonths} months ago`;
  }
  if (diffYears < 2) {
    return '1 year ago';
  }
  return `${Math.floor(diffMonths / 12)} years ago`;
}