import { Chip } from "@nextui-org/react";

export default function TagGroup({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Chip key={tag}>{tag}</Chip>
      ))}
    </div>
  );
};