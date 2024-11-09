export type jobs = {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: Array<string>;
  company: string;
};

export const fetchJobs = async (url: string) => {
  const response: Response = await fetch(url);
  const newJobs: jobs[] = await response.json();
  return newJobs;
};
