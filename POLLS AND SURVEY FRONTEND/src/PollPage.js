import React, { useState } from "react";

const PollPage = () => {
    // State to manage user-created polls
    const [polls, setPolls] = useState([]);

    // State for creating a new poll
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", ""]);

    // Pre-defined available polls
    const availablePolls = [
        {
            question: "What is your favorite programming language?",
            options: ["JavaScript", "Python", "Java", "C++"],
        },
        {
            question: "Which is your preferred mobile OS?",
            options: ["Android", "iOS"],
        },
        {
            question: "What type of movies do you like?",
            options: ["Action", "Comedy", "Drama", "Horror"],
        },
    ];

    // Add a new option input for poll creation
    const addOption = () => {
        setOptions([...options, ""]);
    };

    // Create a new poll and add it to the list
    const createPoll = () => {
        if (question.trim() && options.every((opt) => opt.trim())) {
            setPolls([...polls, { question, options }]);
            setQuestion("");
            setOptions(["", ""]);
            alert("Poll created successfully!");
        } else {
            alert("Please fill in the question and all options.");
        }
    };

    return (
        <div className="poll-page">
            <h1>Polls and Surveys</h1>

            {/* Create Poll Form */}
            <div className="create-poll">
                <h2>Create a Poll</h2>
                <input
                    type="text"
                    placeholder="Enter your question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                {options.map((opt, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Option ${index + 1}`}
                        value={opt}
                        onChange={(e) =>
                            setOptions(
                                options.map((o, i) => (i === index ? e.target.value : o))
                            )
                        }
                    />
                ))}
                <button onClick={addOption}>Add Option</button>
                <button onClick={createPoll}>Create Poll</button>
            </div>

            <hr />

            {/* Available Polls */}
            <div className="poll-list">
                <h2>Available Polls</h2>
                {availablePolls.map((poll, index) => (
                    <div key={index} className="poll">
                        <h3>{poll.question}</h3>
                        <ul>
                            {poll.options.map((opt, i) => (
                                <li key={i}>{opt}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <hr />

            {/* User-Created Polls */}
            <div className="user-polls">
                <h2>Your Created Polls</h2>
                {polls.length === 0 ? (
                    <p>No polls created yet.</p>
                ) : (
                    polls.map((poll, index) => (
                        <div key={index} className="poll">
                            <h3>{poll.question}</h3>
                            <ul>
                                {poll.options.map((opt, i) => (
                                    <li key={i}>{opt}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default PollPage;
