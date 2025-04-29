import React, { useState } from "react";

type StarRatingProps = {
  name?: string;
  defaultValue?: number;
  onChange?: (value: number) => void;
  label: string;
};

export default function StarRating({
  name = "rating",
  defaultValue = 0,
  onChange,
  label,
}: StarRatingProps) {
  const [selected, setSelected] = useState(defaultValue);

  const handleChange = (value: number) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className="rating  flex  items-center gap-1 w-full ">
      <label className="w-max text-[13px]">{label}</label>
      {[1, 2, 3, 4, 5].map((value) => (
        <input
          key={value}
          type="radio"
          name={name}
          className="mask mask-star-2 bg-orange-400"
          aria-label={`${value} star`}
          checked={selected === value}
          onChange={() => handleChange(value)}
        />
      ))}
    </div>
  );
}
