import React, { useState } from "react";
import axios from "axios";

const CreatePoll = () => {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", ""]);

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const addOption = () => setOptions([...options, ""]);

    const handleSubmit = () => {
        axios
            .post("/api/polls/create", { question, options: options.map((text) => ({ text })) })
            .then(() => alert("Poll created!"));
    };

    return (
        <div>
            <h2>Create Poll</h2>
            <input
                type="text"
                placeholder="Poll question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            {options.map((option, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                    />
                </div>
            ))}
            <button onClick={addOption}>Add Option</button>
            <button onClick={handleSubmit}>Create Poll</button>
        </div>
    );
};

export default CreatePoll;
