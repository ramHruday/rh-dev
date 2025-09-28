import { useState, useMemo } from "react";
import { Project, projectsData } from "../data/projectsData";

interface UseProjectFiltering {
  filteredProjects: Project[];
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
  allTags: string[];
  allCategories: string[];
}

export const useProjectFiltering = (): UseProjectFiltering => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allTags = useMemo(
    () => Array.from(new Set(projectsData.flatMap((project) => project.tags))),
    []
  );

  const allCategories = useMemo(
    () =>
      Array.from(new Set(projectsData.map((project) => project.category))).filter(
        Boolean
      ) as string[],
    []
  );

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = selectedCategory
        ? project.category === selectedCategory
        : true;
      const matchesTags =
        selectedTags.length === 0
          ? true
          : selectedTags.some((tag) => project.tags.includes(tag));
      return matchesCategory && matchesTags;
    });
  }, [selectedTags, selectedCategory]);

  return {
    filteredProjects,
    selectedTags,
    setSelectedTags,
    selectedCategory,
    setSelectedCategory,
    allTags,
    allCategories,
  };
};
