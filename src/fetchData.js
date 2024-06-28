import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FetchData(props) {
    const [rank, setRank] = useState(null);

    useEffect(() => {
        const fetchRank = async () => {
            try {
                const response = await axios.post('http://localhost/snake&ladder/fetchData.php', {
                    username: props.user,
                });

                if (response.data && response.data.rank) {
                    setRank(response.data.rank);
                } else {
                    console.error('No rank data returned:', response.data);
                }
            } catch (error) {
                console.error('Failed to fetch rank:', error);
            }
        };

        fetchRank();
    }, [props.user]);

    return (
        <>
            <span>{rank !== null ? `Rank: ${rank}` : 'Loading...'}</span>
        </>
    );
}
