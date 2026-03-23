export function getCookieValue(name) {
  if (typeof document === "undefined") {
    return null;
  }

  const cookies = document.cookie ? document.cookie.split("; ") : [];
  const target = `${name}=`;

  for (const cookie of cookies) {
    if (cookie.startsWith(target)) {
      return decodeURIComponent(cookie.slice(target.length));
    }
  }

  return null;
}

export function getAuthToken() {
  return getCookieValue("token");
}
