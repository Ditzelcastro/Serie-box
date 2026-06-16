const BASE_URL = "https://api.tvmaze.com";

export async function buscarSeries(termo) {
  const url = `${BASE_URL}/search/shows?q=${encodeURIComponent(termo)}`;
  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error("Não foi possível buscar as séries. Tente novamente.");
  }

  const dados = await resposta.json();
  return dados.map((item) => item.show);
}

export async function buscarSeriePorId(id) {
  const resposta = await fetch(`${BASE_URL}/shows/${id}`);

  if (!resposta.ok) {
    throw new Error("Série não encontrada.");
  }

  return resposta.json();
}
