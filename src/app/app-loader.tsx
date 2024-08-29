import { ReactNode, useEffect, useState } from 'react';
import { fetchEmployees } from '@/entities/employee';
import { useAppDispatch } from '@/shared/lib/redux';
import { Spinner } from '@/shared/ui/spinner/spinner';

export function AppLoader({ children }: { children?: ReactNode }) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([dispatch(fetchEmployees())]).finally(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return <>{children}</>;
}
