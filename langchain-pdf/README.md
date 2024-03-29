# Langchain-PDF 

使用 GPT-4 API 为多个 PDF 文件构建一个 ChatGPT 聊天机器人。

技术栈包括：LangChain、Pinecone、TypeScript、OpenAI 和 Next.js。LangChain 使构建可扩展的 AI/LLM 应用和聊天机器人更轻松。Pinecone 是一个向量存储库，用于存储嵌入式文档和文本，以便稍后查找相似文档。

运行步骤：

1. 安装依赖包：

首先运行 `npm install multer` 以全局安装 multer（如果尚未安装）。

然后运行：

```
yarn install
```

安装完成后，可以看到一个 `node_modules` 文件夹。

2. 设置 `.env` 文件：

- 将 `.env.example` 复制到 `.env`。
  `.env` 文件应如下所示：

```
OPENAI_API_KEY=

PINECONE_API_KEY=
PINECONE_ENVIRONMENT=

PINECONE_INDEX_NAME=
```

- 访问 [pinecone](https://pinecone.io/) 创建账户并获取 API 密钥，同时从仪表板获取环境和索引名称。

1. 在 `config` 文件夹中，将 `PINECONE_NAME_SPACE` 更改为希望存储嵌入式的 Pinecone 命名空间。在此命名空间中，可以通过运行 `npm run ingest` 将嵌入式文档添加到 Pinecone。此命名空间稍后将用于查询和检索。

2. 在 `utils/makechain.ts` 文件中，根据使用场景更改 `QA_PROMPT`。将 `modelName` 更改为 `gpt-4`（如果有权访问 `gpt-4` API）。请务必在项目外部验证是否有权访问 `gpt-4` API，否则应用程序将无法正常工作。

**处理多个 PDF 文件：**

1. 在 `docs` 文件夹中，添加 PDF 文件或包含 PDF 文件的分组。

2. 运行脚本 `yarn run ingest` 以摄取并嵌入文档。

3. 检查 Pinecone 仪表板以验证命名空间和向量是否已添加。

运行应用程序：

在成功将嵌入式内容和 Pinecone 添加后，可以运行应用程序 `npm run dev` 以启动本地开发环境。然后，在聊天界面输入问题，与 ChatGPT 机器人互动。
