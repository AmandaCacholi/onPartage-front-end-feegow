export const putPlanos = (id, dados) => {
    fetch(`https://onpartage-backend.herokuapp.com/plans/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    })
    .then((response) => response.json())
    .then((dados) => {
        console.log("Atualizado com sucesso", dados)
    })
    .catch((erro) => console.error("Erro: ", erro))
}