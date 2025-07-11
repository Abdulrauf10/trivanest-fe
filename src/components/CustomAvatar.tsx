import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface CustomAvatarProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
}

export function CustomAvatar({
  src,
  alt = 'Avatar',
  fallback = 'NA',
  className,
}: CustomAvatarProps) {
  return (
    <Avatar className={cn('w-10 h-10', className)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
