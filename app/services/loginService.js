import { AsyncStorage, Alert } from "react-native";

export async function register(username, password) {
  await AsyncStorage.setItem(username, password);
  return true;
}

export async function login(username, password) {
  let expectedPassword = await AsyncStorage.getItem(username);
  if (expectedPassword === password) {
    _doLogin(username, password);
  } else {
    return "Invalid username/password";
  }
}

async function _doLogin(username) {
  await AsyncStorage.setItem("isLoggedIn", "true");
  await AsyncStorage.setItem("whoIsLoggedIn", username);
  return true;
}

export async function logout() {
  let username = await getUser();
  await AsyncStorage.removeItem("whoIsLoggedIn");
  await AsyncStorage.removeItem("isLoggedIn");
  //await AsyncStorage.removeItem(username);
}

export async function getUser() {
  let isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
  return isLoggedIn === "true"
    ? await AsyncStorage.getItem("whoIsLoggedIn")
    : "";
}

export async function isLoggedIn() {
  let isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
  return isLoggedIn === "true";
}
