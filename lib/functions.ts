export const onError = (err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).end("Error : ", err.message);
};
export const onNoMatch = (req: any, res: any, next: any) => {
  res.status(404).end("Page is not found");
};
