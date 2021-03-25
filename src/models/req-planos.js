const req = async () => {
    const response = await fetch("http://localhost:8080/plans");
    const dados = await response.json();
    return dados;
};