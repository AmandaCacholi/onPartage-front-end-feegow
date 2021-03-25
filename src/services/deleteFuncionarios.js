export const deleteFuncionarios = (id, dados) => {
    fetch(`https://onpartage-backend.herokuapp.com/employees/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    })
    .then((response) => response.json())
    .then((dados) => {
        console.log("Excluído com sucesso", dados)
    })
    .catch((erro) => console.error("Erro: ", erro))
}