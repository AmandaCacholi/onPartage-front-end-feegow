export const req = async () => {
  const response = await fetch(
    "https://onpartage-backend.herokuapp.com/costumers"
  );
  const dados = await response.json();
  return dados;
};
