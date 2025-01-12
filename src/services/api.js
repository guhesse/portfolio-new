const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://gustavohesse.com.br';

export const fetchProjects = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/data/projects.json`);
        console.log('API response:', response);
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        console.log('API data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching projects from API, falling back to local data:', error);
        return [];
    }
};

// Adicione outras funções de API conforme necessário