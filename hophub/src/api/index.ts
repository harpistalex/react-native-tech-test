import useSWR from "swr";
import useSWRInfinite, { SWRInfiniteResponse } from "swr/infinite";

export interface Paginated<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
}

const HOST = "https://api.punkapi.com/v2/";

export async function fetcher<T>(
  endpoint: string,
  init: RequestInit = { method: "GET", redirect: "follow" }
) {
  const requestOptions = {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init.headers,
    },
  };

  const response = await fetch(HOST + endpoint, requestOptions);

  const bodyText = await response.text();
  const body = parseBody(bodyText);
  console.log("Fetcher!", HOST + endpoint);
  if (!response.ok) {
    throw new Error(`${response}, ${body}`);
  }
  return body as T;
}

export function parseBody(body: string) {
  try {
    return JSON.parse(body);
  } catch {
    return null;
  }
}

export const useAPI = <T>(endpoint: string) => {
  return useSWR<T>(endpoint, fetcher);
};

export const usePaginatedAPI = <T>(
  endpoint: string,
  limit: number = 10
): SWRInfiniteResponse<T> => {
  const getKey = (pageIndex: number, previousPageData: T[]) => {
    if (previousPageData && !previousPageData.length) {
      return null;
    }
    return `${endpoint}?page=${pageIndex + 1}&per_page=${limit}`;
  };
  const response = useSWRInfinite<T>(getKey, fetcher, {
    revalidateFirstPage: false,
  });
  return response;
};
