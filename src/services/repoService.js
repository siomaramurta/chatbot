import axios from 'axios';

export async function getRepositories() {
  try {
    const response = await axios.get('https://api.github.com/orgs/takenet/repos', {
      params: {
        per_page: 10,
        sort: 'created',
        direction: 'asc',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error);
    throw new Error('Erro ao buscar repositórios');
  }
};

