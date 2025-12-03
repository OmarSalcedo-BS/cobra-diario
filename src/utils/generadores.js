export function generarToken() {
  let token = "";
  for (let i = 0; i < 10; i++) {
    token += Math.random().toString(36).substring(2);
  }
  return token;
}

export function generarId() {
  return Math.random().toString(36).substring(2);
}
