import { useEffect, useRef, useState } from "react";
import "./MultiSelect.css";

const API_URL = "https://jsonplaceholder.typicode.com/users"; // to fetch data from API

const MultiSelect = () => {
  const [suggestionList, setSuggestionList] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setSuggestionList(data);
        setData(data); // Store the original data for resetting
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter suggestions based on input
  const filterSuggestion = () => {
    if (!inputRef.current) return;

    let text = inputRef.current.value;
    let filteredList = data.filter(
      (item) =>
        item.name.toLowerCase().includes(text.toLowerCase()) &&
        !selectedTags.includes(item.name)
    );
    setSuggestionList(filteredList);
  };

  const handleRemoveTag = (item) => {
    const tagList = [...selectedTags];
    const index = tagList.indexOf(item);

    if (index > -1) {
      tagList.splice(index, 1);
      setSelectedTags(tagList);

      // Add the removed item back to the suggestions list
      setSuggestionList((prevList) => [...prevList, { name: item }]);
    }
  };

  const handleAddTag = (item) => {
    if (!inputRef.current) return;

    inputRef.current.value = "";
    setSelectedTags((prevTags) => [...prevTags, item.name]);

    // Filter the suggestions after adding a tag
    filterSuggestion();
  };

  const handleAllClear = () => {
    if (!inputRef.current) return;

    inputRef.current.value = "";
    setSelectedTags([]);
    setSuggestionList(data); // Reset suggestions to full list
  };

  useEffect(() => {
    filterSuggestion();
  }, [selectedTags]);

  const handleInputBackSpace = (e) => {
    if (!inputRef.current || inputRef.current.value.length > 0) return;

    const { key } = e;
    if (key === "Backspace") {
      let newList = [...selectedTags];
      newList.pop();
      setSelectedTags(newList);
    }
  };

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.addEventListener("keydown", handleInputBackSpace);

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("keydown", handleInputBackSpace);
      }
    };
  });

  return (
    <div className="MultiSelect">
      <div className="tags-input">
        {selectedTags.map((item, index) => (
          <Tag item={item} key={index} handleRemoveTag={handleRemoveTag} />
        ))}
        <input
          type="text"
          onChange={filterSuggestion}
          ref={inputRef}
          size={1}
        />
        {selectedTags.length > 0 && (
          <Button onClick={handleAllClear} bgColor="#ffffff" />
        )}
      </div>
      <div className="Suggestion__list">
        {suggestionList.length > 0
          ? suggestionList.map((item, index) => (
              <div
                className="Suggestion__item"
                key={index}
                onClick={() => handleAddTag(item)}
              >
                {item.name}
              </div>
            ))
          : inputRef.current &&
            inputRef.current.value.length > 0 && (
              <div
                className="Suggestion__item"
                onClick={() => handleAddTag({ name: inputRef.current.value })}
              >
                {inputRef.current.value}
              </div>
            )}
      </div>
    </div>
  );
};

export default MultiSelect;

export const Tag = ({ item, handleRemoveTag }) => {
  return (
    <span className="Tag">
      <span>{item}</span>
      <Button onClick={() => handleRemoveTag(item)} bgColor="#edeffb" />
    </span>
  );
};

const Button = ({ onClick, bgColor }) => {
  return (
    <button
      onClick={onClick}
      className="Button"
      style={{ backgroundColor: bgColor }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="times">
        <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
      </svg>
    </button>
  );
};
