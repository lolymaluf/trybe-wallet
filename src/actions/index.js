// Coloque aqui suas actions
export const PEGA_USUARIO = 'PEGA_USUARIO';

export const pegaUsuario = (email) => ({
  type: 'PEGA_USUARIO',
  email,
});
