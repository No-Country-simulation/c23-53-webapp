"use client"
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; 

const CodeSnippet = () => {
  const [codes] = useState([
    `import { Button } from '@tu-libreria/ui-components';

export default function App() {
  return (
    <>
      <Button variant="primary">Primario</Button>
      <Button variant="secondary" size="lg">Secundario Grande</Button>
      <Button disabled>Deshabilitado</Button>
    </>
  );
}
                 
`
  ]);

  return (
    <div className="bg-gray-800 p-6 min-h-screen flex justify-center w-full">
      <h1 className="text-3xl font-bold mb-6 text-white">Código en TSX</h1>
      <div className="grid grid-cols-1 gap-4">
        {codes.map((code, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg">
            <CodeBlock code={code} language="tsx" />
          </div>
        ))}
      </div>
    </div>
  );
};

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  return (
    <SyntaxHighlighter language={language}  style={oneDark} wrapLines={true}>
      {code}
    </SyntaxHighlighter>
  );
};


export default CodeSnippet;
