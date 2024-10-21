import { getRepositories } from '../services/repoService.js'; 

function filterCSharpRepos(repos) {
  return repos.filter(repo => repo.language === 'C#');
  };

function getOldestRepos(repos) {
  return repos.sort((a, b) => new Date(a.created_at) - new Date(b.created_at)).slice(0, 5);
  };

export async function repositories(req, res) {
  try {
    const repos = await getRepositories(); 
    const cSharpRepos = filterCSharpRepos(repos);
    const oldestRepos = getOldestRepos(cSharpRepos);

    const carrosselItems = oldestRepos.map(repo => ({
      header: {
        type: "application/vnd.lime.media-link+json",
        value: {
          title: repo.full_name,
          text: repo.description,
          type: "image/jpeg",
          uri: repo.owner.avatar_url
        }
      },
    }));

    const carrosselResponse = {
      itemType: "application/vnd.lime.document-select+json",
      items: carrosselItems
    };

    res.status(200).json(carrosselResponse);
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error);

    if (error.response && error.response.status === 404) {
      res.status(404).json({ erro: 'Repositórios não encontrados' });
    } else {
      res.status(500).json({ erro: 'Erro ao buscar repositórios' });
    }
  }
};