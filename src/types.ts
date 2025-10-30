export type Block =
  | { id: string; type: "paragraph"; text: string }
  | { id: string; type: "title"; text: string }
  | { id: string; type: "subTitle"; text: string }
  | { id: string; type: "image"; url: string; alt?: string };
  