const getCookieSameSite = () => {
  const value = (process.env.COOKIE_SAME_SITE || "").toLowerCase();

  if (value === "strict" || value === "lax" || value === "none") {
    return value;
  }

  return process.env.NODE_ENV === "production" ? "none" : "lax";
};

const getCookieSecure = (sameSite) => {
  if (process.env.COOKIE_SECURE === "true") {
    return true;
  }

  if (process.env.COOKIE_SECURE === "false") {
    return false;
  }

  return process.env.NODE_ENV === "production" || sameSite === "none";
};

export const getTokenCookieOptions = () => {
  const sameSite = getCookieSameSite();

  return {
    httpOnly: true,
    sameSite,
    secure: getCookieSecure(sameSite),
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };
};

export const getClearTokenCookieOptions = () => {
  const sameSite = getCookieSameSite();

  return {
    httpOnly: true,
    sameSite,
    secure: getCookieSecure(sameSite),
  };
};

export const getTokenFromRequest = (req) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    return authHeader.split(" ")[1];
  }

  const cookieHeader = req.headers.cookie || "";
  const tokenCookie = cookieHeader
    .split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith("token="));

  if (tokenCookie) {
    return decodeURIComponent(tokenCookie.split("=")[1]);
  }

  return req.body?.token || null;
};
