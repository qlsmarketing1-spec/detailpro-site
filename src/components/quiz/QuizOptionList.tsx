'use client';

export interface QuizOption {
  value: string;
  label: string;
  exclusive?: boolean;
}

interface QuizOptionListProps {
  type: 'single' | 'multi';
  options: QuizOption[];
  isSelected: (value: string) => boolean;
  onToggle: (opt: QuizOption) => void;
}

export default function QuizOptionList({ type, options, isSelected, onToggle }: QuizOptionListProps) {
  return (
    <div className="qz-options">
      {options.map((opt) => {
        const selected = isSelected(opt.value);
        return (
          <div
            key={opt.value}
            role="button"
            tabIndex={0}
            className={`qz-option qz-type-${type}${selected ? ' qz-selected' : ''}`}
            onClick={() => onToggle(opt)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onToggle(opt);
              }
            }}
          >
            <span className="qz-box"><span className="qz-dot" /></span>
            <span>{opt.label}</span>
          </div>
        );
      })}
    </div>
  );
}
