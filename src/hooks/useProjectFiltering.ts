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

export const useProjectFiltering = (featuredProjectLabels?: string[]): UseProjectFiltering => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const baseProjects = useMemo(() => {
    if (featuredProjectLabels) {
      return projectsData.filter((project) =>
        featuredProjectLabels.includes(project.label)
      );
    }
    return projectsData;
  }, [featuredProjectLabels]);

  const allTags = useMemo(
    () => Array.from(new Set(baseProjects.flatMap((project) => project.tags))),
    [baseProjects]
  );

  const allCategories = useMemo(
    () =>
      Array.from(new Set(baseProjects.map((project) => project.category))).filter(
        Boolean
      ) as string[],
    [baseProjects]
  );

  const filteredProjects = useMemo(() => {
    return baseProjects.filter((project) => {
      const matchesCategory = selectedCategory
        ? project.category === selectedCategory
        : true;
      const matchesTags =
        selectedTags.length === 0
          ? true
          : selectedTags.some((tag) => project.tags.includes(tag));
      return matchesCategory && matchesTags;
    });
  }, [selectedTags, selectedCategory, baseProjects]);

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
