import React from "react";
import { Button } from "react-bootstrap";
import { Check } from "react-feather";

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  showCheck?: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isActive,
  onClick,
  showCheck = true,
}) => (
  <Button
    variant={isActive ? "primary" : "outline-primary"}
    className="mx-1 my-1 neumorphic-flat-pressed"
    onClick={onClick}
  >
    {label} {isActive && showCheck && <Check size={14} className="ms-1" />}
  </Button>
);

interface FilterButtonsProps {
  allCategories: string[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  allTags: string[];
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({
  allCategories,
  selectedCategory,
  setSelectedCategory,
  allTags,
  selectedTags,
  setSelectedTags,
}) => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center mb-3">
        <FilterButton
          label="All Categories"
          isActive={selectedCategory === null}
          onClick={() => setSelectedCategory(null)}
          showCheck={false} // Don't show check for "All Categories"
        />
        {allCategories.map((category) => (
          <FilterButton
            key={category}
            label={category}
            isActive={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>
      {/* <div className="d-flex flex-wrap justify-content-center mb-4">
        <FilterButton
          label="Clear Filters"
          isActive={selectedTags.length === 0}
          onClick={() => setSelectedTags([])}
          showCheck={false} // Don't show check for "Clear Filters"
        />
        {allTags.map((tag) => (
          <FilterButton
            key={tag}
            label={tag}
            isActive={selectedTags.includes(tag)}
            onClick={() =>
              setSelectedTags((prevTags) =>
                prevTags.includes(tag)
                  ? prevTags.filter((t) => t !== tag)
                  : [...prevTags, tag]
              )
            }
          />
        ))}
      </div> */}
    </>
  );
};
