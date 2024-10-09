import React, { useState } from "react";
import { practiceData } from "../../lib/dummyData";

const PracticeSheet = ({ position }) => {
  const formattedPosition = position.replace("-", " ").toLowerCase().trim();
  const activePosition = practiceData.find(
    (item) => item.position.toLowerCase() === formattedPosition
  );

  const initialTasksState = activePosition
    ? Object.keys(activePosition.tasks).reduce((acc, category) => {
        acc[category] = activePosition.tasks[category];
        return acc;
      }, {})
    : {};

  const [tasks, setTasks] = useState(initialTasksState);
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const handleTaskToggle = (category, taskIndex) => {
    const updatedTasks = {
      ...tasks,
      [category]: tasks[category].map((task, index) =>
        index === taskIndex ? { ...task, completed: !task.completed } : task
      ),
    };
    setTasks(updatedTasks);
  };

  const completedTasks = Object.values(tasks)
    .flat()
    .filter((task) => task.completed).length;
  const totalTasks = Object.values(tasks).flat().length;
  const progress = totalTasks ? (completedTasks / totalTasks) * 100 : 0;

  if (!activePosition) {
    return (
      <p className="text-gray-500">
        No practice data available for this position.
      </p>
    );
  }

  return (
    <div className="p-4 bg-white w-full h-screen pb-20 ">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">
        Practice Sheet for {activePosition.position}
      </h2>

      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-purple-500 h-4 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mb-4 text-purple-600">
        Progress: {completedTasks} / {totalTasks} tasks completed
      </p>

      <div className="space-y-4">
        {Object.keys(tasks).map((category) => (
          <div
            key={category}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div
              onClick={() => toggleCategory(category)}
              className="cursor-pointer p-4 bg-purple-200 flex justify-between items-center transition-colors duration-200 hover:bg-purple-300"
            >
              <span className="font-bold text-lg text-purple-700">
                {category}
              </span>
              <span>{openCategories[category] ? "▲" : "▼"}</span>
            </div>

            {openCategories[category] && (
              <ul className="p-4 space-y-4 transition-all duration-500 delay-75 mb-4">
                {tasks[category].map((task, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between p-2 bg-purple-50 shadow-sm rounded-md transition-colors duration-200 hover:bg-purple-100"
                  >
                    <span
                      className={`${
                        task.completed
                          ? "line-through text-gray-500"
                          : "text-purple-800"
                      }`}
                    >
                      {task.task}
                    </span>
                    <a
                      href={task.resources}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:underline border-2 rounded-md p-1"
                    >
                      <img
                        src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
                        alt="GeeksforGeeks Logo"
                        className="h-6 w-6 inline"
                      />
                    </a>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleTaskToggle(category, index)}
                      className="cursor-pointer"
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeSheet;
