import { useMemo } from 'react';
import { Publication } from '@/types';

export function usePublicationCategories(publications: Publication[]) {
  return useMemo(() => {
    return publications.reduce((acc, pub) => {
      const category = pub.type || 'Uncategorized';
      acc[category] = [...(acc[category] || []), pub];
      return acc;
    }, {} as Record<string, Publication[]>);
  }, [publications]);
}