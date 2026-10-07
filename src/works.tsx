// src/works.tsx

export type LinkType = 'site' | 'github' | 'qiita' | 'zenn' | 'slide' | 'other';

export interface WorkLink {
  type: LinkType;
  url: string;
  label?: string;
}

export interface WorkItem {
  title: string;
  tags: string[];
  desc: string;
  links: WorkLink[];
}

export const worksData: WorkItem[] = [
  {
    title: "About Me AI（職務経歴特化型 RAG対話システム）",
    tags: ["React", "FastAPI", "LangChain", "Gemini API", "Chroma", "AWS", "Terraform", "Docker"],
    desc: "職務経歴書をベクトル化し、Gemini APIとLangChainを活用してスキルや経験について自然言語で対話できるAIチャットシステム。AWS（ECS Fargate, ALB, CloudFront, S3 OAC）上にTerraformを用いて完全IaCで構築しています。",
    links: [],
  },
  {
    title: "求人サイトのスクレイピング",
    tags: ["Python", "BeautifulSoup", "Google Sheets API"],
    desc: "求人サイトから特定のキーワードがある求人だけを抽出し、Googleスプレッドシートへ自動書き出しを行うツールを開発しました。",
    links: [
      { type: "github", url: "https://github.com/EngineerTSUYOSHI/scraping-system-test" }
    ],
  },
  {
    title: "ポートフォリオサイト制作",
    tags: ["React", "AWS", "Tailwind CSS"],
    desc: "本サイトの制作です。AWS（S3, CloudFront, Lambda, SES）を使用したサーバーレス構成で、お問い合わせ機能まで実装しています。",
    links: [
      { type: "github", url: "https://github.com/EngineerTSUYOSHI/My_Portfolio" }
    ],
  },
];