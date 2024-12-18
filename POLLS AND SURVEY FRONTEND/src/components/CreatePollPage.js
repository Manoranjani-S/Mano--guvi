import React, { useState } from 'react';
import axios from 'axios';

const CreatePollPage = () => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '']); // At least two options initially
    const [message, setMessage] = useState('');

    const handleOptionChange = (index, value) => {
        const updatedOptions = [...options];
        updatedOptions[index] = value;
        setOptions(updatedOptions);
    };

    const addOption = () => setOptions([...options, '']); // Add an empty option

    const submitPoll = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve token from localStorage
            const response = await axios.post(
                'http://localhost:5000/api/polls/create',
                { question, options },
                {
                    headers: { Authorization: token }, // Include the token in headers
                }
            );

            setMessage('Poll created successfully!');
            setQuestion(''); // Reset form
            setOptions(['', '']);
        } catch (error) {
            console.error(error);
            setMessage('Failed to create poll. Please try again.');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Create a New Poll</h1>
            <input
                type="text"
                placeholder="Enter your poll question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                style={{ display: 'block', marginBottom: '10px', width: '100%' }}
            />
            <h3>Options</h3>
            {options.map((option, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        style={{ width: '80%' }}
                    />
                </div>
            ))}
            <button onClick={addOption} style={{ marginRight: '10px' }}>
                Add Option
            </button>
            <button onClick={submitPoll}>Create Poll</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreatePollPage;
