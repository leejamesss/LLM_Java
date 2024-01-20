import { useState } from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null);
  };

  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="h-16 border-b border-b-slate-200 py-4">
          <nav className="ml-4 pl-6">
            <a href="http://localhost:8080/frontend.html" className="hover:text-slate-600 cursor-pointer">
              首页
            </a>
            <input type="file" id="fileUpload" onChange={handleFileChange} style={{ display: 'none' }} />
            <label htmlFor="fileUpload" className="cursor-pointer ml-4 hover:text-slate-600">上传文件</label>
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}