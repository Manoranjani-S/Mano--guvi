import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AvailablePollsPage = () => {
    const [polls, setPolls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch polls when the component mounts
    useEffect(() => {
        const fetchPolls = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming JWT token is stored in localStorage
                const response = await axios.get('http://localhost:5000/api/polls', {
                    headers: {
                        Authorization: token, // Attach the token to the Authorization header
                    },
                });
                setPolls(response.data); // Store the polls in state
            } catch (err) {
                setError('Failed to load polls. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchPolls();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Available Polls</h1>
            {loading && <p>Loading polls...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && polls.length === 0 && <p>No polls available.</p>}
            <div>
                {polls.map((poll) => (
                    <div key={poll._id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                        <h3>{poll.question}</h3>
                        <ul>
                            {poll.options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                        <p>Votes: {poll.votes.reduce((total, vote) => total + vote, 0)}</p>
                        {/* You can add a "Vote" button or "View Results" button here */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailablePollsPage;
