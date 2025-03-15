

import { useEffect, useState } from 'react';

export const useFetch = (apipath, queryTerm = '') => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const key = import.meta.env.VITE_API_KEY;
    const url = queryTerm
        ? `https://api.themoviedb.org/3/${apipath}?api_key=${key}&query=${queryTerm}`
        : `https://api.themoviedb.org/3/${apipath}?api_key=${key}`;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                console.log('Fetching data from:', url);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData = await response.json();
                console.log('API response:', jsonData);
                setData(jsonData.results || []);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [apipath, queryTerm]); // Dependencies updated

    return { data, loading, error };
};
