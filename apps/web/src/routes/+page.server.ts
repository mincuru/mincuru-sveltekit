export type OutPutData = {
  value: number;
};

export const load = async (): Promise<OutPutData> => {
  return { value: 1 };
};
