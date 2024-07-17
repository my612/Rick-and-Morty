// Check if the browser supports cookies
export function checkCookieSupport() {
  return navigator.cookieEnabled;
}

// Create or update a cookie
export function createOrUpdateCookie(
  cookieName: string,
  value: string,
  daysToExpire: number
) {
  if (checkCookieSupport()) {
    const date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${cookieName}=${value};${expires};path=/`;
  }
}

// Read a cookie
export function readCookie(cookieName: string) {
  const name = `${cookieName}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length);
    }
  }
  return "";
}

// Update the favorites list
export function addFavorites(item: string) {
  let favoritesList = JSON.parse(readCookie("favorites") || "[]");
  if (!favoritesList.includes(item)) {
    favoritesList.push(item);
  }
  createOrUpdateCookie("favorites", JSON.stringify(favoritesList), 7);
}
export function removeFavorite(item: string) {
  let favoritesList = JSON.parse(readCookie("favorites") || "[]");
  favoritesList = favoritesList.filter((favorite: string) => favorite !== item);
  createOrUpdateCookie("favorites", JSON.stringify(favoritesList), 7);
}
// Delete a cookie
export function deleteCookie(cookieName: string) {
  createOrUpdateCookie(cookieName, "", -1);
}
