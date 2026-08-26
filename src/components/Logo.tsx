import { FlaskConical } from 'lucide-react';

export function Logo() {
  return (
    <span className="flex size-10 items-center justify-center rounded-full bg-brand-800 text-sand-50">
      <FlaskConical className="size-5" aria-hidden="true" />
    </span>
  );
}
