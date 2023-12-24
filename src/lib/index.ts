export const fetcher = (url: URL) => fetch(url).then((res) => res.json());

export const sendRequest = (url: URL, { arg }: { arg: {} }) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  });
};

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}
