export interface StatCardsStat {
  label: string;
  value: string | number;
  title?: string;
}

export interface StatCardsProps {
  stats: StatCardsStat[];
}
