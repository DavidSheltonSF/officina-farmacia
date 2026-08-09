import { FlaskConical } from 'lucide-react';

export function Logo() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-800 text-sand-50">
      <FlaskConical className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}
