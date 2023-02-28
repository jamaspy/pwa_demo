import React from "react";
interface TagProps {
  tag: Category;
}

export const Tag = ({ tag }: TagProps) => {
  return (
    <div className="bg-purple-100 text-purple-900 rounded-full px-2 py-1 mr-2 mb-2 text-sm">
      <p>{tag as unknown as string}</p>
    </div>
  );
};
