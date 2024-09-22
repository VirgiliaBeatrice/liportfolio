import { useState, useEffect } from 'react';
import { BibtexParser, Entry } from 'bibtex-js-parser';

export function useBibParser(filePath: string) {
  const [bibEntries, setBibEntries] = useState<Entry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchAndParseBib() {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error('Failed to fetch BibTeX file');
        }
        const bibContent = await response.text();
        const parsedEntries = BibtexParser.parseToJSON(bibContent);
        
        setBibEntries(parsedEntries);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
        setIsLoading(false);
      }
    }

    fetchAndParseBib();
  }, [filePath]);

  return { bibEntries, isLoading, error };
}