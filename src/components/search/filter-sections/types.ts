
export interface ConcentrationFilter {
  operator: 'gt' | 'lt';
  value: string;
}

export interface PerformanceSectionProps {
  returnMin: string;
  returnMax: string;
  sharpeMin: number[];
  onReturnMinChange: (value: string) => void;
  onReturnMaxChange: (value: string) => void;
  onSharpeMinChange: (value: number[]) => void;
}

export interface ConcentrationSectionProps {
  secConc: ConcentrationFilter;
  sectConc: ConcentrationFilter;
  onSecConcChange: (value: ConcentrationFilter) => void;
  onSectConcChange: (value: ConcentrationFilter) => void;
}

export interface TimeFrameSectionProps {
  timeFrame: string;
  onTimeFrameChange: (value: string) => void;
}

export interface BenchmarkGroupSectionProps {
  benchmark: string;
  groupId: string;
  onBenchmarkChange: (value: string) => void;
  onGroupIdChange: (value: string) => void;
}
