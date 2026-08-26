import { FlaskConical } from 'lucide-react';
import { IconWrapper } from './ui/IconWrapper';

export function Logo() {
  return (
    <IconWrapper color='dark' >
      <FlaskConical className="size-5" aria-hidden="true" />
    </IconWrapper>
  );
}
