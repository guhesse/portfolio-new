import projects from '../data/projects';

const API_BASE_URL = 'https://gustavohesse.com.br'; // Substitua pela URL da sua API

export const fetchProjects = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/projects`);
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching projects from API, falling back to local data:', error);
        return projects;
    }
};

// Adicione outras funções de API conforme necessário